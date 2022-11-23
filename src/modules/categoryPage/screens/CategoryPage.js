import React, { useEffect, useState } from "react";
import PageTitle from "../../../globalComponents/PageTitle";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../../../globalComponents/ProductCard";
import HttpService from "../../../service";
import axios from "axios";
import LoadingSpinner from "../../../globalComponents/LoadingSpinner";

const CategoryPage = (props) => {
    const [productsByCategory, setProductsByCategory] = useState([])
    const [filterProducts, setFilteredProducts] = useState([])

    function ComparePrice(a, b) {
        return b.SPrice - a.SPrice
    }

    function FilterProducts(filteredProducts) {
        setFilteredProducts(filteredProducts)
    }

    async function FetchData() {
        const response = await axios.get(HttpService.appUrl + `/menu/categories/${props.type}`)
        setProductsByCategory(response.data.data.sort(ComparePrice));
        setFilteredProducts(response.data.data.sort(ComparePrice));
    }

    useEffect(() => {
        FetchData()
    }, [props.type])


    return (
        <>
            {productsByCategory.length > 0 ? (
                <div className="
            bg-no-repeat bg-[position:bottom_left,bottom_right]
            lg:bg-[url(/src/assests/images/global/leaf-bg-left.png),_url(/src/assests/images/global/leaf-bg-right.png)]
        ">
                    <PageTitle title={props.title} />
                    <div className="flex flex-row-reverse justify-between md:justify-around lg:flex-row lg:my-8">
                        <SortDropdown handleFilter={FilterProducts} data={[...filterProducts]} />
                        <SearchBar handleFilter={FilterProducts} data={productsByCategory} />
                    </div>
                    <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4">
                        {
                            filterProducts.map(item => <ProductCard
                                avtSrc={item.Image}
                                name={item.Name}
                                category={item.Category.Name}
                                price={item.SPrice}
                            />)
                        }
                    </div>
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </>
    );
};

export default CategoryPage;
