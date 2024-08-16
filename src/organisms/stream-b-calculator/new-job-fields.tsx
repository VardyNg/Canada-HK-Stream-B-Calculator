import {
  JobTypePicker,
  JobNameTextField,
  JobStartTimePicker,
  JobEndTimePicker,
  RemoveJobButton,
} from "../../molecules";

function NewJobFields() {
  return (
    <>
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
    </>
  )
}

export default NewJobFields;