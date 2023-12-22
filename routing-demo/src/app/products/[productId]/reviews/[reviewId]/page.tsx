import React from "react";
import { notFound } from "next/navigation";

type ParamsProps = {
  params: {
    reviewId: string;
    productId: string;
  };
};

const ReviewDetail = ({ params }: ParamsProps) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}{" "}
    </h1>
  );
};

export default ReviewDetail;
