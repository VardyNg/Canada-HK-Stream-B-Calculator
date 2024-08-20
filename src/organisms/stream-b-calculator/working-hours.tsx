import * as React from 'react';
import NewJobFields from './new-job-fields';
import {
  AddJobButton,
} from '../../molecules';
import {
  Job
} from '../../interfaces';
import Stack from '@mui/material/Stack';

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
      <Stack>
        {
          jobs.map(() => {
            return (
              <NewJobFields />
            )
          })
        }
      </Stack>
    </>
  )
}

export default WorkingHours;