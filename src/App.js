import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, GenreDetail, AnimeDetail, SearchPage, TopAnime, Footer} from './components';


const app = () => {
  return(
    <BrowserRouter>
      <Box sx={{backgroundColor: '#5504c7'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Feed />} />
          <Route path='/anime/:id'  element = {<AnimeDetail />}/>
          <Route path='/genre/:id'  element = {<GenreDetail />}/>
          <Route path='/topanime' element = {<TopAnime />} />
          <Route path='/search/:searchTerm'  element = {<SearchPage />}/>
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default app