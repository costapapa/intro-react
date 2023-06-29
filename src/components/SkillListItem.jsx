import './SkillListItem.css'

function SkillListItem({ skill, index }){
    console.log(skill)
    return (
        <li className={"SkillListItem"}>
            <p> {skill.name}</p> <p className="level">Level {skill.level}</p>
        </li>
    );
}

export default SkillListItem
 