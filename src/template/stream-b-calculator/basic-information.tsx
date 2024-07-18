import {
  EffectiveTime,
  PassportType,
  LanguageRequirement,
} from '../../organisms';

function BasicInformation() {
  return (
    <div>
      <EffectiveTime />
      <PassportType />
      <LanguageRequirement />
    </div>
  )
}

export default BasicInformation;