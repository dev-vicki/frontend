import React, { useState, useEffect } from "react";
import { getAllProducts } from "../admin/helper/adminapicall";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
   const [products, setProducts] =  useState([]);
   const [reload, setReload] = useState(false);



   useEffect(() => {
    setProducts(loadCart())
   },[reload])

    const loadAllProducts = () => {
        return (
          <div>
            <h2>Products in the cart</h2>
            {products.map((product, index) => (
              <Card
                key={index}
                product={product}
                addtoCart={false}
                removeFromCart={true}
                setReload={setReload}
                reload={reload}
              />
            ))}

          </div>
        );
    }

    const loadCheckout = () => {
      return (
        <div>
          <h2>Checkout Section</h2>
          <p>Need to Integrate any of the payment gateway here...</p>
        </div>
      );
    };

  return (
    <Base title="Cart Page" description="Ready to Checkout">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
}

export default Cart;