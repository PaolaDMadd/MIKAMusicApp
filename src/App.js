import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Fan, About }  from './pages';
import './style.css';

class App extends Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/fan" component={Fan} />
                    <Route exact path="/about" component={About}/>
                </Switch>
                {/* <Footer /> */}
            </>
        )
    }
}

export default App;

