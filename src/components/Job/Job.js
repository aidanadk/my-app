import React from 'react'
import Logo from '../Logo/Logo'
import Company from '../Company/Company'
import './style.scss'

const Job = ({isNew, isFeatured, languages, position, role, level, company, postedAt, contract, location}) => {
  return (
    <div className="job">
      <div className="job__left">
        <Logo />
        <div className="job__info">
          <div className="job__company job-company">
            <Company />
            <span className='job-company__name'>{company}</span> 
            {isNew && <span className='job-company__new'>NEW!</span>}
            {isFeatured && <span className='job-company__featured'>FEATURED</span>}
            
          </div>
          <h3 className="job__title">{position}</h3>
          <ul className="job__details job-details">
            <li className="job-details__item">{postedAt} </li>
            <li className="job-details__item">{contract}</li>
            <li className="job-details__item">{location}</li>
          </ul>
        </div>
      </div>
      <div className="job__right">
        <ul className="job-skills">
        <li className="job-skills__item">{role}</li>
        <li className="job-skills__item">{level}</li>
            {languages.map((language) => {
             return <li className="job-skills__item">{language}</li>;
            })}
        </ul>
      </div>
    </div>
  )
}

export default Job
