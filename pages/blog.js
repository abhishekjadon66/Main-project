import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
const Blog = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4"
                >
                  <Link
                    passHref={true}
                    href={`/product/${products[item].slug}`}
                    className="block relative rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="m-auto h-[25vh] md:h-[30vh] block"
                      src={products[item].img}
                    />
                  </Link>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Blog
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title.substr(0,20)}...
                    </h2>
                    <p className="mt-1">{products[item].desc.substr(0,150)}..</p>  
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: "blog" });
  let Blog = {};
  for (let item of products) {
    if (item.title in Blog) {
      if (
        !Blog[item.title]
      )
      if (
        !Blog[item.title]
      ) {
        Blog[item.title].size.push(item.size);
      }
    } else {
      Blog[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        Blog[item.title].color = [item.color];
        Blog[item.title].size = [item.size];
      }
      else {
          Blog[item.title].color = [];
          Blog[item.title].size = [];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(Blog)) },
  };
}

export default Blog;
