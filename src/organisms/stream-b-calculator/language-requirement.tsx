import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
  LanguageTestTypeEnum
} from '../../data';
function LanguageRequirement() {
  const [testType, setTestType] = React.useState('');
  const [errorPassport, setErrorPassport] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange');
    setTestType(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">語言能力測試 Language Test</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value={LanguageTestTypeEnum.CELPIP} 
          control={<Radio />} 
          label="CELPIP" 
        />
        <FormControlLabel
          value={LanguageTestTypeEnum.IELTS}
          control={<Radio />} 
          label="IELTS" 
        />
        <FormControlLabel
          value={LanguageTestTypeEnum.PTE}
          control={<Radio />} 
          label="PTE" 
        />
        <FormControlLabel
          value={LanguageTestTypeEnum.TEF}
          control={<Radio />} 
          label="TEF" 
        />
        <FormControlLabel
          value={LanguageTestTypeEnum.TCF}
          control={<Radio />} 
          label="TCF" 
        />
      </RadioGroup>
      {errorPassport}
    </FormControl>
  )
}

export default LanguageRequirement;