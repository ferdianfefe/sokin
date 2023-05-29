import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import { NextApiResponseServerIO } from "types/next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (res.socket.server.io) {
    console.log("already connected");
  } else {
    console.log("socket is connecting");
    const io = new Server(res.socket.server, { cors: { origin: "*" } });
    res.socket.server.io = io;
    io.on("newOrder", (socket: any) => {
      console.log("new order created");
      socket.broadcast.emit("order-to-client", "new order created");
    });
  }
  res.end();
}
