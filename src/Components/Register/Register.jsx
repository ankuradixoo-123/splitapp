import React,{useState} from 'react'
import { Link ,  useNavigate} from 'react-router-dom'
import './Register.css';
import axios from 'axios';
// import { useAuth } from '../AuthContext/AuthContext';

const Register = () => {

  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  // const { login } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/register', {
        name,
        email,
        password
      });
      // Example of extracting data from the response
      const { data } = response;
      // login(data.token);
      console.log('Registration Response:', data);

      
      // localStorage.setItem('token', data.token);
      navigate('/');
      setMessage('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Registration failed. Please try again.');
    }
  };
  
  return (
    <div className="auth">
      <h1>Register!</h1>
      <form onSubmit={handleRegister}>
        <input placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder='Enter a Password'value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        
       <button type='submit'>Signup</button>
      
       <span>Already have an account ? <Link to="/login">Login</Link></span>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Register