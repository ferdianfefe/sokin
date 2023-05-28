// Create a layout with navbar
import Button from "components/elements/Button";
import Navbar from "components/elements/Navbar";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const MerchantLayout: React.FC<{
  children: any;
  location: string;
  setNewOrderData: Function;
}> = ({ children, location, setNewOrderData = () => {} }): JSX.Element => {
  const [newOrder, setNewOrder] = useState(null);

  useEffect(() => {
    const socket = io();
    socket.on("newOrder", (data) => {
      setNewOrder(data);
      // fetch("/api/order/getOrder", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     id: merId,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     setOrder(data);
      //   });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {newOrder && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg py-4 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[300px]">
            <div className="font-bold text-3xl px-4">
              <h1>Order Masuk</h1>
            </div>
            <hr className="bg-c-orange-800" />
            <div className="px-4">
              <div className="font-bold">Pemesan</div>
              <p className="">{newOrder.user.name}</p>
              <p className="mt-4 font-bold">Pesanan</p>
              {newOrder.cart.menuItems.map((item) => (
                <div className="flex justify-between">
                  <p className="">{item.menu.name}</p>
                  <p className="">{item.quantity}x</p>
                  <p className="">Rp {item.menu.price * item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between">
                <p>Ongkos Kirim</p>
                <div className="">Rp {newOrder.costFee}</div>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p>Total</p>
                <div className="">Rp {newOrder.costFee + newOrder.foodFee}</div>
              </div>
              <div className="flex justify-center">
                <Button
                  text="Proses Orderan"
                  onClickHandler={() => {
                    setNewOrder(null);
                  }}
                  className="bg-orange-500 text-white px-4 py-2 mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
      <Navbar location={location} role="merchant" className="z-[100]" />
    </div>
  );
};

export default MerchantLayout;
