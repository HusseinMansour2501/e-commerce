import React from 'react'
import Slider from '../../componants/slider/Slider'
import Features from '../Features/Features'
import Categories from '../categories/Categories'
import CategoryBar from '../categoryBar/CategoryBar'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Slider />
      <CategoryBar />
      <Features />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home