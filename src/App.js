import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./tailwind.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/coffees" />
        <Route path='/teas' />
        <Route path="/cakes" />
        <Route path="/blogs" />
        <Route path="/cart" />
        <Route path='/order' />
        <Route path="/account" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
