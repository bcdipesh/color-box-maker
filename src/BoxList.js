import { useState } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBoxes = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (boxId) => {
    setBoxes(boxes.filter((box, idx) => idx !== boxId));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBoxes={addBoxes} />
      {boxes.map(({ backgroundColor, width, height }, idx) => (
        <Box
          key={idx}
          boxId={idx}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
