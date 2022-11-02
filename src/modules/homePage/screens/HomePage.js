import React from 'react'
import BlogSummary from '../../../globalComponents/BlogSummary'
import sample_thumbnail from '../../../assests/images/global/sample_thumbnail_blog.png'
import ProductCard from '../../../globalComponents/ProductCard.js'
import product_sample from '../../../assests/images/global/product_sample.png'
function HomePage() {
  return (
    <div>
      <ProductCard avtSrc={product_sample} name="coffee" category="coffee" price="200"></ProductCard>
      <BlogSummary avtSrc={sample_thumbnail} title="CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ NGON"
        updateDate="20/09/2022"
        summaryContent="Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam 
        và nhiều nước khác trên thế giới. Với nhiều đặc..."
        className="bg-brown"
      />
    </div>
  )
}

export default HomePage