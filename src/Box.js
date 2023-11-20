import "./Box.css";

const Box = ({ boxId, backgroundColor, width, height, removeBox }) => {
  const handleRemove = () => {
    removeBox(boxId);
  };

  return (
    <div
      className="Box"
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
    >
      <button type="button" className="Box-remove-btn" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default Box;
