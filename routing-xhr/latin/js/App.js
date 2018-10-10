

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/article/:id" component={Story} />
          </Switch>
        </div>
      </Router>
    );
  }
};