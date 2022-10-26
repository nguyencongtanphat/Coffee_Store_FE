import React from 'react'

function Item() {
  return (
    <div className="flex items-center justify-around md:justify-start">
      <img
        src="https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_5029ddcaf58840199c80c173c40bfc4c_large.jpg"
        alt="coffee order"
        className="w-20 h-20 md:w-32 md:h-32 rounded-2xl"
      />
      <div
        className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                        md:flex-row md:items-center md:justify-around md:text-b7"
      >
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="text-orange">Cà Phê Mouse Kem Cheese</p>
          <p>Size: Lớn, Topping: Sốt Caramel</p>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p>Số lượng: 2</p>
          <p>
            Thành tiền:
            <span className="text-orange">49.000đ</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item