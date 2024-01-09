import './App.css';
import Login from './pages/Login';
import { useEffect, useState } from 'react'
import { getTokenFromUrl } from './api/Spotify'


function App() {
  const [token, setToken] = useState(null)

  useEffect(()=>{
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token
        if(_token){setToken(_token)}
    }, [])

  return (
    <div className="App">
      {token?<h1>Logged in</h1>:<Login />}
    </div>
  );
}

export default App;
