import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-4 rounded-lg bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={image}
                alt={title}
                className="h-40 w-full sm:h-32 sm:w-32 rounded-lg object-cover"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-medium capitalize tracking-wider">
                  {title}
                </h2>

                {company && (
                  <p className="mt-1 capitalize text-neutral-content">
                    {company}
                  </p>
                )}
              </div>

              <span className="text-secondary font-medium">
                {dollarsAmount}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;