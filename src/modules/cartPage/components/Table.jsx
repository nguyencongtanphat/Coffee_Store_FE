import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../store/Context";
import Item from "./Item";

function Table({ updateSumBill }) {
  const [cartState, cartDispatch] = useContext(CartContext);
 
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  //   {
  //     name: "Cafe chon",
  //     size: "L",
  //     number: "2",
  //     price: "16.000",
  //   },
  // ];
  return (
    <div className="w-4/5 md:w-3/5">
      <ul className="list-none p-0 max-h-[70vh] overflow-auto">
        {cartState.map((item) => (
          <li className="my-3">
            <Item itemInfo={item} updateSumBill={updateSumBill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
