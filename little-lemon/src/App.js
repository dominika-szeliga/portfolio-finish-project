import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Chicago from './Chicago';
import Specials from './Specials';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';
import Login from './Login';
import ConfirmedBooking from './ConfirmedBooking';



function App() {
  return (
    <>
      <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>  {/* domyślna strona główna*/}
            <Route path='/home' element={<Main/>}/>
            <Route path="/about" element={<Chicago/>}/>
            <Route path='/menu' element={<Specials/>}/>
            <Route path='/reservations' element={<BookingPage/>}/>
            <Route path='/order_online' element={<OrderOnline/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/confirmed' element={<ConfirmedBooking/>}/>
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
