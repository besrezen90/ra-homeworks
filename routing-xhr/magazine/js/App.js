const ReactRouter = window.ReactRouterDOM;
const { BrowserRouter, Route, Switch, Link } = ReactRouter;
console.log(BrowserRouter)
console.log(Route)
console.log(Switch)
console.log(Link)

class App extends React.Component {
  render() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path='/magazine' component={Homepage}/>
                <Route path='/magazine/subscribtion' component={SubscribtionPage} />
                <Route path='/magazine/article/:id' component={ArticlePage} /> 
            </Switch>
        </div>
    )
  }
}