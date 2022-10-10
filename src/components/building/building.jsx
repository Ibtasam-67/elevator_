import React from "react";
import Floor from "../floor/floor";

const Building = (props) => {
  const { onFloorSelect } = props;
  const mapMyFloors = () => {
    const floorsArr = [];
    for (let i = 7; i >= 0; i--) {
      floorsArr.push(<Floor onFloorSelect={onFloorSelect} key={i} value={i} />);
    }
    return floorsArr;
  };

  return <div className="buildingContainer">{mapMyFloors()}</div>;
};

export default Building;
