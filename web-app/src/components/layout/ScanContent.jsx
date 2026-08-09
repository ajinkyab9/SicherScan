import AtAGlanceStats from "./AtAGlanceStats";
import CodeEditor from "../features/CodeMirrorIntegration";

export default function ScanContent() {
  return(
    <div className="flex flex-col h-full gap-4">
      <AtAGlanceStats />

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1">
        <h1 className="text-2xl, font-bold mb-4">Code Scanner</h1>
        <CodeEditor />
      </div>
    </div>
  );
}