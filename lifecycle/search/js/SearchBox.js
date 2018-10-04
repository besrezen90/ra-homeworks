class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  componentDidMount() {
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition)
  }

  isFixed() {
    const searchBox = document.querySelector('.search-box'),
          header = document.querySelector('.header');
    return searchBox.getBoundingClientRect().top <= 0 && searchBox.getBoundingClientRect().top > header.getBoundingClientRect().bottom;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed() 
    })
  }
}
