import { useParams } from "react-router-dom";
import React from "react";

function ProductDetailsPage() {
  const { id } = useParams();
  console.log(id);
  return <div>ProductDetailsPage</div>;
}

export default ProductDetailsPage;
