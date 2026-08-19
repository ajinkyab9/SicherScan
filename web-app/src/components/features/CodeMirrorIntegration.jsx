import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { languages } from "@codemirror/language-data";
import { fetchLanguages } from "../../api/languagesApi";
import { submitCodeScanRequest } from "../../api/scanApi";

export default function CodeEditor() {
    const [code, setCode] = useState("// Select a language and past your code to be scanned here,");
    const [langName, setLangName] = useState("Select");
    const [activeExtensions, setActiveExtensions] = useState([]);
    const [loadLang, setLoadLang] = useState([]);

    useEffect(() => {
        const loadLangData = async () => {
            const langData = await fetchLanguages();
            setLoadLang(langData);
        };
        loadLangData();
    }, []);

    //handling of dd and load the lang dynamically
    const handleLanguageChange = async (e) => {
        const selectedLang = e.target.value;
        setLangName(selectedLang);

        //get language metadata
        const getLangMeta = languages.find((l) =>
            l.name.toLowerCase() === selectedLang
        );

        if (getLangMeta) {
            const langSupport = await getLangMeta.load();
            setActiveExtensions([langSupport]);
        } else {
            setActiveExtensions([]);
        }
    };

    const handleCodeSubmit = async () => {
        if (!code || code === "// Select a language and past your code to be scanned here," || langName === "Select") {
            alert("Please select a language and paste a valid code snippet");
            return;
        }

        const codePayload = {
            "userName": "dev",
            "codeSnippet": code,
            "langName": langName
        };

        try {
            console.log("Sending code payload", codePayload);
            const codeScanResult = await submitCodeScanRequest(codePayload);

            console.log("Scan results:", codeScanResult);
        } catch (error) {
            console.error("Error connecting with the server.", error);
            alert("Error conneting with the server");
        }
    }

    return (
        <div className="p-10">
            <div className="m-2">
                <label htmlFor="lang-select">Language: </label>
                <select id="lang-select" value={langName} onChange={handleLanguageChange}>
                    <option value="">Select</option>
                    {loadLang.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
            <CodeMirror
                value={code}
                height="25rem"
                theme={vscodeDark}
                extensions={activeExtensions}
                onChange={(value) => setCode(value)}
            />
            <button className="mt-6 max-w-32 bg-transparent items-center justify-center flex border-2 border-slate-800 shadow-lg hover:bg-slate-800 text-slate-800 hover:text-zinc-100 duration-300 cursor-pointer active:scale-[0.98] rounded-xl p-2 hover:cursor-pointer"
                onClick={handleCodeSubmit}>
                Scan Code
            </button>
        </div>
    )
}