import TechPage from './components/tech/tech';
import HomePage from './components/home/home';
import SportsPage from './components/sports/sports';
import HollywoodPage from './components/hollywood/hollywood';
import FoodPage from './components/food/food';
import FitnessPage from './components/fitness/fitness';
import TechBlogPage from './components/blog/techblog';
import SportsBlogPage from './components/blog/sportsblog';
import FoodBlogPage from './components/blog/foodblog';
import HollywoodBlogPage from './components/blog/hollywoodblog';
import FitnessBlogPage from './components/blog/fitnessblog';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import "./_common.scss";
// import dataJson from "./backend/alldata.json"
// import homeJson from "./backend/homedata.json"
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {io} from "socket.io-client"

function App() {

  let socket=io("https://sirenblogserver.herokuapp.com/")
  let stateElement=useSelector((state)=>{return state})
  let dispatch=useDispatch()

  useEffect(()=>{
    socket.emit("SENDDATA","Data to backend")
    socket.emit("SENDHOMEDATA","Data to backend")
    socket.on("DATASENT",(backendData)=>{
      dispatch({
          type:"FETCH",
          payload:backendData
      })
    })
    socket.on("HOMEDATASENT",(backendData)=>{
      dispatch({
          type:"FETCHHOMEDATA",
          payload:backendData
      })
    })
  },[])

  let [iconValue,iconChange]=useState({
    initialValue:faBars
  });

  function handleClick(){
    let navBox=document.querySelector(".NavBarLogo nav");
    navBox.classList.toggle("displayOn")
    iconChange(()=>{
      if(iconValue.initialValue===faBars){
        return{
          initialValue:faXmark
        }
      }
      else if(iconValue.initialValue===faXmark){
        return{
          initialValue:faBars
        }
      }
    })
  }

  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
      <div className="NavBarLogo">
        <h1 className="mainLogo"><span className="rotateLogo">The</span> Siren</h1>
        <FontAwesomeIcon icon={iconValue.initialValue} onClick={handleClick} className="hamburger-menu"/>
        <nav>
          <NavLink className="navlinks" to="/">Home</NavLink>
          <NavLink className="navlinks" to="/category/technology">Tech</NavLink>
          <NavLink className="navlinks" to="/category/sports">Sports</NavLink>
          <NavLink className="navlinks" to="/category/hollywood">Hollywood</NavLink>
          <NavLink className="navlinks" to="/category/food">Food</NavLink>
          <NavLink className="navlinks" to="/category/fitness">Fitness</NavLink>
        </nav>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<HomePage data={stateElement.homeJsonData}/>}></Route>
        <Route path="/category/technology" element={<TechPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/technology/:id" element={<TechBlogPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/sports" element={<SportsPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/sports/:id" element={<SportsBlogPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/hollywood" element={<HollywoodPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/hollywood/:id" element={<HollywoodBlogPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/food" element={<FoodPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/food/:id" element={<FoodBlogPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/fitness" element={<FitnessPage data={stateElement.jsonData}/>}></Route>
        <Route path="/category/fitness/:id" element={<FitnessBlogPage data={stateElement.jsonData}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
