import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";
import "./styles.css";

const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 5},
  ];

function App(){
  
 return (
    <div className="App teal-text">
        <h1 className="title">React Dev Skills</h1>
        <SkillList skills={skills}/>
        <hr></hr>
        <NewSkillForm/>
    </div>
 )
}

 export default App