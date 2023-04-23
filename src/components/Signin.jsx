import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import styles from './Login.module.css'
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
      alert("Loging Sucessfull")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.in}>
        <h1 className={styles.heading}>Login</h1>
        <p className='py-2'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerl}>
          <label className=''>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
        </div>
        <div className={styles.footer}>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign In
        </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
