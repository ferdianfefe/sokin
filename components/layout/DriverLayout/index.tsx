// Create a layout with navbar
import Navbar from "components/elements/Navbar";
import React, { useEffect } from "react";
import io from "socket.io-client";
let socket: any;

const DriverLayout: React.FC<{ children: any; location: string }> = ({
  children,
  location,
}): JSX.Element => {
  useEffect(() => {
    socketInitializer();
  });

  const socketInitializer = async () => {
    await fetch("/api/socket/");
    socket = io();
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("newOrder", () => {
      console.log("order masuk");
    });
  };

  return (
    <div className="relative min-h-screen">
      {children}
      <Navbar location={location} role="driver" />
    </div>
  );
};

export default DriverLayout;
