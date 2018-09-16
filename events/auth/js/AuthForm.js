'use strict';
const AuthForm = (props) => {

  const onSubmit = (event) => {
    event.preventDefault()
    let form = event.currentTarget;
    const user = {
      name: form.elements[0].value,
      email: form.elements[1].value,
      password: form.elements[2].value
    }
    if(typeof props.onAuth == 'function' && Object.values(user).includes('')) props.onAuth(user)
    else return
  }

  const checkMail = (event) => {
    event.target.value = event.target.value.replace(/[^a-z,A-Z,0-9,_,@,.,-]/g, '');
  }

  const checkPass = (event) => {
    event.target.value = event.target.value.replace(/[^a-z,A-Z,0-9, _]/g, '');
  }


  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit}>
      <div className="Input">
        <input type="text" placeholder="Имя"/>
        <label/>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" onChange={checkMail}/>
        <label/>
      </div>
      <div className="Input">
        <input type="password" placeholder="Пароль"  onChange={checkPass}/>
        <label/>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
}

