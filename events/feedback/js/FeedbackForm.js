'use strict';

function FeedbackForm({data, onSubmit}) {

  const handleSubmit = (e) => {
      e.preventDefault()
      const elements = e.currentTarget.elements;
      const form = {
          salutation: elements.salutation.value,
          name: elements.name.value,
          email: elements.email.value,
          subject: elements.subject.value,
          message: elements.message.value,
          snacks: Array.from(elements.snacks).filter(elem => elem.checked).map(elem => elem.value)
      }
      onSubmit(JSON.stringify(form))
  }

return (
  <form className="content__form contact-form" onSubmit={handleSubmit}>
    <div className="testing">
      <p>Чем мы можем помочь?</p>
    </div>
    
    <div className="contact-form__input-group">
      <input
        className="contact-form__input contact-form__input--radio"
        id="salutation-mr"
        name="salutation"
        type="radio"
        defaultValue="Мистер"
        defaultChecked={data.salutation === "Мистер"}/>
      <label
        className="contact-form__label contact-form__label--radio"
        htmlFor="salutation-mr">Мистер</label>
      <input
        className="contact-form__input contact-form__input--radio"
        id="salutation-mrs"
        name="salutation"
        type="radio"
        defaultValue="Мисис"
        defaultChecked={data.salutation === "Мисис"}/>
      <label
        className="contact-form__label contact-form__label--radio"
        htmlFor="salutation-mrs">Мисис</label>
      <input
        className="contact-form__input contact-form__input--radio"
        id="salutation-ms"
        name="salutation"
        type="radio"
        defaultValue="Мис"
        defaultChecked={data.salutation === "Мисс"}/>
      <label
        className="contact-form__label contact-form__label--radio"
        htmlFor="salutation-ms">Мис</label>
    </div>

     <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="name">Имя
        <input
          className="contact-form__input contact-form__input--text"
          id="name"
          name="name"
          type="text"
          defaultValue={data.name}/>
      </label>
      </div>
    
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
      <input
        className="contact-form__input contact-form__input--email"
        id="email"
        name="email"
        type="email"
        defaultValue={data.email}/>
    </div>
    
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
      <select
        className="contact-form__input contact-form__input--select"
        id="subject"
        name="subject"
        defaultValue={data.subject === "У меня проблема" ? 1 : 0}>
        <option value='0'>У меня проблема</option>
        <option value='1'>У меня важный вопрос</option>
      </select>
    </div>
    
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
      <textarea
        className="contact-form__input contact-form__input--textarea"
        id="message"
        name="message"
        rows={6}
        cols={65}
        defaultValue={data.message ? data.message : " "}/>
    </div>
    
    <div className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>
      <input
        className="contact-form__input contact-form__input--checkbox"
        id="snacks-pizza"
        name="snacks"
        type="checkbox"
        defaultValue="пицца"
        defaultChecked={data.snacks.includes("пицца")}/>
      <label
        className="contact-form__label contact-form__label--checkbox"
        htmlFor="snacks-pizza">Пиццу</label>
      <input
        className="contact-form__input contact-form__input--checkbox"
        id="snacks-cake"
        name="snacks"
        type="checkbox"
        defaultValue="пирог"
        defaultChecked={data.snacks.includes("пирог")}/>
      <label
        className="contact-form__label contact-form__label--checkbox"
        htmlFor="snacks-cake">Пирог</label>
    </div>

    <button className="contact-form__button" type="submit">Отправить сообщение!</button>
    <output id="result"></output>
  </form>
)
}
