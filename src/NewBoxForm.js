import { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBoxes }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoxes(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <div className="NewBoxForm-form-group">
          <label htmlFor="width">Box Width</label>
          <input
            id="width"
            name="width"
            placeholder="Box Width. Eg; 1px, 1rem, 1%"
            value={formData.width}
            onChange={handleChange}
          />
        </div>

        <div className="NewBoxForm-form-group">
          <label htmlFor="height">Box Height</label>
          <input
            id="height"
            name="height"
            placeholder="Box Height: Eg; 1px, 1rem, 1%"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <div className="NewBoxForm-form-group">
          <label htmlFor="backgroundColor">Box Background Color</label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            placeholder="Box Background Color: Eg; 1px, 1rem, 1%"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
