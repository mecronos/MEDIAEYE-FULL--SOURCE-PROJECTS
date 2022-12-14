import React from "react";
import { FormGroup, Label } from "reactstrap";
import Card from "../Card/Card";
import { CirclePicker } from "react-color";
import "./TextPropsPicker.css";

const fonts = ["Impact", "Arial", "Comic Sans MS", "Pacifico"];

const TextPropsPicker = ({
  changeText,
  updateFont,
  updateFontSize,
  updateColor,
  textStyle,
}) => {
  const { fontFamily, fontSize, fill } = textStyle;
  return (
    <div>
      <Card title="Enter your text">
        <div className="meme-form">
          <FormGroup>
            <Label htmlFor="toptext">Top Text</Label>
            <input
              className="form-control"
              type="text"
              name="toptext"
              id="toptext"
              placeholder="Add text to the top"
              onChange={changeText}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bottomtext">Bottom Text</Label>
            <input
              className="form-control"
              type="text"
              name="bottomtext"
              id="bottomtext"
              placeholder="Add text to the bottom"
              onChange={changeText}
            />
          </FormGroup>
        </div>
      </Card>
      <Card title="Edit text style">
        <div className="TextPropsPicker">
          <FormGroup>
            <Label htmlFor="font">Font:</Label>
            <select
              className="form-control"
              id="font"
              value={fontFamily}
              onChange={updateFont}
            >
              {fonts.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="sizeRange">Font size</Label>
            <input
              type="range"
              value={parseInt(fontSize)}
              onChange={updateFontSize}
              className="custom-range"
              min="20"
              max="100"
              id="sizeRange"
            />
          </FormGroup>
        </div>
      </Card>
      <Card title="change text color">
        <div className="TextPropsPicker-colors">
          <CirclePicker color={fill} onChangeComplete={updateColor} />
        </div>
      </Card>
    </div>
  );
};

export default TextPropsPicker;
