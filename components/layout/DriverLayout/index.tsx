// Create a layout with navbar
import Navbar from "components/elements/Navbar";
import React, { useEffect } from "react";
import io from "socket.io-client";

const DriverLayout: React.FC<{ children: any; location: string }> = ({
  children,
  location,
}): JSX.Element => {
  const [newOrder, setNewOrder] = React.useState(null);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // let socket: any;
    await fetch("/api/socket/");
    const socket = io();

    socket.on("newOrder", (newOrderData) => {
      console.log(newOrderData);
      setNewOrder(newOrderData);
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* {newOrder && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="font-bold text-3xl">
              <h1>Order Masuk</h1>
            </div>
            <p className="text-sm mb-2">Order ID: {newOrder.id}</p>
            <p className="text-sm mb-2">Customer: {newOrder.customerName}</p>
            <p className="text-sm mb-2">Address: {newOrder.customerAddress}</p>
            <p className="text-sm mb-2">Phone: {newOrder.customerPhone}</p>
            <p className="text-sm mb-2">Total: {newOrder.total}</p>
            <button className="bg-orange-500 text-white rounded-lg px-4 py-2">
              Accept
            </button>
          </div>
        </div>
      )} */}
      {children}
      <Navbar location={location} role="driver" />
    </div>
  );
};

export default DriverLayout;
