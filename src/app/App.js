import React from 'react';

import Footer from "./components/Footer";

import Header from "./components/Header";

import Home from "./components/Home";

import About from "./components/About";

import PropTypes from 'prop-types';

export class App extends React.Component {

    // keyword
    getChildContext() {
        return {
                color: this.props.color,
                name: "Product App"
            };
    }

    // react keyword
    // create a virtual dom, returns v dom
    render() {
        console.log("App render")

        return (
            <div>
                <h1>Welcome To React</h1>

                <Header title="Product App" />

                <Home />

                <About />

                 <Footer year={2018} company="Xebia" />
            </div>
        )
    }

}

//keyword
App.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  };