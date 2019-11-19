import React, { Component } from "react"; 
import util from '../util';

export default class Products extends Component {
  render() {
      const productsItems = this.props.products.map( product => (
          <div key={ product.id } className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>
                        { product.title }
                    </p>
                </a>
                <b> { util.formatCurrency(product.price) } </b>
                <button className="btn btn-primary" onClick={ (e) => this.props.handleAddToCart(e, product) } >Add To Cart</button>
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