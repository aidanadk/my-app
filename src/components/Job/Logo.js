import React from 'react'
import { JobsContext } from '../../context/jobsContext'
const Logo = () => {
  const { logo } = React.useContext(JobsContext)
  return (
    <div className="job__image">
      <img className="job__logo" src={logo} alt={logo} />
    </div>
  )
}

export default Logo
