import {
  EffectiveTime,
  PassportType,
  LanguageRequirement,
  WorkingHours,
} from '../../organisms';
import Criteria from './criteria';
function BasicInformation() {
  return (
    <div>
      <Criteria 
        children={<EffectiveTime />} 
      />
      <Criteria 
        children={<PassportType />} 
      />
      <Criteria 
        children={<LanguageRequirement />} 
      />
      <Criteria 
        children={<WorkingHours />} 
      />
    </div>
  )
}

export default BasicInformation;