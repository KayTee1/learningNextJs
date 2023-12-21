import React from "react";

type ParamsProps = {
  params: {
    productId: string;
  };
};

const ProductDetails: React.FC<ParamsProps> = ({ params }) => {
  return <h1>ProductDetails {params.productId}</h1>;
};

export default ProductDetails;
