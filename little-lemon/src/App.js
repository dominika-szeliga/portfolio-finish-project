import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Chicago from './Chicago';
import Specials from './Specials';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';
import Login from './Login'

function App() {
  return (
    <>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>  {/* domyślna strona główna*/}
            <Route path='/home' element={<Home/>}/>
            <Route path="/about" element={<Chicago/>}/>
            <Route path='/menu' element={<Specials/>}/>
            <Route path='/reservations' element={<BookingPage/>}/>
            <Route path='/order_online' element={<OrderOnline/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
