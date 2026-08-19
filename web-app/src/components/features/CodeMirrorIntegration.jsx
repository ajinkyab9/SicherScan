import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { languages } from "@codemirror/language-data";
import { fetchLanguages } from "../../api/languagesApi";

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
        </div>
    )
}