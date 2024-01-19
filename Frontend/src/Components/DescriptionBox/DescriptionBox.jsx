import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to SHOPPER, your ultimate destination for an
                unparalleled online shopping experience. Discover a
                curated selection of the latest trends in fashion,
                electronics, home decor, and more. With a commitment 
                to quality and customer satisfaction, we bring you a
                seamless shopping journey from the comfort of your home.</p>

            <p>Explore our extensive catalog featuring top-notch products from leading brands.</p>
        </div>
    </div>
  )
}

export default DescriptionBox