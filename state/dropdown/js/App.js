'use strict'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      open: false,
      active: this.props.options[0]
    }
    this.options = !this.props.options && typeof this.props.options == 'object' ? [] : this.props.options
  }

  handleOpenMenu = () => {
    this.setState({
      open: this.state.open === false ? true : false
    })
  }

  handleChange = (e) => {
    this.setState({active: e})
  }


  render() {

    return (
      <div className="container">
        <div className={`dropdown-wrapper ${this.state.open ? "open" : ""}`} >
          <button className={"btn"} onClick={this.handleOpenMenu} >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          {/* <List options={this.options} /> */}
          <ul className="dropdown">
            {this.options.map((option, i) => (
              <li
                ket={i}
                className={option === this.state.active ? "active" : ""}
                onClick={() => this.handleChange(option)} >
                  <a href="#">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
