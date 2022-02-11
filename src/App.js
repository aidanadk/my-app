import Job from './components/Job/Job'
import Filter from './components/Filter/Filter'
import { api } from './api'
import React from 'react'
import { JobsContext } from './context/jobsContext'
function App() {
  const [jobs, setJobs] = React.useState([])
  const [filterItems, setFilterItems] = React.useState([])

  // const dataToShare = {jobs, filterItems: []}

  const getJobs = async () => {
    const response = await fetch(api + '/jobs')
    const json = await response.json()
    console.log(json)
    setJobs(json)
  }

  React.useEffect(() => {
    getJobs()
  }, [])

  React.useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      return filterItems.every(filterItem => {
        return job.languages.includes(filterItem)
      })
    })
    if (filteredJobs.length) {
      setJobs(filteredJobs)
    }
  }, [filterItems])

  return (
    <div className="App">
      <div className="header">
        <img
          className="header-img"
          src="./images/bg-header-desktop.svg"
          alt=""
        />
      </div>
      <div className="container app__container">
        {filterItems.length > 0 && <Filter filterItems={filterItems} />}
        {jobs.map((job) => (
          <JobsContext.Provider key={job.id} value={job}>
            <Job {...job} setFilterItems={setFilterItems} />
          </JobsContext.Provider>
        ))}
      </div>
    </div>
  )
}

export default App
