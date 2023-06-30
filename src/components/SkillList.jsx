import SkillListItem from "./SkillListItem"
import './css/SkillList.css'

function SkillList({ skills }) {

    const skillListItems = skills.map((s, idx) =>
        <SkillListItem skill={s} index={idx} key={idx} />
    )
    
    return (
        <>
            <ul className="SkillList">
                {skillListItems}
            </ul>
        </>

    )
}

export default SkillList