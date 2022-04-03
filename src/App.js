import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Navbar from './Component/navbar/Navbar';
import Reviews from './Component/Reviews/Reviews';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Services></Services>
    </div>
  );
}

export default App;
