import './css/SkillListItem.css'

function SkillListItem({ skill, index }){
    
    return (
        <li className={"SkillListItem"}>
            <p> {skill.name}</p> <p className="level">Level {skill.level}</p>
        </li>
    );
}

export default SkillListItem
 