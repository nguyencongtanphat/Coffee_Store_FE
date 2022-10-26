import React from 'react'
import Item from './Item'

function Table() {
    const orderList = [
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
      {
        name: "Cafe chon",
        size: "L",
        number: "2",
        price: "16.000",
      },
    ];
  return (
    <div className='w-4/5 md:w-6/12'>
      <ul className="list-none p-0 max-h-[70vh] overflow-auto">
        {orderList.map((item) => (
          <li className="my-3">
            <Item />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table