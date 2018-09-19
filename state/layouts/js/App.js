'use strict';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      viev: true,
      icon: "view_module"
    }
  }

  changeViev = () => {
    
    this.setState({
      viev: this.state.viev === true ? false : true,
      icon: this.state.icon === "view_module" ? "view_list" : "view_module"
    })
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.icon}
            onSwitch={this.changeViev} />
        </div>
        {this.renderLayout(this.state.viev)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
