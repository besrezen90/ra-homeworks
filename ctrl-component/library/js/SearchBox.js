
class SearchBox extends React.Component {
    constructor (props) {
        super(props)
    };

    handleFilter = (event) => {
        const searchText = event.currentTarget.value;
        this.props.filterBooks(searchText);
    };

    render() {
        return <input onChange={this.handleFilter} type="text" placeholder="Поиск по названию или автору" value={this.props.value}/>;
    }
};