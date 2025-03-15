import TitleBarBase from './TitleBarBase'

function TitleBar(): JSX.Element {
  return (
    <TitleBarBase>
      <div className="bg-opacity-0 hover:bg-opacity-50 flex h-full items-center justify-between px-4 *:max-h-full">
        <div className="text-[12px]">Electron App</div>
      </div>
    </TitleBarBase>
  )
}

export default TitleBar
