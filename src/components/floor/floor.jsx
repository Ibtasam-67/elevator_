import * as React from "react";
import "./styles.css";
import Boxes from "../boxes/boxes";

const Floor = (props) => {
  const { value: floor, onFloorSelect } = props;
  return (
    <div className="floorContainer">
      {!floor || floor === 7
        ? [
            <Boxes
              onFloorSelect={onFloorSelect}
              floor={floor}
              key={floor}
              label={""}
            />,
          ]
        : [
            <>
              <Boxes
                onFloorSelect={onFloorSelect}
                floor={floor}
                key={`up${floor}`}
              />
              <Boxes
                onFloorSelect={onFloorSelect}
                floor={floor}
                key={`down${floor}`}
              />
            </>,
          ]}
    </div>
  );
};

export default Floor;
