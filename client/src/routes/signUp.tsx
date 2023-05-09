// import React,{useState} from 'react'

import { QueryClient } from "@tanstack/react-query"
import { Form, Link } from "react-router-dom"

import { useForm, SubmitHandler } from 'react-hook-form'

// const action = (queryClient: QueryClient) => 
// async({params})
type UserData = {
  username: string,
  emailAddress: string,
  password: string
}

// type Username = Pick<UserData, 'username'>;
type Password = Pick<UserData, 'password'>;

function SignUp() {
  const {register, handleSubmit, formState}=useForm<UserData>()
  const onSubmit: SubmitHandler<UserData> = data => console.log(data);
  const {errors} = formState;
  
  
  return (
    <div className="flex items-center justify-center">
      <Form method="post" action="/signUP" className="mt-10 w-[90%] bg-secondary p-8 h-[540px] rounded-md mb-4 md:w-1/2 lg:w-2/6" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center mb-4 text-2xl text-gray-600">Sign Up</p>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Username</span>
          </label>
          <input type="text" className="input w-full bg-primary" {...register("username", { required: "username is required", min: 5})}/>
          <p className='text-red-800'>{errors.username?.message}</p>
        </div>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Email Address</span>
          </label>
          <input type="email" className="input w-full bg-primary" {...register("emailAddress", {
            required: 'Email Address is required', 
            pattern: { 
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid Email Format'
            }
          }
          )}/>
          <p className='text-red-800'>{errors.emailAddress?.message}</p>
        </div>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Password</span>
          </label>
          <input type="text" className="input w-full bg-primary" {...register("password", {
            required: 'Password is required', 
            validate: (fieldValue)  =>{
              if(fieldValue.length < 8){
                return 'Password must contain at least 8 characters'
              }
              if(!/[A-Z]/.test(fieldValue)){
                return 'Password must contain at least 1 capital letter'
              }
              if(!/[a-z]/.test(fieldValue)){
                return 'Password must contain at least 1 lowercase letter'
              }
              if(!/[\W]/.test(fieldValue)){
                return 'Password must contain at least 1 special character'
              }
            }
          })}/>
          <p className='text-red-800'>{errors.password?.message}</p>
        </div>
        <button type="submit" className="btn bg-tertiary-500 border-none text-gray-900">Submit</button>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link className="text-blue-800 hover:underline" to={'/signup'}>Sign in</Link></p>
      </Form>
    </div>
  )
}

export default SignUp