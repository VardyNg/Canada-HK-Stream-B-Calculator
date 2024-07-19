import {
  WorkingHours as WorkingHoursOrganism,
} from '../../organisms';
import Criteria from './criteria';

function WorkingHours() {
  return (
    <Criteria 
      children={<WorkingHoursOrganism />} 
      title='工作時數 Working Hours'
    />
  )
}

export default WorkingHours;