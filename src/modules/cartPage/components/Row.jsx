import React from "react";

function Row(props) {
  //  stt="1"
  //     foodName="cà phê Mouse kem Cheese"
  //     size="L"
  //     topping="Sốt caramen"
  //     numberItem="4"
  //     price="49.000đ"
  const { stt, foodName, size, topping, numberItem, price } = props;
  const tdStyle = `border border-slate-500 border-solid text-center text-b6 p-3`;
  return (
    <tr>
      <td className={`${tdStyle}`}>{stt}</td>
      <td className={tdStyle}>{foodName}</td>
      <td className={tdStyle}>
        Size: {size} | Topping: {topping}
      </td>
      <td className={tdStyle}>{numberItem}</td>
      <td className={tdStyle}>{price}</td>
      
    </tr>
  );
}

export default Row;
