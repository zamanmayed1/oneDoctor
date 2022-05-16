import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Booked from './Pages/Dashboard/Booked';
import Myappoinment from './Pages/Dashboard/Myappoinment';
import Myhistory from './Pages/Dashboard/Myhistory';
import Alluser from './Pages/Dashboard/Alluser';
import RequierAdmin from './Pages/Shared/RequierAdmin';

function App() {
  return (
    <div className="max-w-7xl mx-auto  ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='booked' element={<Booked></Booked>}></Route>
          <Route path='myappoinment' element={<Myappoinment />}></Route>
          <Route path='myhistory' element={<Myhistory />}></Route>
          <Route path='alluser' element={<RequierAdmin><Alluser /></RequierAdmin>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
