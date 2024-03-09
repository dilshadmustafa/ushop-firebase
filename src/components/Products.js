import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "iPhone",
    imgURL:
      "/images/phone.jpg",
    price: 525,
  },
  {
    id: 2,
    name: "Mouse",
    imgURL:
      "/images/mouse.jpg",
    price: 30,
  },
  {
    id: 3,
    name: "PlayStation",
    imgURL:
      "/images/playstation.jpg",
    price: 700,
  },
  {
    id: 4,
    name: "Camera",
    imgURL:
      "/images/camera.jpg",
    price: 200,
  },
  {
    id: 5,
    name: "Alexa",
    imgURL:
      "/images/alexa.jpg",
    price: 100,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
