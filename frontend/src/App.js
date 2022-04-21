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
  let [engineerArr, setEngineerArr] = useState([])
  const [location, setLocation] = useState("")
  const [seeker, setSeeker] = useState(null)
  let [summary, setSummary] = useState(
    {
      benefits: "Cash",
      company: {
        id: 1,
        mission_statement: "We’re committed to helping people learn the skills they need to change their lives and the world for the better.",
        rating: 5,
        tags: "Positive, Upbeat, Fun",
        title: "Flatiron",
        created_at: "2022-04-21T15:07:43.613Z",
        updated_at: "2022-04-21T15:07:43.613Z"
      },
      company_id: 1,
      created_at: "2022-04-21T15:07:43.735Z",
      description: "Be a Boss",
      hybrid: true,
      id: 1,
      job_frontier: 1,
      logo: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png",
      remote: false,
      salary: "$200,000",
      title: "Flatiron Ceo",
      updated_at: "2022-04-21T15:07:43.735Z"
    }
  )

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((seekerData) => setSeeker(seekerData));
      }
    });
  }, []);

  console.log(jobs);
  console.log(seeker);

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

  function displayNewCard(job) {
    setSummary(job)
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


    </Routes>

    </div>
  );
}

export default App;
