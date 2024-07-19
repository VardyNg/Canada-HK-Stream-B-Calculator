import {
  LanguageRequirement,
} from '../../organisms';
import Criteria from './criteria';

function Language() {
  return (
    <Criteria 
      children={<LanguageRequirement />} 
      title='語言能力 Language'
    />
  )
}

export default Language;