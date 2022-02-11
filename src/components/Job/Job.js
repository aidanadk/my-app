import React from 'react'
import Company from './Company'
import Details from './Details'
import Logo from './Logo'
import './style.scss'

const Job = ({ setFilterItems, role, level, languages, position, isNew, isFeatured }) => {
  const handleClicktoSkill = (event) => {
    const newSkill = event.target.textContent
    setFilterItems((prev) => prev.includes(newSkill) ? prev : [...prev, newSkill]);
    
  }
  return (
    <div className={`job ${isNew && isFeatured ? 'job_active' : ''}`}>
      <div className="job__left">
        <Logo />
        <div className="job__info">
          <Company />
          <h3 className="job__title">{position}</h3>
          <Details />
        </div>
      </div>
      <div className="job__right">
      <ul onClick={handleClicktoSkill} className="job-skills">
        <li className="job-skills__item">{role}</li>
        <li className="job-skills__item">{level}</li>
        {languages.map((language) => {
          return (
            <li onClick={() => handleClicktoSkill(language)} key={language} className="job-skills__item">
              {language}
            </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}

export default Job
