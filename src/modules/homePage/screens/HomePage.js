import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import NewProduct from '../components/NewProduct'
import BlogSlider from '../components/BlogSlider'
import BestSeller from '../components/BestSeller'
import HttpService from "../../../service";
import axios from "axios";

function HomePage() {
  const [bestSellerArray,setBestSellerArray] = useState([])

  async function FetchData() {
    const response = await axios.get(HttpService.appUrl + "/menu/products")
    setBestSellerArray(response.data.data.slice(0,4))
  }

  useEffect(() => {
    FetchData()
  },[])

  return (
    <div>
      <Banner />
      <BestSeller bestSeller={bestSellerArray}/>
      <NewProduct />
      <BlogSlider />
    </div>
  )
}

export default HomePage