import React from 'react'
import BlogSummary from '../../../globalComponents/BlogSummary'
import sample_thumbnail from '../../../assests/images/global/sample_thumbnail_blog.png'
import ProductCard from '../../../globalComponents/ProductCard.js'
import product_sample from '../../../assests/images/global/product_sample.png'
function HomePage() {
  return (
    <div>
      <ProductCard avtSrc={product_sample} name="coffee" category="coffee" price="200"></ProductCard>
    </div>
  )
}

export default HomePage