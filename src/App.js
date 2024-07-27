import "./App.scss"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CardDetails from "./Components/Home/CardDetails"
import Movies from "./Components/Header/Header-Components/Movies"
import RecentlyAdded from "./Components/Header/Header-Components/RecentlyAdded"
import MyList from "./Components/Header/Header-Components/MyList"
import "./Components/Home/CardDetails.scss"
import "./Components/Header/Header-Components/Shows.scss"



function App() {


  return <Router>
    <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>

  </Router>
}

export default App;
