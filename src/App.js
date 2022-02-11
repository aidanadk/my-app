import Job from './components/Job/Job'
import headerImg from './assets/images/bg-header-desktop.svg'
import { api } from './api'
import React from 'react'

function App() {
  const [jobs, setJobs] = React.useState([]);

  const getJobs = async () => {
    const response = await fetch(api + '/jobs')
    const json = await response.json()
    console.log(json)
    setJobs(json)
  }

  React.useEffect(() => {
    getJobs()
  },[]) 

  return (
    <div className="App">
      <div className="header">
        <img className="header-img" src={headerImg} alt="" />
      </div>
      <div className="container">
      {jobs.map((job) => {
        return <Job key={job.id} isNew={job.new} {...job}/>
      })}
      </div>
    </div>
  )
}

export default App
