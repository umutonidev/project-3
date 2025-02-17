
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import View from "./component/View";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/'element={<Layout/>}>


        {/* <Route path="Navbar"element={<Navbar/>}/>
        <Route path="Sidebar"element={<Sidebar/>}/> */}
        <Route path="/View"element={<View/>}/>
        </Route>
      </Routes>
    </Router>
    
      
      
    
  )
}

export default App
