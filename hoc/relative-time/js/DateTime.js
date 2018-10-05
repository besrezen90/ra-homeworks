'use strict';

const DateTime = props => {
  console.log(props)
  return (
    <p className="date">{props.date}</p>
  )
};

function Logger(Component) {
    return function(props, ...args) {
      props.date = createNewDate(props.date);
      return Component(props, ...args);
    }
}

function createNewDate(value) {
    const today = new Date();
    const lastDate = new Date(value);
    const difference = today.getTime() - lastDate.getTime();
    
    if (difference < 3600000) return `${(difference / 60000).toFixed()} минут назад`;
    if (difference < (3600000 * 24)) return `${(difference / 3600000).toFixed()} часов назад`;
    else return `${(difference / (3600000 * 24)).toFixed()} дней назад`;
}



const DateTimePretty = Logger(DateTime)