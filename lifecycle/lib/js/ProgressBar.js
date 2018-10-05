class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.borderColor = '#4ca89a';
    this.barColor = '#96d6f4';

  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }

  componentDidMount() {
    this.createBar()
  }

  componentWillReceiveProps() {
    this.createBar()
  } 

  createBar() {
    const canvas = document.querySelector('#progressCanvas');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d"),
    x = canvas.width / 2,
    y = canvas.height / 2;

    ctx.beginPath();
    ctx.arc(x, y, 52, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.strokeStyle = this.borderColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 45, 0, 2 * (this.changeBar()) * Math.PI);
    ctx.lineWidth = 7;
    ctx.strokeStyle = this.barColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.font = 'italic 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((this.changeBar() * 100).toFixed(0) + '%', canvas.width / 2, canvas.height / 2);
  }


  changeBar() {
    return this.props.completed / this.props.total
  }

componentWillUpdate() {
    this.createBar()
  }
}
