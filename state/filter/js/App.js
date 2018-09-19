'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    };
  }
  
  changeFilter = (filter) => {this.setState({selected: filter})}

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
           selected={this.state.selected}
           onSelectFilter={this.changeFilter} />
         <Portfolio projects={this.props.projects.filter(item => this.state.selected === "All" ? item : item.category === this.state.selected)} />
      </div>
    )
  }
}