'use strict'


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selected: 'All',
      projects: props.projects
    }
  }

  changeFilter = (filter) => {
    
    this.setState({
      selected: filter,
      projects: this.props.projects.filter( elem => { return this.state.selected === 'All' ? elem : elem.category === this.state.selected})
    })
  }

  // filterProjects = () => {
  //   this.props.projects.filter( elem => { return this.state.selected === 'All' ? elem : elem.category === this.state.selected})
  //   // console.table(this.state.projects)
  // }


  render() {
    // this.filterProjects()
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={this.changeFilter} />
        <Portfolio projects={this.state.projects} />
      </div>
    )
  }
}