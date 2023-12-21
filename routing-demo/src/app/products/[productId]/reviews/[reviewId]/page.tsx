import React from "react";

type ParamsProps = {
  params: {
    reviewId: string;
    productId: string
  };
};

const ReviewDetail = ({ params }: ParamsProps) => {
  return <h1>Review {params.reviewId} for product {params.productId} </h1>;
};

export default ReviewDetail;
