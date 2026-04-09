import { Box } from '@mui/material'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { useData } from '../../Context/DataContext'
import { appBarHeights } from '../../theme'

function Home () {
  const { categories } = useData()

  return (
    <Box
      sx={{
        pt: { xs: `${appBarHeights.xs}px`, md: `${appBarHeights.md}px` },
      }}
    >
      <Box
        sx={{
          height: { xs: '60vw', sm: '35vw', md: '25vw' },
          backgroundImage:
            'url("https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center calc(50% + 20%)',
        }}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
          gap: 2,
          m: { xs: 2, sm: 5, md: '5rem 8rem' },
        }}
      >
        {categories
          && categories.map(item => (
            <CategoryCard
              key={item.id}
              id={item.id}
              catName={item.catName}
              imgURL={item.imgURL}
              link={item.link}
            />
          ))}
      </Box>
    </Box>
  )
}

export default Home
