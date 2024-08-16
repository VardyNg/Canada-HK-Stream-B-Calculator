import * as React from 'react';
import NewJobFields from './new-job-fields';
import {
  AddJobButton,
} from '../../molecules';
import {
  Job
} from '../../interfaces';

function WorkingHours() {
  const [jobs, setJobs] = React.useState<Array<Job>>([]);
  
  const handleAddJob = () => {
    console.log('handleAddJob')
    setJobs([
      ...jobs,
      {}
    ])
  }

  return (
    <>
      Working hours
      <AddJobButton 
        onClick={handleAddJob}
      />
      {
        jobs.map(() => {
          return (
            <NewJobFields />
          )
        })
      }
    </>
  )
}

export default WorkingHours;