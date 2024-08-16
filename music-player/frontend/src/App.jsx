import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

function App() {

  return (<>
    <div className='p-3 flex gap-3 min-h-screen'>
      <LeftPanel />
      <RightPanel />
    </div>
  </>)
}

export default App
