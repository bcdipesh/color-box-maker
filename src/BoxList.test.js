import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

const addBox = (boxList, height = "100px", width = "100px", color = "red") => {
  const heightInput = boxList.getByLabelText("Box Height");
  const widthInput = boxList.getByLabelText("Box Width");
  const backgroundColorInput = boxList.getByLabelText("Box Background Color");
  fireEvent.change(backgroundColorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const addBoxBtn = boxList.getByText("Add Box");
  fireEvent.click(addBoxBtn);
};

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", () => {
  const boxList = render(<BoxList />);

  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.parentElement).toHaveStyle(`
  width: 100px;
  height: 100px;
  background-color: red;`);
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});
