import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (res.socket.server.io) {
    console.log("already connected");
  } else {
    console.log("socket is connecting");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("newOrder", (cart) => {
        console.log("new order created")
        socket.broadcast.emit("order-to-client", cart);
      });
    });

    io.on("newOrder", (socket) => {
        console.log("new order created")
        socket.broadcast.emit("order-to-client", "new order created");
    })
  }
  res.end();
}
