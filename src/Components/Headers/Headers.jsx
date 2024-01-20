import React, { useState } from 'react'

const OrderBasket = () => {
  const [products, setProducts]=useState([
    {id: 1, name:'iphone',price: 60000, quantiy:0},
{id: 2, name: 'samsung', price: 7000, quantiy:0},
{id: 3, name: 'nokia', price: 900, quantiy:0}
  ]);
  const addButton =(products)=>{
    setProducts(
      products.map((products)=>)
    )
  }

  return (
    <div>

    </div>
  )
}

