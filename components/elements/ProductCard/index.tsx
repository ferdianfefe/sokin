import React from "react";

type Props = {
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  stock?: number;
};

const ProductCard: React.FC<Props> = ({
  title,
  price,
  description,
  image,
  stock,
}: Props) => {
  return (
    <div className="h-[274px] w-64 ">

    </div>
  );
};

export default ProductCard;