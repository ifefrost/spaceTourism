import { Route, Routes, useLocation } from "react-router-dom";
import TopNav from "./components/topNav";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import data from "./data.json";

function App() {
  const location = useLocation().pathname;
  const curPage = location.split("/")[1];
  return (
    <>
      <div className={`${"bg" + curPage} min-h-screen`}>
        <div className="mx-5 flex flex-col md:container md:mx-auto">
          <TopNav curPage={curPage} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination data={data.destinations} />} />
            <Route path='/crew' element={<Crew data={data.crew} />} />
            <Route path='/technology' element={<div>Technology</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
