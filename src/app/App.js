import React from 'react';

import Footer from "./components/Footer";

import Header from "./components/Header";

import Home from "./components/Home";

import About from "./components/About";

export class App extends React.Component {

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