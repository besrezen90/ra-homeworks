'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const createMonth = (num) => {
  num++
  if(num < 10) return '0' + num;
  return num
}

const createDate = (num) => {
  if(num < 10) return '0' + num;
  return num
}

const urlPropType = (props, propName, componentName) => {
    let url = props[propName];
    const r = new RegExp('https://vk.com/(id[0-9]+|[A-Za-z0-9_-]+)');
    let isUrl = (typeof url === 'string') && r.test(url);
    
    if(!isUrl) {
      return new Error(`Неверный параметр ${propName} в компоненте
        ${componentName}: параметр должен быть url-адресом`);
    }
    
    return null;
}

const birthdayPropType = (props, propName, componentName) => {
  let birthday = props[propName];
  let isBirthday = (typeof birthday === 'string') && /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(birthday);

  const date = new Date().getFullYear() + '-' + createMonth(new Date().getMonth()) + '-' + createDate(new Date().getDate())

  if(!isBirthday) {
    return new Error(`Неверный параметр ${propName} в компоненте
      ${componentName}: параметр должен быть датой в формате YYYY-MM-DD`);
  }
  if(birthday > date) {
    return new Error(`Неверный параметр ${propName} в компоненте
      ${componentName}: параметр не может быть больше ${date}`);
  }
  return null;
}




const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};


Profile.defaultProps = {
  img: './images/profile.jpg',
  birthday: '1988-03-21'
}

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  url: urlPropType,
  birthday: birthdayPropType
}

