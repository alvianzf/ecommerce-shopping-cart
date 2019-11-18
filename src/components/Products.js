import React, { Component } from "react"; 

export default class Products extends Component {
  render() {
      const productsItems = this.props.products.map( product => (
          <div className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                    <img src={`/products/${product.sku}.jpg`} alt={product.title} />
                    <p>
                        { product.title }
                    </p>
                </a>
            </div>
          </div>
      ));
    return (
     <div className="row">
       { productsItems }
     </div>
    );
  }
}