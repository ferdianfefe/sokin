import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiResponseServerIO } from "types/next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (res.socket.server.io) {
    console.log("already connected");
  } else {
    console.log("socket is connecting");
    const io = new ServerIO(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
    io.on("connection", (socket: any) => {});
    io.on("newOrder", (socket: any) => {
      console.log("new order created");
      socket.broadcast.emit("order-to-client", "new order created");
    });
  }
  res.end();
  // if (res.socket.server.io) {
  //   console.log("already connected");
  // }
  // if (!res.socket.server.io) {
  //   console.log("New socket.io server...");
  //   const httpServer: NetServer = res.socket.server as any;
  //   const io = new ServerIO(httpServer, {
  //     path: "/api/socket",
  //   });

  //   res.socket.server.io = io;
  // }
  // res.end();
}
