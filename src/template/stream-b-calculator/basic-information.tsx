import {
  EffectiveTime,
  PassportType,
  LanguageRequirement,
  WorkingHours,
} from '../../organisms';

function BasicInformation() {
  return (
    <div>
      <EffectiveTime />
      <PassportType />
      <LanguageRequirement />
      <WorkingHours />
    </div>
  )
}

export default BasicInformation;