import React from 'react';

import Footer from "./components/Footer";

import Header from "./components/Header";

//import Home from "./components/Home";

//import About from "./components/About";

import PropTypes from 'prop-types';


//import Cart from "./cart/components/Cart";

export class App extends React.Component {
    
    // keyword
    getChildContext() {
        return {
                color: this.props.color,
                name: "Product App" 
            };
    }

    componentDidMount() {
        console.log("App did mount");
    }
    render() {

        return (
            <div>
                <Header title="Assignment App" />
                <div>
                    {this.props.children}
                </div>
                 <Footer year={2018} company="Xebia" >
                    <p>Contact Time: 9:00 to 6:00 </p>
                 </Footer>
            </div>
        )
    }

}

//keyword
App.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  };