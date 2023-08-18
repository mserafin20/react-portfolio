import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navigation from "./components/Nav";
import ProjectList from "./components/ProjectList";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <>
     <Navigation />
     <ProjectList />
     
    </>
  )
}

export default App;
