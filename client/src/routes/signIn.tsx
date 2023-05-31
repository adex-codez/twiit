
import { useForm, SubmitHandler } from 'react-hook-form'

type  LoginDetails = {
  username: string,
  password: string
}

// type Username = Pick<UserData, 'username'>;
// type Password = Pick<UserData, 'password'>;

const onSubmit: SubmitHandler<LoginDetails> = data => {
  const userFormData = data;
  console.log(userFormData);
};

function SignIn() {

  const {register, handleSubmit, formState} = useForm<LoginDetails>();
  const {errors} = formState;
  
  
  return (
    <div className="flex items-center justify-center">
      <form method="post" action="/signUP" className="mt-10 w-[90%] bg-secondary p-8 h-[400px] rounded-md mb-4 md:w-1/2 lg:w-2/6" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center mb-4 text-2xl text-gray-600">Sign Up</p>
        <div className="form-control w-full mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text text-base text-gray-600">Enter Username</span>
          </label>
          <input type="text" className="input w-full bg-primary" {...register("username", { required: "username is required", min: 5})} />
          <p className='text-red-800'>{errors.username?.message}</p>
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
        <button type="submit" className="btn bg-tertiary-500 border-none text-gray-900 hover:text-gray-300">Submit</button>
        <p className="mt-4 text-sm text-gray-600">Don't have an account <a className="text-blue-800 hover:underline">Sign Up</a></p>
      </form>
    </div>
  )
}

export default SignIn
