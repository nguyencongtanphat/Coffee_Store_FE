import React from 'react'
import PageTitle from '../../../globalComponents/PageTitle'
import ProductCard from '../../../globalComponents/ProductCard'
import sample_product from '../../../assests/images/global/product_sample.png'
const BestSeller = (props) => {
    return (
        <div className=" bg-no-repeat bg-[position:bottom_left,bottom_right]
            lg:bg-[url(/src/assests/images/global/leaf-bg-left.png),_url(/src/assests/images/global/leaf-bg-right.png)]
        ">
            <PageTitle title="Best Seller" className="mx-28" />
            <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4">
                {
                    props.bestSeller.map(item => <ProductCard avtSrc={sample_product}
                        name={item.Name}
                        category={item.Category.Name}
                        price={item.SPrice}
                    />

                    )
                }
            </div>
        </div>
    )
}

export default BestSeller