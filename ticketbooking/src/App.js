
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Bookbus from './Components/Bookbus';
import Protect from './Components/Protect';
import Bookticket from './Components/Bookticket';
import ActiveBooking from './Components/ActiveBooking';

function App() {
  return (
    <BrowserRouter>
    <div className="App" >
       <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={ <Protect Child={Home}/>  }/>
            <Route path='/profile' element={ <Protect Child={Profile}/>  }/>
            <Route path='/bus' element={<Protect Child={Bookbus}/>}/>
            <Route path='/busdetail/:busid' element={<Protect Child={Bookticket}/>}/>
            <Route path='/active' element={<Protect Child={ActiveBooking}/>}/>
           
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
