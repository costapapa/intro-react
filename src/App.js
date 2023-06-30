import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";
import "./styles.css";
import { useState } from "react";



function App(){

  //! State
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 5},
  ]);

  //state to show skills
  const [showSkills, setShowSkills] = useState(true)

  function updateSkill(newSkill){
    setSkills([...skills, newSkill])
  }
  
 return (
    <div className="App teal-text">
        <h1 className="title">React Dev Skills</h1>
        { showSkills && <SkillList skills={skills}/>}
        <hr></hr>
        <NewSkillForm updateSkill={updateSkill}/>
    </div>
 )
}

 export default App