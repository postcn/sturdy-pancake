import React from 'react';

function SpecializationComponent(props) {
  if (!props.isSpecialized) {
    return null;
  }
  else {
    let specializations = props.specializations.map(function (specialization) {
      return(
        <li key={specialization.name}>
          <div>{specialization.name}</div>
          <div>{specialization.description}</div>
        </li>
      )
    })
    return (
      <div className="specializationBlock">
        <span>Example Specializations for this Skill:</span>
        <ul>
          {specializations}
        </ul>
      </div>
    )
  }
}

export default SpecializationComponent;
