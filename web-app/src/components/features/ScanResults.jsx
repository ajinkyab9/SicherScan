//import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
//import { languages } from "@codemirror/language-data";
import AtAGlanceStats from "../ui/AtAGlanceStats";
export default function CurrentScanResults() {
    return (
        <div className="p-2  bg-zinc-50 h-180">
            <div className="mb-3">
                <AtAGlanceStats />
            </div>
            <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full p-5">
                <div className="overflow-y-scroll no-scrollbar col-span-5 row-span-5 bg-slate-800 text-white rounded-2xl shadow-sm hover:shadow-md transition border border-slate-700">
                    <h2 className="sticky top-0 z-10 bg-slate-800 p-6 pb-4 text-xl font-bold">
                        Vulnerabilities found
                    </h2>
                    <div className="flex flex-col gap-6 px-6 pb-6">
                        <div className="bg-slate-200 text-slate-800 h-12 rounded-xl p-2 flex items-center hover:cursor-pointer hover:bg-rose-100 hover:text-rose-800">
                            <p>Vuln name</p>
                        </div>
                        <div className="bg-slate-200 text-slate-800 h-12 rounded-xl p-2 flex items-center hover:cursor-pointer hover:bg-rose-100 hover:text-rose-800">
                            <p>Vuln name</p>
                        </div>
                        <div className="bg-slate-200 text-slate-800 h-12 rounded-xl p-2 flex items-center hover:cursor-pointer hover:bg-rose-100 hover:text-rose-800">
                            <p>Vuln name</p>
                        </div>
                        <div className="bg-slate-200 text-slate-800 h-12 rounded-xl p-2 flex items-center hover:cursor-pointer hover:bg-rose-100 hover:text-rose-800">
                            <p>Vuln name</p>
                        </div>
                        <div className="bg-slate-200 text-slate-800 h-12 rounded-xl p-2 flex items-center hover:cursor-pointer hover:bg-rose-100 hover:text-rose-800">
                            <p>Vuln name</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-7 row-span-11 bg-slate-800 text-slate-800 p-6 rounded-2xl flex flex-col justify-between border border-slate-200">
                    <h3 className="font-semibold text-zinc-100 uppercase text-xs tracking-wider">Code patch</h3>
                    <div className="h-full m-2 p-4">
                        <div className="h-1/2">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-slate-100">Command Injection</h2>
                                <span className="text-lg font-semibold text-slate-300">CVSS 9.8</span>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">Description</h3>
                                <p className="text-slate-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque excepturi vel asperiores placeat consequuntur quibusdam inventore quia nulla earum dolores odio, laborum similique, modi voluptate, facere impedit rem? Nesciunt!</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">Recommended Fix</h3>
                                <p className="bg-emerald-100 text-emerald-800 leading-relaxed p-2 rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque excepturi vel asperiores placeat consequuntur quibusdam inventore quia nulla earum dolores odio, laborum similique, modi voluptate, facere impedit rem? Nesciunt!</p>
                            </div>

                        </div>
                        <div className="h-1/2 mt-16">
                            <CodeMirror
                                className="overflow-hidden rounded-lg border border-emerald-100"
                                height="12rem"
                                //value={code}
                                theme={vscodeDark}
                                readOnly="true"
                            //extensions={activeExtensions}
                            //onChange={(value) => setCode(value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="gap-1 col-span-3 row-span-2 bg-slate-50 text-slate-800 p-4 rounded-2xl flex flex-col justify-between border border-slate-200 shadow-sm">
                    <h3 className="font-semibold text-slate-800 uppercase text-xs tracking-wider">Highest Risk</h3>
                    <div className="text-slate-500 text-s">Command Injection</div>
                    <div className="text-red-800 w-1/3  text-sm">Critical</div>
                </div>
                <div className="col-span-2 row-span-2 bg-slate-50 text-slate-800 p-4 rounded-2xl flex flex-col justify-between border border-slate-200 shadow-sm">
                    <h3 className="font-semibold text-slate-800 uppercase text-xs tracking-wider">Overall Score</h3>
                    <div className="text-slate-800 text-lg">73%</div>
                </div>
                <div className="col-span-5 row-span-4 bg-slate-900/30 text-slate-600 p-5 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-700 shadow-sm">
                    <span className="font-mono text-sm tracking-widest uppercase">TBD / Future Metric / IDK</span>
                </div>
            </div>
        </div>
    )
}