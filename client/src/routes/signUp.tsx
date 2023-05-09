// import React from 'react'

import { QueryClient } from "@tanstack/react-query"
import { Form } from "react-router-dom"

// const action = (queryClient: QueryClient) => 
// async({params})

function SignUp() {
  return (
    <div className="flex items-center justify-center">
      <Form method="post" action="/signUP" className="mt-20 w-[90%] bg-secondary p-8 h-[480px] rounded-md mb-4 md:w-1/2 lg:w-2/6">
        <p className="text-center mb-4 text-2xl text-gray-600">Sign Up</p>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Username</span>
          </label>
          <input type="text" className="input w-full bg-primary" name="username"/>
        </div>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Email Address</span>
          </label>
          <input type="email" className="input w-full bg-primary" name="username"/>
        </div>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Password</span>
          </label>
          <input type="text" className="input w-full bg-primary" name="password"/>
        </div>
        <button type="submit" className="btn bg-tertiary-500 border-none text-gray-900">Submit</button>
      </Form>
    </div>
  )
}

export default SignUp