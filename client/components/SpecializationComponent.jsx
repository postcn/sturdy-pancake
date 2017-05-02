import React from 'react';

function SpecializationComponent(props) {
  if (!props.isSpecialized) {
    return null;
  }
  else {
    let specializations = props.specializations.map(function (specialization) {
      return(
        <li className="specialization" key={specialization.name}>
          <div className="specializationName">
            {specialization.name}
            {specialization.startingPercentage > 0 && <span className="startingPercent">{specialization.startingPercentage}%</span>}
          </div>
          <div className="specializationDescription">{specialization.description}</div>
        </li>
      )
    })
    return (
      <div className="specializationBlock well">
        <span>Example Specializations for this Skill:</span>
        <ul>
          {specializations}
        </ul>
      </div>
    )
  }
}

export default SpecializationComponent;
