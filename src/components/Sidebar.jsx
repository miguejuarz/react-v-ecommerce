import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import react icon
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//import components
import CartItem from "../components/CartItem";
//import sidebarContext
import { SidebarContext } from "../contexts/SidebarContext";
//import cartContext
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  //useContext
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/**Icon */}
        <div
          onClick={toggleSidebar}
          className="cursor-pointer w-8 h8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[570px] overflow-y-auto overflow-x-hidden border-b">
        {/**Cart Items */}
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/*total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/**clear cart icon */}
          <div onClick={clearCart} className="cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 />
          </div>
        </div>
        <Link to='/' className="bg-gray-200 flex p-4 justify-center items-center text-primary font-medium">View cart</Link>
        <Link to='/' className="bg-primary flex p-4 justify-center items-center text-white font-medium">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
