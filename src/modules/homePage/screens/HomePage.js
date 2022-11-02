import React from 'react'
import Banner from '../components/Banner'
import NewProduct from '../components/NewProduct'
import BlogSlider from '../components/BlogSlider'
import BestSeller from '../components/BestSeller'
function HomePage() {
  return (
    <div>
      <Banner />
      <BestSeller />
      <NewProduct />
      <BlogSlider />
    </div>
  )
}

export default HomePage