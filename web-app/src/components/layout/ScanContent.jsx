import { useState } from "react";
import AtAGlanceStats from "./AtAGlanceStats";
import CodeEditor from "../features/CodeMirrorIntegration";
import CurrentScanResults from "../features/ScanResults";

export default function ScanContent() {

  const [currentView, setCurrentView] = useState("codeEditor");

  let activeComponent;
  switch (currentView) {
    case "codeEditor":
      activeComponent = <CodeEditor />;
      break;
    case "scanResults":
      activeComponent = <CurrentScanResults />;
      break;
    default:
      activeComponent = <CodeEditor />
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <AtAGlanceStats />

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1">
        <div className="flex flex-row gap-5 align-middle items-center">
          <button
            onClick={() => setCurrentView("codeEditor")}
            className="max-w-32 bg-transparent items-center justify-center flex border-2 border-slate-800 shadow-lg hover:bg-slate-800 text-slate-800 hover:text-zinc-100 duration-300 cursor-pointer active:scale-[0.98] rounded-xl p-2 hover:cursor-pointer">Code Editor</button>

          <button onClick={() => { setCurrentView("scanResults") }}
            className="max-w-32 bg-transparent items-center justify-center flex border-2 border-slate-800 shadow-lg hover:bg-slate-800 text-slate-800 hover:text-zinc-100 duration-300 cursor-pointer active:scale-[0.98] rounded-xl p-2 hover:cursor-pointer">Scan Results</button>
        </div>
        <div className="flex-1">
          {activeComponent}
        </div>
      </div>
    </div>
  );
}