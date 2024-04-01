import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, GenreDetail, AnimeDetail, SearchPage, TopAnime} from './components';


const app = () => {
  <BrowserRouter>
    <Box sx={{background: '#66095e'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Feed />} />
        <Route path='/anime/:id'  element = {<AnimeDetail />}/>
        <Route path='/genre/:id'  element = {<GenreDetail />}/>
        <Route path='/topanime' element = {<TopAnime />} />
        <Route path='/search/:searchTerm'  element = {<SearchPage />}/>
      </Routes>
    </Box>
  </BrowserRouter>
}

export default app