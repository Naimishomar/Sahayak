import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [aadharCard,setAadharCard] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name,email,aadharCard,age,gender,password)
    }
  return (
    <div className='bg-black h-screen md:h-full w-full flex justify-center items-center py-20'>
        <div className='w-sm bg-white rounded-2xl p-5'>
            <h1 className='text-3xl font-bold text-center'>Sahayak</h1>
            <h1 className='text-2xl font-semibold text-center'>Signup as Admin</h1>
            <form className='mt-5'>
                <div className='mb-3'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} id='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='aadharCard' className='block text-sm font-medium text-gray-700'>Aadhar Card</label>
                    <input type='text' value={aadharCard} onChange={(e)=>setAadharCard(e.target.value)} id='aadharCard' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='flex justify-between items-center gap-5'>
                    <div className='mb-3'>
                        <label htmlFor='number' className='block text-sm font-medium text-gray-700'>Age</label>
                        <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} id='number' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                    </div>
                    <div className='mb-3 grow'>
                        <label htmlFor='gender' className='block text-sm font-medium text-gray-700'>Gender</label>
                        <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} id='gender' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                </div>
                <div className='mt-6'>
                    <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer' onClick={submitHandler}>
                        Sign up
                    </button>
                </div>
                <div className='mt-6 text-center text-sm'>
                    <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Have an account?<span className='text-black'>Login</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup