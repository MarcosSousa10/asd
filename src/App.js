import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FaleConosco from "./pages/FaleConosco/index";
// import Footer from "./componentes/Footer/index";
import './style.css';
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primeflex/primeflex.css'


function App() {

    return (  
    <BrowserRouter >
        
        <Routes>
        <Route path = '/'  element={<FaleConosco/>}/>
        
        </Routes>
       {/* <Footer/> */}
        </BrowserRouter> 

    );
}

export default App;