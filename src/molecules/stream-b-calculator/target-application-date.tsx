import {
  DatePicker
} from '../../atoms'
import {
  LocalStorageEnum,
} from '../../data';

function TargetApplicationDate() {

  return (
    <DatePicker
      label="目標申請時間 Target application date"
      localStorageKey={LocalStorageEnum.TargetApplicationDate}
      maxDate={new Date(2026, 7, 31)} // The policy ends on 2026-08-31 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
      minDate={new Date(2021, 5, 1)}// The policy starts on 2021-06-01 https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/hong-kong-residents-permanent-residence.html 
    />
  )
}

export default TargetApplicationDate;