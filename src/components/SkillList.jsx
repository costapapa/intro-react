import SkillListItem from "./SkillListItem"
import './SkillList.css'

function SkillList({ skills }) {

    const skillListItems = skills.map((s, idx) =>
        <SkillListItem skill={s} index={idx} key={idx} />
    )
    // const levelSkillsItems = level.map((l, idx) => <levelSkillsItem level={l} index={idx} key={idx} />)
    return (
        <>
            <ul className="SkillList">
                {skillListItems}
            </ul>
        </>

    )
}

export default SkillList