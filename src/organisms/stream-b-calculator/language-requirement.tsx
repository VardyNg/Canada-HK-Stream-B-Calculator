import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
  LanguageTestTypeEnum
} from '../../data';
import {
  LanguageExamSlider
} from '../../molecules'
import Fade from '@mui/material/Fade';

function  LanguageRequirement() {
  const [testType, setTestType] = React.useState<LanguageTestTypeEnum>(LanguageTestTypeEnum.None);
  const [errorPassport, setErrorPassport] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange');
    setTestType(event.target.value as LanguageTestTypeEnum);
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
      </RadioGroup>
      {errorPassport}
      <Fade
        in={testType !== LanguageTestTypeEnum.None}
      >
        <div>
          <LanguageExamSlider 
            type={testType}
          />
        </div>
      </Fade>
    </FormControl>
  )
}

export default LanguageRequirement;