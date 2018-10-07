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

            if(fl === 'date') return this.groupSort(arr, fl).sort(this.dateSort);
            else return this.groupSort(arr, fl);
        }

        dateSort = (a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }

        groupSort = (array, metod) => {
            const list = [];
            if(array.length === 0) return
            array.forEach(item => {
                let obj = {};
                obj[metod] = item[metod];
                obj.amount = item.amount;
                
                let lastObj = list.filter(el => el[metod] === obj[metod])
                if (lastObj.length === 0) list.push(obj)
                else {
                    lastObj[0].amount += obj.amount
                }                
            })
            return list
        }

        render() {
            const props = {
                list: this.sortDate(this.props.list, filter)
            };
                       
            return <Component {...this.props} {...props}/> 
        }
    }
}

const MonthTableUpdate = withUpdate(MonthTable, 'month')
const YearTableUpdate = withUpdate(YearTable, 'year')
const SortTableUpdate = withUpdate(SortTable, 'date')