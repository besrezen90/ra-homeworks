'use strict';

const HexInput = props => {
  const changeColor = (e) => {
    if(typeof props.onChange == 'function') props.onChange(e.currentTarget.value)
  }

  return (
    <input
      value={props.value}
      onChange={changeColor}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
