import {
  DatePicker
} from '../../atoms'
import {
  LocalStorageEnum,
} from '../../data';
import moment from 'moment';
type WPExpriyDateDate = {
  onChange: Function
}

function WPExpriyDate(props: WPExpriyDateDate) {
  const minDate = 
    moment('2021-06-01'); // open work permit starts on this date

  const maxDate = 
    moment('2025-02-07') // open work permit application ends on this date
      .add(3, 'years'); // the maximum permit validity is 3 years 
  
  
  return (
    <DatePicker
      label="工作簽證有效日期 Work permit expiry date"
      localStorageKey={LocalStorageEnum.WorkPermitExpiryDate}
      onChange={props.onChange}
      minDate={minDate.toDate()}
      maxDate={maxDate.toDate()}
    />
  )
}

export default WPExpriyDate;

