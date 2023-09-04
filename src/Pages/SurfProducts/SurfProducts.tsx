import React, { useState } from 'react'
import './SurfProducts.scss'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const SurfProducts = () => {

  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      catName: "surfboards",
      imgURL: 'https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      link: "/surfproducts"
    },
    {
      id: 2,
      catName: "kitesurf",
      imgURL: 'https://images.pexels.com/photos/1604746/pexels-photo-1604746.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: "/kitesurf"
    },
    {
      id: 3,
      catName: "wetsuits",
      imgURL: 'https://media.istockphoto.com/id/1336953432/es/foto/mujer-sonriente-se-sienta-en-la-tabla-de-wakesurf-y-monta-la-ola-y-toca-las-olas-con-una-mano.jpg?s=612x612&w=0&k=20&c=0MxBajjP5FjFEew6OtIEfdvDVMAqNgekdXSCCgZBUpE=',
      link: "/wetsuits"
    },
    {
      id: 4,
      catName: "swimwear",
      imgURL: 'https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: "/swimwear"
    },
  ])
  return (
    <div className='surfWrapper'>
        <div className="surfBanner">
          <h1>SURFBOARDS</h1>
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

export default SurfProducts