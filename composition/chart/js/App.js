'use strict'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const compareNumbers = (a, b) => {
  return a - b;
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		}
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
		this.setState({ data });
	}

	render() {

		return (
			<section>
 
				<SingleCharts {...this.state} />
				<StackedCharts {...this.state} />
				<LayeredCharts {...this.state} />
				<HorizontalCharts {...this.state} />
        <Legend {...this.state} />

			</section>
		);
	}
}


class SingleCharts extends React.Component {
	constructor (props) {
		super(props);
		this.className = 'Single';
	}

	render() {
		return (<Charts {...this.props} className={this.className}/>)
	}
}

class StackedCharts extends React.Component {
	constructor (props) {
		super(props);
		this.className = 'Stacked';
	}

	render() {
		return (<Charts {...this.props} className={this.className}/>)

	}
}

class LayeredCharts extends React.Component {
	constructor (props) {
		super(props);
		this.className = 'Layered';
	}

	render() {
		return (<Charts {...this.props} className={this.className}/>)
	}
}

class HorizontalCharts extends React.Component {
	constructor (props) {
		super(props);
		this.className = 'Horizontal';
	}

	render() {
		return (<Charts {...this.props} className={this.className}/>)
	}
}

class Charts extends React.Component {

	checkClass = (className) => {
		if(className === 'Single') {
			let setting = {
				firstClass : '',
				secondClass : ''
			}
			return setting;
		}
		if(className === 'Stacked') {
			let setting = {
				firstClass : '',
				secondClass : 'stacked'
			}
			return setting;
		}
		if(className === 'Layered') {
			let setting = {
				firstClass : '',
				secondClass : 'layered'
			}
			return setting;
		}
		if(className === 'Horizontal') {
			let setting = {
				firstClass : 'horizontal',
				secondClass : ''
			}
			return setting;
		}
	}

	render() {

		const {data, colors, series, className} = this.props;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		

		return (
				
				<div className={`Charts ${this.checkClass(className).firstClass}`}>
					{ data.map((serie, serieIndex) => {
						var sortedSerie = serie.slice(0),
							sum;
					
						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);
					
						return (
							<div className={`Charts--serie ${this.checkClass(className).secondClass}`}
								key={ serieIndex }
								style={{height: this.checkClass(className).firstClass === "horizontal" ? 'auto' : 250}}
							>
							<label>{ series[serieIndex] }</label>
							{ serie.map((item, itemIndex) => {
								var color = colors[itemIndex], style,
									size = item / (this.checkClass(className).secondClass === "stacked" ? sum : max) * 100;
							
								style = {
									backgroundColor: color,
									opacity: (this.checkClass(className).secondClass === "stacked" ? 1 : item/max) + .05, 
									zIndex: item,
									height: (this.checkClass(className).firstClass === "horizontal" ? '' : size + '%'),
									width: (this.checkClass(className).firstClass === "horizontal" ? size + '%' : ''),
									right: (this.checkClass(className).secondClass === "layered" ? (((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%') : '')
								};
							
							return (
								<div
									className={`Charts--item ${this.checkClass(className).secondClass}`}
									style={ style }
									key={ itemIndex }
								>
									<b style={{ color: color }}>{ item }</b>
								 </div>
							);
							}) }
							</div>
						);
					}) }
				</div>
		)
	}
}

class Legend extends React.Component {
	render() {
		const {labels, colors} = this.props

		return (
			<div className="Legend">
    	{ labels.map((label, labelIndex) => {
    		return (
    			<div>
    				<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
    				<span className="Legend--label">{ label }</span>
    			</div>
  			);
  		}) }
    </div>
		)
	}
}
