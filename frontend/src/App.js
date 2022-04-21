import './App.css';
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results"
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import MyPage from './MyPage';





function App() {

  let [jobs, setJobs] = useState([])
  const [frontier, setFrontier] = useState("")
  const [location, setLocation] = useState("")
  const [seeker, setSeeker] = useState(null)
  let [summary, setSummary] = useState({
    summary: {
      benefits: "Cash",
      company: {
        mission_statement: "We’re committed to helping people learn the skills they need to change their lives and the world for the better.",
        rating: 5,
        tags: "Positive, Upbeat, Fun",
        title: "Flatiron"
      },
      remote: false,
      salary: "$200,000",
      title: "Flatiron Ceo"
    }
  })

  useEffect(() => {
    // auto-login
    fetch("http://localhost:4000/me").then((r) => {
      if (r.ok) {
        r.json().then((seekerData) => console.log(seekerData));
      }
    });
  }, []);

  console.log(jobs);

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
    .then(resp => resp.json())
    .then(data => {
      setJobs(data)

    })
  }, [])

  useEffect(() => {
    document.body.style.overflow ='hidden';
}, [])

  function formData(frontier,location) {
   setFrontier(frontier)
   setLocation(location)
  }

  function displayNewCard(summary) {
    setSummary(summary)
  }

  return (
    <div className="App">
      
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home formData={formData} />}/>
    <Route path="/results" element={<Results location={location} frontier={frontier} jobs={jobs} displayNewCard={displayNewCard} summary={summary} />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/my_page" element={<MyPage/>}/>
    <Route path="/results" element={<Results location={location} frontier={frontier} jobs={jobs} />}/>


    </Routes>

    </div>
  );
}

export default App;
