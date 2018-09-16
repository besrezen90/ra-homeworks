'use strict';
function AuthForm({onAuth}) {
const onSubmit = (e) => {
    event.preventDefault()
    console.log(event.currentTarget)
}

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onAuth={onSubmit}>
      <div className="Input">
        <input type="text" placeholder="Имя"/>
        <label/>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта"/>
        <label/>
      </div>
      <div className="Input">
        <input type="password" placeholder="Пароль"/>
        <label/>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
}