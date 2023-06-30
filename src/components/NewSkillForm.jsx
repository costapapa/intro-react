import './css/NewSkillForm.css'
import { useState } from 'react'

function NewSkillForm({ updateSkill }) {

    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3
    })

    function handleSubmit() {
        updateSkill(newSkill)
    }

    function setSkillValue(e) {
        const newSkillData = {
            ...newSkill,
            [e.target.name]: e.target.value
        }
        setNewSkill(newSkillData)
    }
    
    return (
        <form className="NewSkillForm">
            <label>Skill </label>
            <input placeholder='New Skill'
                name="name" value={newSkill.name}
                onChange={setSkillValue}></input>
            <label>Level </label>
            <select name="level"
                value={newSkill.level}
                onChange={setSkillValue}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="button" onClick={handleSubmit}> Add Skill</button>
        </form>
    
    
    )




}




export default NewSkillForm