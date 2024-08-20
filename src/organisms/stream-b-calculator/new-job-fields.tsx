import {
  JobTypePicker,
  JobNameTextField,
  JobStartTimePicker,
  JobEndTimePicker,
  RemoveJobButton,
} from "../../molecules";
import Grid from '@mui/material/Grid';

function NewJobFields() {
  return (
    <Grid>
      <JobTypePicker />
      <JobNameTextField />
      <JobStartTimePicker 
        onChange={() => {}}
      />
      <JobEndTimePicker 
        onChange={() => {}}
      />
      <RemoveJobButton 
        onClick={() => {}}
      />
    </Grid>
  )
}

export default NewJobFields;