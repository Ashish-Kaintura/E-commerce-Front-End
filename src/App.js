import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Private_component from './Component/Private_component';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
import UpdateComponent from './Component/UpdateComponent';
function App() {
  return (
    <div className="App">
     <BrowserRouter basename="/E-commerce-front-end">
     <Navbar/>
     {/* <h1 style={{color:"blue",textAlign:"center",marginTop:"20px"}}>E-Dashvoard</h1> */}
      <Routes>
        <Route element={<Private_component/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateComponent/>}/>
        <Route path='/logout' element={<h1 style={{color:"blue",textAlign:"center",marginTop:"20px"}}>Logout </h1>}/>
        <Route path='/profile' element={<h1 style={{color:"blue",textAlign:"center",marginTop:"20px"}}>Profile</h1>}/>
       </Route>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
