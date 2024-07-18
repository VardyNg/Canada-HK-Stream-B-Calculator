import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { 
  DatePicker as DatePickerMui, 
  LocalizationProvider
} from '@mui/x-date-pickers';
import {
  LocalStorageManager
} from '../class';
import {
  Constants
} from '../data';

type DatePickerProps = {
  label: string,
  localStorageKey: string
  maxDate?: any
  minDate?: any
}

function DatePicker(props: DatePickerProps){
  const [value, setValue] = React.useState(null);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerMui
        label={props.label}
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
          LocalStorageManager.setValue(props.localStorageKey, newValue)
        }}
        format={Constants.DATE_FORMAT}
        maxDate={props.maxDate}
        minDate={props.minDate}
      />
    </LocalizationProvider> 
  )
}

export default DatePicker;