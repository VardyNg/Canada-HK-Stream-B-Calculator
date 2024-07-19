import {
  EffectiveTime,
  PassportType,
} from '../../organisms';
import Criteria from './criteria';
function BasicInformation() {

  const Content = () => {
    return (
      <>
        <EffectiveTime />
        <PassportType />
      </>
    )
  }

  return (
    <Criteria 
      children={<Content />} 
      title='基本資料 Basic Information'
    />
  )
}

export default BasicInformation;