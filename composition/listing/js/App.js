'use strict';

class App extends React.Component {
   
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
