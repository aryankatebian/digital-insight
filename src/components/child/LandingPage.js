import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../../scss/_landing.scss';
import { Header } from './Header';
import Profile from './Profile'
import Resume from './Resume'
import About from './About'

export const LandingPage = () => {
    return (
        <div className="landing">
            <Header />
            <div className="container">
                <Profile />
                <div className="pages">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={About} />
                            <Route path="/resume" component={Resume} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}
