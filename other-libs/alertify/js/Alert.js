class Alert extends React.Component {

  componentDidMount() {
    alertify.defaults.notifier.delay = 10;
  }

  componentDidUpdate() {
    if(this.props.newKey) {
      alertify.success(this.props.newKey);
    }
  }

  render() {
    return (
      <div />
    );
  }
}
