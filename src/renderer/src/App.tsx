import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TitleBar from './components/TitleBar'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex min-h-[100vh] flex-col justify-center bg-amber-50 p-8 select-none *:mx-auto *:not-first:mt-4">
      <TitleBar />
      <div className="size-48">
        <img
          alt="logo"
          className="transition-all duration-300 hover:drop-shadow-[0_0_16px_#ffb900]"
          src={electronLogo}
        />
      </div>
      <h1 className="text-2xl font-bold text-amber-900">🤗Hello, world!</h1>
      <p className="text-amber-900">Welcome to your Electron application.</p>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={ipcHandle}
          className="hover:bg inline-block cursor-pointer rounded-full border-1 border-amber-600 bg-amber-100 px-6 py-2 font-bold text-amber-900 shadow shadow-amber-800/30 transition-all hover:bg-amber-200 hover:shadow-md active:bg-amber-100 active:shadow-none"
        >
          Send IPC
        </a>
      </div>
      <Versions></Versions>
    </div>
  )
}

export default App
