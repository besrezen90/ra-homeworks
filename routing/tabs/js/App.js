class App extends React.Component {
    render() {
      return (
        <Router>
          <div className="tabs">
            <nav className="tabs__items">
              <NavLink exact to="/" className="tabs__item" activeClassName='tabs__item-active'>Рефераты</NavLink>
              <NavLink exact to="/essay" className="tabs__item" activeClassName='tabs__item-active'>Криэйтор</NavLink>
              <NavLink exact to="/fortune" className="tabs__item" activeClassName='tabs__item-active'>Гадалка</NavLink>
            </nav>
            <div className="tabs__content">
              <Route path="/" exact component={Creator} />
              <Route path="/essay" component={Essay} />
              <Route path="/fortune" component={Fortune} />
            </div>
          </div>
        </Router>
      );
    }
  }
