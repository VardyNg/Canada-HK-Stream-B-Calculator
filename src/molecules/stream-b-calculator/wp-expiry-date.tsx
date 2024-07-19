import {
  DatePicker
} from '../../atoms'
import {
  LocalStorageEnum,
} from '../../data';

type WPExpriyDateDate = {
  onChange: Function
}

function WPExpriyDate(props: WPExpriyDateDate) {
  
  return (
    <DatePicker
      label="工作簽證有效日期 Work permit expiry date"
      localStorageKey={LocalStorageEnum.WorkPermitExpiryDate}
      onChange={props.onChange}
    />
  )
}

export default WPExpriyDate;

