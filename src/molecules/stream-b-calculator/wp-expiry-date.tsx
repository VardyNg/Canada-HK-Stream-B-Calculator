import {
  DatePicker
} from '../../atoms'
import {
  LocalStorageEnum,
} from '../../data';

function WPExpriyDate() {
  
  return (
    <DatePicker
      label="工作簽證有效日期 Work permit expiry date"
      localStorageKey={LocalStorageEnum.WorkPermitExpiryDate}
    />
  )
}

export default WPExpriyDate;

