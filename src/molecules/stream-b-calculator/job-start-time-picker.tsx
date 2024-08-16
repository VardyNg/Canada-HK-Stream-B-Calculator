import {
  DatePicker
} from '../../atoms';

type JobStartTimePickerProps = {
  onChange: Function
}
function JobStartTimePicker(props: JobStartTimePickerProps) {
  
  return (
    <DatePicker
      label="開始日期 Start Date"
      // localStorageKey={LocalStorageEnum.TargetApplicationDate}
      maxDate={new Date(2026, 7, 31)} // The policy ends on 2026-08-31 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
      minDate={new Date(2021, 5, 1)}// The policy starts on 2021-06-01 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
      onChange={props.onChange}
    />
  )
}

export default JobStartTimePicker;