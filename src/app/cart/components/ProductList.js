
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
        let products = this.props.products || [];
        let loading = this.props.loading;
        let error = this.props.error;

        return (
            <div> 
            <h2>Product List</h2>
            
            <ul>
                {
                    products.map( product => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))
                }
            </ul>

            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}