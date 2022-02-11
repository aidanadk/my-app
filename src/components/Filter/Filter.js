import React from 'react'
import './style.scss'
const Filter = ({ filterItems }) => {
  const handleClicktoDelete = (id) => {
     const deletedSkills = [...filterItems].filter((skill) => skill.id !== id)

  }
  return (
    <div className="filter">
      <ul className="filter__list">
        {filterItems.map((skill) => {
          return (
            <li className="filter__list__item" key={skill.id}>
              {skill}
              <button onClick={() => handleClicktoDelete(skill.id)}>
                 <img  className='remove' src="./images/icon-remove.svg" alt="" />
              </button>
             
            </li>
          )
        })}
      </ul>

      <button className='clear'>Clear</button>
    </div>
  )
}

export default Filter
