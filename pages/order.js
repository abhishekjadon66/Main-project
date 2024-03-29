import { useRouter, useEffect, useState } from "next/router";
import React from "react";
import Order from "../models/Order";
import mongoose from "mongoose";
const MyOrder = ({ order, clearCart }) => {
  const router = useRouter();
  const [date, setDate] = useState()
  const products = order.products;

  useEffect(() => {
    const d = new Date(order.createdAt)
    setDate(d)
   if (router.query.clearCart == 1) {
     clearCart()
   }
  }, [])
  
  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                E-Commerce.com
              </h2>
              <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">
                {/* Order Id: #{order.orderId} */}
              </h1>
              <p className="leading-relaxed mb-4">
                Your order has been successfully placed.
              </p>
              <p className="leading-relaxed mb-4">
                Order placed on:
                {date &&
                  date.toLocleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </p>
              <p>
                Your Payment status is:{" "}
                <span className="font-semibold text-slate-600-700">
                  {/* {order.status} */}
                </span>
              </p>

              <div className="flex mb-4">
                <a className="flex-grow text-center text-blue-500  py-2 text-lg px-1">
                  Item Description
                </a>
                <a className="flex-grow text-center text-blue-500 py-2 text-lg px-1">
                  Quantity
                </a>
                <a className="flex-grow text-center text-blue-500  py-2 text-lg px-1">
                  Item Total
                </a>
              </div>
              {Object.keys(products).map((key) => {
                return (
                  <div
                    key={key}
                    className="flex justify-between border-t border-gray-200 py-2"
                  >
                    <span className="text-gray-500">
                      {products[key].name} ({products[key].size}/
                      {products[key].variant})
                    </span>
                    <span className="m-auto text-gray-900">
                      {products[key].qty}
                    </span>
                    <span className="m-auto text-gray-900">
                      ₹{products[key].price} x {products[key].qty} = ₹
                      {products[key].price}
                    </span>
                  </div>
                );
              })}

              <div className="flex flex-col my-8">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {/* SubTotal: ₹{order.amount} */}
                </span>
                <div className="my-4">
                  <button className="flex mx-0 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://m.media-amazon.com/images/I/41j5+Tpww7L._UX679_.jpg"
            />
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

  let order = await Order.findById(context.query.id);

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  };
}

export default MyOrder;
