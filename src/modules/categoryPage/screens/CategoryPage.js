import React, { useEffect, useState } from 'react'
import PageTitle from '../../../globalComponents/PageTitle'
import SearchBar from '../components/SearchBar'
import SortDropdown from '../components/SortDropdown'
import ProductCard from '../../../globalComponents/ProductCard'
import sample_product from '../../../assests/images/global/product_sample.png'
import HttpService from "../../../service";
import axios from "axios";


const CategoryPage = (props) => {

    const [productsByCategory,setProductsByCategory] = useState([])

    function ComparePrice(a,b) {
        return b.SPrice - a.SPrice
    }

    async function FetchData() {
        const response = await axios.get(HttpService.appUrl + `/menu/categories/${props.type}`)
        setProductsByCategory(response.data.data.sort(ComparePrice));
    }

    useEffect(() => {
        FetchData()
    },[props.type])


    return (
        <div className="
            bg-no-repeat bg-[position:bottom_left,bottom_right]
            lg:bg-[url(/src/assests/images/global/leaf-bg-left.png),_url(/src/assests/images/global/leaf-bg-right.png)]
        ">
            <PageTitle title={props.title} />
            <div className="hidden lg:flex justify-around lg:my-8">
                <SortDropdown />
                <SearchBar />
            </div>
            <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4">
                {
                    productsByCategory.map(item => <ProductCard 
                        avtSrc={sample_product}
                        name={item.Name}
                        category={item.Category.Name}
                        price={item.SPrice}
                    />)
                }
            </div>
        </div>
    )
}

export default CategoryPage
