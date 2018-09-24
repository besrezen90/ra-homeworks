
class SearchBox extends React.Component {
    constructor (props) {
        super(props)
    }

    handleFilter = (event) => {
        this.props.filterBooks(event.currentTarget.value)
    }

    render() {
        return <input onChange={this.handleFilter} type="text" placeholder="Поиск по названию или автору" value={this.props.value}/>
    }
}