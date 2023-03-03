import React, {useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessage, localLogin } from '../../features/auth/authSlice'
import FormError from '../FormError/FormError'
import './LoginForm.css'
import FormInputError from '../FormInputError/FormInputError'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const LoginForm = () => {
    const dispatch = useDispatch()
    const {userLoading, message, user} = useSelector( store => store.auth) 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, "Must be at least 8 characters").required("Password required")
            .matches(/[a-z]+/, "Must contain atleast one lowercase character")
            // .matches(/[A-Z]+/, "One uppercase character")
            // .matches(/[@$!%*#?&]+/, "One special character")
            .matches(/\d+/, "Must contain atleast one number")
        }),
        onSubmit: async(values) => {
            dispatch(clearMessage())
            dispatch(localLogin(values))
        }
    })

    useEffect(() => {
        dispatch(clearMessage())
    }, [])
    
    const facebookLogin = async() => {
        window.open('http://localhost:5000/auth/facebook', '_self')
    }
    const googleLogin = async() => {
        console.log('logging with google')
        window.open('http://localhost:5000/auth/google', '_self')
    }

    return (
        <div className='login'>
            <div className='my-10 flex items-center justify-between'>
                <h1 className='text-left font-bold text-4xl text-slate-700'>Log in</h1>
                <Link to='/signup' className='text-right font-semibold text-primary underline block'>Sign up</Link>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <FormError message={message}/>
                <div className='form-group'>
                    <label htmlFor='email'>
                        Email<sup className='text-red-500 font-bold'>*</sup>
                    </label>
                    <input 
                        type='email' 
                        id='email'
                        {...formik.getFieldProps('email')}
                    />
                    <FormInputError 
                        isTouched={formik.touched.email}
                        errorMessage={formik.errors.email}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                        Password<sup className='text-red-500 font-bold'>*</sup>
                    </label>
                    <input 
                        type='password'
                        id='password'
                        {...formik.getFieldProps('password')}
                    />
                    <FormInputError 
                        isTouched={formik.touched.password}
                        errorMessage={formik.errors.password}
                    />
                </div>

                <div className='flex justify-between text-sm text-slate-700'>
                    <div className='flex gap-1 items-center'>
                        <input type='checkbox' id='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <Link to='/forgot-password' className='underline'>Forgot password?</Link>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <button 
                        className='p-2 bg-primary rounded-full text-white text-center my-4 px-4 '
                        type='submit'
                        >Submit
                    </button> 
                    <div className='flex gap-2 items-center'>
                        <p>Login using</p>
                        <Link onClick={facebookLogin}>
                            <FaFacebook  className='social-link text-blue-500'/>
                        </Link>
                        <Link onClick={googleLogin}>
                            <FaGoogle className='social-link text-red-500' />
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm