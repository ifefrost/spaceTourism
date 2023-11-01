import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/topNav";
import Home from "./pages/Home";
import Crew from "./pages/Crew";

function App() {
  return (
    <>
      <div className='m-5 min-h-screen flex flex-col'>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<div>Destination</div>} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<div>Technology</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
