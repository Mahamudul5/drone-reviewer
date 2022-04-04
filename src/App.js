import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import Navbar from './Component/navbar/Navbar';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Reviews from './Component/Reviews/Reviews';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Navbar" element={<Navbar />}></Route>
        <Route path="Reviews" element={<Reviews />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="Services" element={<Services />}></Route>
        <Route path="Blogs" element={<Blogs />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
