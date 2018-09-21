'use strict';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  changeColor = (color) => {
    switch (color) {
      case 'unisex': return 'black';
      case 'male': return "blue";
      case 'female': return 'orange';
    }
  }

  render() {
    return (
      <figure key={this.props.key} className={`snip1171 ${this.changeColor(this.props.item.type)}`}>
        <img src={this.props.item.pic} alt={this.props.item.title} />
        <div className="price">${this.props.item.price.toFixed(2)}</div>
        <figcaption>
          <h3>{this.props.item.title}</h3>
          <p>{this.props.item.description}</p>
          <a href="#">Add to Cart</a>
        </figcaption>
      </figure>
    )
  }
}