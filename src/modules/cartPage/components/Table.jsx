import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../store/Context";
import Item from "./Item";

function Table({ updateSumBill }) {
  const [cartState, cartDispatch] = useContext(CartContext);
 
 
  return (
    <div className="w-[90%] lg:w-[60%]">
      <ul className="list-none p-0 max-h-[70vh] overflow-auto">
        {cartState.map((item) => (
          <li className="my-3">
            <Item key={item.id} itemInfo={item} updateSumBill={updateSumBill} />
            <hr className="mt-3"></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
