import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CreatePostWizard() {
  return (
    <div className="py-6 px-6 md:px-0">
      <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full h-52 focus:outline-none" />
      <button className="px-8  py-3 rounded-md bg-tertiary-500  border-none text-slate-900 text-md font-normal  mt-6 hover:shadow-md active:shadow-sm flex items-end">Post</button >
    </div>
  );
}
Array

function SignInBtn (){
  return(
    
    <Link className="text-slate-200 flex justify-end mt-4 mr-4" to={'/signIn'}>Sign in</Link>
  )
}


function Root() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  useEffect(() => {
    const authToken = localStorage.getItem('x-auth-token');
      if(!authToken){
        setIsSignedIn(false)
      }
      else {
        setIsSignedIn(true)
      } 
  }, [isSignedIn])
  
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:max-w-2xl">
        <div>
          {isSignedIn ? 
              <CreatePostWizard />
            :
            <SignInBtn />
          }
        </div>
      </div>
    </div>
  );
}

export default Root;
