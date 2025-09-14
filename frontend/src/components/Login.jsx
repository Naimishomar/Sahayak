import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-black h-screen w-full flex justify-center items-center'>
        <div className='w-sm bg-white rounded-2xl p-5'>
            <h1 className='text-3xl font-bold text-center'>Sahayak</h1>
            <h1 className='text-2xl font-semibold text-center'>Login as Admin</h1>
            <form className='mt-5'>
                <div className='mb-3'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Admin Id</label>
                    <input type='email' id='email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' id='password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='mt-6'>
                    <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'>
                        Sign in
                    </button>
                </div>
                <div className='mt-6 text-center text-sm'>
                    <Link to='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Don't have an account?<span className='text-black'>Register</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login