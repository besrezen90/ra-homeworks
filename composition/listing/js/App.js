'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <main>
        {this.props.items.map((item, idx) => {
          return <Item item={item} key={idx} />
        })}
      </main>
    )
  }
}
