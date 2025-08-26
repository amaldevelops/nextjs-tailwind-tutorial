import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo size-12 shrink-0 hover:bg-sky-700"
            />
          </a>
          <div>
            <div className="text-xl font-medium text-black dark:text-white hover:bg-sky-700">
              ChitChat
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              You have a new message!
            </p>
          </div>
        </div>
        <h1 className="font-bold underline ">This is Tailwind CSS</h1>
      </div>
      <h1 className="underline">Vite + React</h1>
      <div className="card">
        <button className="hover:bg-sky-1700"onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
