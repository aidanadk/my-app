import React from 'react'

const Logo = ({logo}) => {
  return (
    <div className="job__image">
      <img className="job__logo" src={logo} alt={logo} />
    </div>
  )
}

export default Logo
