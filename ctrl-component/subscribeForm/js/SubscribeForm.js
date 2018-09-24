class SubscribeForm extends React.Component {
    
    render() {

        const handleCheckMail = (event) => {
            event.currentTarget.validity.valid ? this.form.classList.add('is-valid') || this.form.classList.remove('is-error') : this.form.classList.add('is-error') || this.form.classList.remove('is-valid');
        }

        return(
            <form className="form form--subscribe" ref={el => this.form = el}>
                <h4 className="form-title">Подписаться:</h4>
                <div className="form-group">
                  <label htmlFor="input-email" className="sr-only">Email</label>
                  <input name='email' type="email" id="input-email" placeholder="Email" className="form-control" onChange={handleCheckMail} />
                  <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                  <button type="submit" className="form-next">
                    <i className="material-icons">keyboard_arrow_right</i>
                  </button>
                </div>
            </form>
        )
    }
}