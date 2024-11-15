
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";

import "./style.css";

function App() {
  
  return (
    <>
      <Header />
      <Outlet/>
    
    </>
  );
}

export default App;
