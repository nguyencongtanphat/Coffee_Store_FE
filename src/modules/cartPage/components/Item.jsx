import React from "react";
import { FormatterService } from "../../../service";
import "./Item.module.css"

function Item(props) {
  const { Price, Quantity, Size, id } = props.itemInfo;
  const { updateSumBill } = props;
  const {Image, Name} = props.itemInfo.Item;
  

  console.log("img:", Image)
  let productPrice = Number(Price);
  const toggleSelectItemHandler = (e) => {
    if (e.currentTarget.checked === true) updateSumBill(props.itemInfo, "add");
    else updateSumBill(props.itemInfo, "minus");
  };
  return (
    <div key={id} className="flex items-center justify-around md:justify-start">
      <input
        onClick={toggleSelectItemHandler}
        type="checkbox"
        name=""
        id={id}
        className="w-7"
      />
      <img
        src={Image}
        alt="coffee order"
        className="w-20 h-20 mr-3 rounded-2xl md:mr-6 md:w-32 md:h-32  "
      />
      <div
        className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                        md:flex-row md:items-center md:justify-start md:text-b7"
      >
        <div className="flex flex-1 flex-col space-y-1 md:space-y-3">
          <p className="text-orange">{Name}</p>
          <p>Size: {Size}</p>
        </div>
        <div className="flex  flex-col space-y-1 sm:w-[150px] md:space-y-3 md:w-[200px]">
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
