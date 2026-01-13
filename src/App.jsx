import Navbar from './components/Navbar'
import ChartSection from './components/ChartSection'
import RightSidebar from './components/RightSidebar'
import BottomPanel from './components/BottomPanel'
import './App.css'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable"

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#0f0f1e] overflow-hidden">
      <Navbar />
      <div className="flex-1 min-h-0 p-1 flex flex-col gap-1">
        <div className="flex gap-1 flex-1 min-h-0">
          <div className="w-[1070px] flex-shrink-0">
            <ChartSection />
          </div>
          <div className="flex-1 min-w-0">
            <RightSidebar />
          </div>
        </div>
        <div className="h-[200px] flex-shrink-0">
          <BottomPanel />
        </div>
      </div>
    </div>
  )
}

export default App
