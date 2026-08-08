//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import DashboardLayout from './components/layout/DashboardLayout'
import CodeEditor from './components/features/CodeMirrorIntegration';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
return (
    <DashboardLayout>
      <div className="bg-white w-full p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Vulnerability Scanner Active</h1>
        <p className="text-gray-600 mb-8">
          The layout is working! The sidebar and header are locked in place.
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50 font-mono">
              <CodeEditor />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default App
