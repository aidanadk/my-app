import React from 'react'
import { JobsContext } from '../../context/jobsContext'
const Details = () => {
  const { postedAt, contract, location } = React.useContext(JobsContext)
  return (
    <div>
      <ul className="job__details job-details">
        <li className="job-details__item">{postedAt} </li>
        <li className="job-details__item">{contract}</li>
        <li className="job-details__item">{location}</li>
      </ul>
    </div>
  )
}

export default Details
