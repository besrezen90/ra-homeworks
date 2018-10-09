const ReactRouter = window.ReactRouterDOM;
const { BrowserRouter, Route, Switch, Link } = ReactRouter;


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    
                    <Route path='/routing-xhr/magazine/subscribtion' component={SubscribtionPage} />
                    <Route path='/routing-xhr/magazine/article/' component={ArticlePage} />
                    <Route path='/routing-xhr/magazine' component={Homepage} />

                </Switch>
            </div>
        )
    }
}