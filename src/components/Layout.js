import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

const Home = () => <div>home</div>
const About = () => <div>about</div>
const Contact = () => <div><Redirect to="/dashboard" /></div>
const Dashboard = () => <div>dashboard</div>

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => { console.log('hi') }}>
                    hi
                </button>
                <h1>{ this.state.title }</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/contact" exact render={() => (
                        <Redirect to="/dashboard" />
                    )} />
                </Switch>
            </div>
        );
    }
}
