'use strict';

const createMonth = (num) => {
  num++
  if(num < 10) return '0' + num;
  return num
}

const createDate = (num) => {
  if(num < 10) return '0' + num;
  return num
}

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

const date = new Date();

DateInput.defaultProps = {
  value: date.getFullYear() + '-' + createMonth(date.getMonth()) + '-' + createDate(date.getDate())
}

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}