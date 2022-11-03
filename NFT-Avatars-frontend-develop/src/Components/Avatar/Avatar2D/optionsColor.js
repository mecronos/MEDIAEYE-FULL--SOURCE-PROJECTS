import React, {  useState } from "react";
import OptionSkinColor from "../../../Components/Avatar/Avatar2D/options/SkinColor";

const Optionscolor = (props) => {
  const [OptionShowPicker, setOptionShowPicker] = useState(false);

  const showOptions = () => {
    if (OptionShowPicker === true) {
      setOptionShowPicker(false);
    } else {
      setOptionShowPicker(true);
    }
  };

  return (
    <div id="ColorPicker">
      <div
        id="cirlceOption"
        className="skinColorBox"
        title="Skin color picker"
        onClick={() => showOptions()}
      >
        <svg viewBox="0 0 280 280">
          <g id="skinColorPicker">
            <path
              fill="#edb98a"
              d="M264 360l0 -15c0,-47 -39,-85 -86,-85l-8 0 0 -22c22,-10 37,-32 39,-57 7,-1 13,-7 13,-15l0 -15c0,-8 -6,-14 -13,-15l0 -8c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 8c-7,1 -13,7 -13,15l0 15c0,8 6,14 13,15 2,25 17,47 39,57l0 22 -8 0c-47,0 -86,38 -86,85l0 15 248 0z"
            />
            <path
              fill="#000000"
              fillOpacity="0.2"
              d="M140 256c-11,0 -21,-2 -30,-6l0 -12c9,5 19,7 30,7l0 0c11,0 21,-2 30,-7l0 12c-9,4 -19,6 -30,6z"
            />
            <path
              fill="#000000"
              fillOpacity="0.2"
              d="M140 181c9,0 16,-4 16,-9l-32 0c0,5 7,9 16,9z"
            />
          </g>
        </svg>
      </div>
      {/* { this.OptionShowPicker ? <OptionSkinColor/> : null } */}
      {OptionShowPicker === true ? <OptionSkinColor /> : null}
    </div>
  );
};
export default Optionscolor;