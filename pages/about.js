import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
const About = ({ products }) => {
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
                      About
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">{products[item].desc}</p>
                    {/* <div className="mt-1">
                      {products[item].size.includes("s") && 
                        <span className="border px-1 mx-1 border-blue-200">
                          S,
                        </span>
            }|
                      {products[item].size.includes("m") && 
                        <span className="border px-1 mx-1 border-blue-200">
                          M,
                        </span>
                      }
                      {products[item].size.includes("L") && 
                        <span className="border px-1 mx-1 border-blue-200">
                          L,
                        </span>
                      }
                      {products[item].size.includes("XL") && 
                        <span className="border px-1 mx-1 border-blue-200">
                          XL,
                        </span>
                    }
                      {products[item].size.includes("XXL") && 
                        <span className="border px-1 mx-1 border-blue-200">
                          XXL,
                        </span>
                      }
                    </div> */}
                    {/* <div className="mt-1">
                      {products[item].color.includes('Brown') && <button className="border-2 border-blue-400 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('Brown') && <button className="border-2 border-blue-400 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('Brown') && <button className="border-2 border-blue-400 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('Brown') && <button className="border-2 border-blue-400 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div> */}
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

  let products = await Product.find({ category: "about" });
  let about = {};
  for (let item of products) {
    if (item.title in about) {
      if (
        !about[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        about[item.title].color.push(item.color);
      }
      if (
        !about[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        about[item.title].size.push(item.size);
      }
    } else {
      about[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        about[item.title].color = [item.color];
        about[item.title].size = [item.size];
      }
      else {
          about[item.title].color = [];
          about[item.title].size = [];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(about)) },
  };
}

export default About;
