import React, {useState, useEffect} from 'react';
import { getAllProducts } from '../admin/helper/adminapicall';
import { API } from "../backend";
import "../styles.css"
import Base from "./Base";
import Card from './Card';



export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getAllProducts().then(data => {
      if(data.error){
        setError(data.error)
      }else {
        setProducts(data)
      }
    })
  }

  useEffect(() => {
    loadAllProduct()
  },[])
  return (
    <Base title="Home Page" description="Welcome to the store">
      <div className="row text-center">
        <h1 className="text-white">All Products</h1>
        <div className="row mb-4">
          {products.map((product, index) => {
          return(
             <div key={index} className="col-4 mb-4">
              <Card product={product}/>
             </div>
             )
          })}
        </div>
      </div>
    </Base>
  );
}
