import React, { useState } from 'react'
import './Home.scss'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { useData } from '../../Context/DataContext'

const Home = () => {

  const { categories } = useData()


  return (
    <div className='homeWrapper'>
        <div className="homeBanner">
            
        </div>
        <div className="categoriesOutput">
          {categories && categories.map(item => (
            <CategoryCard 
            key={item.id}
            catName={item.catName}
            imgURL={item.imgURL}
            link={item.link}
            />

          ))}
        </div>

    </div>
  )
}

export default Home