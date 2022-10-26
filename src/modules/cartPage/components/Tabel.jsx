import React from "react";
import Row from "./Row";


function Tabel() {
    const thStyle = `border border-slate-500 border-solid text-center text-b6 px-2`;
  return (
    <div>
      <table className="border border-slate-500 border-solid">
        <tr className="">
          <th className={thStyle}>STT</th>
          <th className={thStyle}>Tên món</th>
          <th className={thStyle}>Size & Topping</th>
          <th className={thStyle}>Số lượng</th>
          <th className={thStyle}>Thành tiền</th>
        </tr>
        <Row
          stt="1"
          foodName="cà phê Mouse kem Cheese"
          size="L"
          topping="Sốt caramen"
          numberItem="4"
          price="49.000đ"
        />
        <Row
          stt="1"
          foodName="cà phê Mouse kem Cheese"
          size="L"
          topping="Sốt caramen"
          numberItem="4"
          price="49.000đ"
        />
        <Row
          stt="1"
          foodName="cà phê Mouse kem Cheese"
          size="L"
          topping="Sốt caramen"
          numberItem="4"
          price="49.000đ"
        />
        <Row
          stt="1"
          foodName="cà phê Mouse kem Cheese"
          size="L"
          topping="Sốt caramen"
          numberItem="4"
          price="49.000đ"
        />
      </table>
    </div>
  );
}

export default Tabel;
