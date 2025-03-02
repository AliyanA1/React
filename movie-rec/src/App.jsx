import { useState,useEffect } from 'react'
import Spinner from './components/Spinner';
import  Search  from  './components/Search';
import MovieCard from './components/MovieCard';
import {useDebounce}  from   'react-use';
import {updateSearchCount, getTrendingMovies} from './appwrite'


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}



function App() {
 const [trendingMovies,setTrendingMovies]=useState([])
  const [searchTerm, setsearchTerm] = useState('');
  const  [debounce, setdebounce]= useState('')
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

//debounce
useDebounce(()=>{
  setdebounce(searchTerm)
}, 300, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
     

      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }
//load Trending movies
const loadTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies();

    setTrendingMovies(movies);
  } catch (error) {
    console.error(`Error fetching trending movies: ${error}`);
  }
}

//useEffect
useEffect(()=>{
   fetchMovies(debounce);
},[debounce])

useEffect(() => {
  loadTrendingMovies();
}, []);

  return (
    <main>
    console.log(loadTrendingMovies());

    <div className='wrapper'>
    <header>
      <img src="./hero.png" alt="Hero banner" />
      <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassel</h1>
      <Search   Srch={searchTerm} SetSrch={setsearchTerm}/>
    </header>

    {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}
     
    <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                 <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

    </div>
    </main>
  )
}

export default App
