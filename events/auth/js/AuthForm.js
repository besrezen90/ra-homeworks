'use strict'
function handleCheckMail (event) {
  event.target.value = event.target.value.replace(/[^\w\.\-@]/g, '');
}

function handleCheckPass (event) {
  event.target.value = event.target.value.replace(/[^\w]/g, '');
}


const AuthForm = (props) => {

const handleSubmit = (event) => {
  event.preventDefault()
  let form = event.currentTarget;
  const user = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    password: form.elements.password.value
  }
  if(typeof props.onAuth == 'function' && !Object.values(user).includes('')) props.onAuth(user)
  else return
}

return (
  <form onSubmit={handleSubmit} class="ModalForm" action="/404/auth/" method="POST">
    <div className="Input">
      <input required type="text" placeholder="Имя" name="name" />
      <label></label>
    </div>
    <div className="Input">
      <input onChange={handleCheckMail} type="email" placeholder="Электронная почта" name="email" />
      <label></label>
    </div>
    <div className="Input">
      <input onChange={handleCheckPass} required type="password" placeholder="Пароль" name="password" />
      <label></label>
    </div>
    <button type="submit">
      <span>Войти</span>
      <i className="fa fa-fw fa-chevron-right"></i>
    </button>
  </form>
)
}