'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableUpdate list={this.state.list} />
                <YearTableUpdate list={this.state.list} />
                <SortTableUpdate list={this.state.list} />
            </div>
        );
    }
};

function withUpdate(Component, filter){
    
    return class extends React.Component {
        constructor(...args) {
            super (...args);
        }
        
        sortDate = (arr, fl) => {
            if(arr.length === 0) return []
            arr.map(elem => {
                const date = new Date(elem.date);
                elem.year = date.getFullYear();
                elem.month = date.toLocaleString("en-us", {month: "short"});
            });

            if(fl) return arr.sort(this.dateSort);
            else return arr;
        }

        dateSort = (a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }

        render() {
            const props = {
                list: this.sortDate(this.props.list, filter)
            };  
                       
            return <Component {...this.props} {...props}/> 
        }
    }
}

const MonthTableUpdate = withUpdate(MonthTable)
const YearTableUpdate = withUpdate(YearTable)
const SortTableUpdate = withUpdate(SortTable, true)