import {
  DatePicker
} from '../../atoms';

type JobEndTimePickerProps = {
  onChange: Function
}
function JobEndTimePicker(props: JobEndTimePickerProps) {
  
  return (
    <DatePicker
      label="結束日期 End Date"
      // localStorageKey={LocalStorageEnum.TargetApplicationDate}
      maxDate={new Date(2026, 7, 31)} // The policy ends on 2026-08-31 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
      minDate={new Date(2021, 5, 1)}// The policy starts on 2021-06-01 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
      onChange={props.onChange}
    />
  )
}

export default JobEndTimePicker;