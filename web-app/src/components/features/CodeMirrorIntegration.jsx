import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
//import { vscode } from "@uiw/codemirror-theme-vscode";
import { languages } from "@codemirror/language-data";

export default function CodeEditor() {
    const [code, setCode] = useState("// Select a language and past your code to be scanned here,");
    const [langName, setLangName] = useState("javascript");
    const [activeExtensions, setActiveExtensions] = useState([]);

    //handling of dd and load the lang dynamically
    const handleLanguageChange = async (e) => {
        const selectedLang = e.target.value;
        setLangName(selectedLang);

        //get language metadata
        const getLangMeta = languages.find((l) => 
        l.name.toLowerCase() === selectedLang.toLowerCase || 
        l.alias.includes(selectedLang)
    ); 

    if (getLangMeta) {
        const langSupport  = await getLangMeta.load();
        setActiveExtensions([langSupport.extension]);
    } else {
        setActiveExtensions([]);
    }
};

return (
    <div className="p-20">
        <div className="mb-10">
            <label htmlFor="lang-select">Language: </label>
            <select id="lang-select" value={langName} onChange={handleLanguageChange}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="sql">SQL</option>
                <option value="ruby">Ruby</option>
            </select>
        </div>
        <CodeMirror 
            value={code}
            height="h-500"
            //theme={vscode}
            extensions={activeExtensions}
            onChange={(value) => setCode(value)}        
        />
    </div>
)
}