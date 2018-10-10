'use strict';

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

function withLogger(Component) {
  return class extends React.Component {
    
    createNewDate = (value) => {
      const today = new Date();
      const lastDate = new Date(value);
      const difference = today.getTime() - lastDate.getTime();
      
      if (difference < 3600000) return `${(difference / 60000).toFixed()} минут назад`;
      if (difference < (3600000 * 24)) return `${(difference / 3600000).toFixed()} часов назад`;
      else return `${(difference / (3600000 * 24)).toFixed()} дней назад`;
    }

    render() {
        const props = {
          date: this.createNewDate(this.props.date)
        }
        return <Component { ...this.props} {...props}/>;
    }
  }
}

const DateTimePretty = withLogger(DateTime)