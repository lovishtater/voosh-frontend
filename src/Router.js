import {BrowserRouter , Routes , Route } from 'react-router-dom';

import Home from './views/Home';
import CreateOrder from './views/CreateOrder';
import AllOrder from './views/AllOrder';
import Navbar from './components/Navbar';
import Signup from './views/SignUp';
import Signin from './views/SignIn';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/all-order" element={<AllOrder />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;