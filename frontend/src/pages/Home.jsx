import React, { useState } from 'react'
import Header from '../components/header/Header'
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';
import ExploreMenu from '../components/exploreMenu/ExploreMenu';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
