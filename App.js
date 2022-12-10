import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import { useState, useEffect } from 'react';
import { Routes,useLocation,useNavigate,} from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail'
import Form from './components/form/Form';


function App () {
  const [characters,setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false)

  const username = 'sebastiasanchez11@gmail.com';
  const password = 'keni123'

  function login(userData) {
    if(username === userData.username && password === userData.password){
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
 
  // const onSearch = () => {
  // //   const example = {
  // //     name: 'Morty Smith',
  // //     species: 'Human',
  // //     gender: 'Male',
  // //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // //  };
  //  setCharecters([...characters,example])
  // }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id != id))
  }
  
  
  return (
    <div className='App'>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Cards
            characters={characters}
            onClose={onClose}
          />}/>
          <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
      <hr/>
    </div>
  )
}

export default App
