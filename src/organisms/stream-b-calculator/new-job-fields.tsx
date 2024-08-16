import {
  JobTypePicker,
  JobNameTextField,
  JobStartTimePicker,
  JobEndTimePicker
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
    </>
  )
}

export default NewJobFields;