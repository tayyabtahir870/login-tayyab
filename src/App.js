import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Layouts/Header';
import Login from './Components/Elements/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './Components/Elements/Signin';
import Footer from './Components/Layouts/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/signin' element={<Signin/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
     

    </div>
  );
}

export default App;
