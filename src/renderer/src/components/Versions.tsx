import { useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div className="fixed bottom-0 left-1/2 w-[100vw] -translate-x-1/2 p-4">
      <ul className="flex justify-center text-center font-mono text-sm text-amber-900/60 *:px-4 *:not-first:border-l">
        <li>Electron v{versions.electron}</li>
        <li>Chromium v{versions.chrome}</li>
        <li>Node v{versions.node}</li>
      </ul>
    </div>
  )
}

export default Versions
