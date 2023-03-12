import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormError from '../FormError/FormError'
import FormInputError from '../FormInputError/FormInputError'
import './PersonalProfileEditForm.css'

const PersonalProfileEditForm = ({setOpen}) => {
    
    const formik = useFormik({
        initialValues:{
            firstName: '',
            otherName: '',
            city: '',
            country: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'First name must be 2 or more characters').required('First name is required'),
            otherName: Yup.string().min(2, 'Other name must be 2 or more characters').required('Other name is required'),
            city: Yup.string().min(2, 'City must be 2 or more characters').required('City is required'),
            country: Yup.string().min(2, 'Country must be 2 or more characters').required('Country is required'),
        }),
        onSubmit: async()=>{
            // save personal profile
        }
    })

  return (
    <div className='p-profile-edit-form'>
        <h1 className='text-xl font-bold my-2'>Edit profile</h1>
        <form onSubmit={formik.handleSubmit}>
            {/* <FormError message={message}/> */}
            <div className='form-group'>
                <label htmlFor='firstname'>First name</label>
                <input 
                    type='text' 
                    id='firstname'
                    {...formik.getFieldProps('firstName')}
                />
                <FormInputError 
                    isTouched={formik.touched.firstName}
                    errorMessage={formik.errors.firstName}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='othername'>Other name</label>
                <input 
                    type='text' 
                    id='othername'
                    {...formik.getFieldProps('otherName')}
                />
                <FormInputError 
                    isTouched={formik.touched.otherName}
                    errorMessage={formik.errors.otherName}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input 
                    type='text' 
                    id='city'
                    {...formik.getFieldProps('city')}
                />
                <FormInputError 
                    isTouched={formik.touched.city}
                    errorMessage={formik.errors.city}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='city'>Country</label>
                <input 
                    type='text' 
                    id='country'
                    {...formik.getFieldProps('country')}
                />
                <FormInputError 
                    isTouched={formik.touched.country}
                    errorMessage={formik.errors.country}
                />
            </div>
            <div className='flex justify-between gap-4'>
                <input className='flex-1 p-2 rounded-md bg-primary' type='submit' value='Save'/>
                <button onClick={()=>setOpen(false)} className='flex-1 font-semibold'>close</button>
            </div>
        </form>
    </div>
  )
}

export default PersonalProfileEditForm