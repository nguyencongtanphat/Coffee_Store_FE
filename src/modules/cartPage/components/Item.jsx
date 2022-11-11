import React from "react";
import { FormatterService } from "../../../service";

function Item(props) {
  const { Price, Quantity, Size, id } = props.itemInfo;
  const {updateSumBill} = props;
  
 
  let productPrice = Number(Price);
  const toggleSelectItemHandler = (e) => {
    if (e.currentTarget.checked === true) updateSumBill(props.itemInfo, "add");
    else updateSumBill(props.itemInfo, "minus");
  };
  return (
    <div className="flex items-center justify-around md:justify-start">
      <input
        onClick={toggleSelectItemHandler}
        type="checkbox"
        name=""
        id={id}
        className="w-7"
      />
      <img
        src="https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_5029ddcaf58840199c80c173c40bfc4c_large.jpg"
        alt="coffee order"
        className="w-20 h-20 md:w-32 md:h-32 rounded-2xl mr-2"
      />
      <div
        className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                        md:flex-row md:items-center md:justify-around md:text-b7"
      >
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="text-orange">Default</p>
          <p>Size: {Size}, Topping: Sốt Caramel</p>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p>Số lượng: {Quantity}</p>
          <p>
            Thành tiền:
            <span className="text-orange">
              {FormatterService.format(productPrice)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
