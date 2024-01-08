import './Login.css'
import { loginUrl } from '../api/Spotify'

function Login() {
    return(
        <div className='login'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
            <a href={loginUrl} className='btn-login'>Login With Spotify</a>
        </div>
    )
}

export default Login