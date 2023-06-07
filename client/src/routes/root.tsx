import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PostWithUser } from '../types/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const loader = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const data: PostWithUser[] = await res.json();
  return data;
};

function CreatePostWizard() {
  return (
    <div className="px-6 py-6 md:px-0">
      <textarea
        placeholder="Bio"
        className="textarea-bordered textarea textarea-lg h-52 w-full focus:outline-none"
      />
      <button className="text-md mt-6 flex items-end rounded-md border-none bg-tertiary-500 px-8 py-3 font-normal text-slate-900 hover:shadow-md active:shadow-sm">
        Post
      </button>
    </div>
  );
}

const PostView = (props: PostWithUser) => {
  const { author } = props
  
  return (
    <div className="bg-secondary w-1/2 p-8 mb-4 mt-8 rounded-lg">
      <div className='flex'>
        <p className="text-black text-bold font-semibold mb-2 mr-2">{author.username}</p>
        <span className="text-black flex font-thin">
          <p>@{author.email}</p>
          <p className='ml-3'>{dayjs(props.createdAt).fromNow()}</p>
        </span>
      </div>
      <p className="text-black text-base">{props.content}</p>
    </div>
  );
};

function SignUpBtn() {
  return <a className="mr-4 mt-4 flex justify-end text-slate-200">Sign Up</a>;
}

function Root() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  useEffect(() => {
    const authenticationToken = localStorage.getItem('x-auth-token');
    if (!authenticationToken) {
      setIsSignedIn(false);
    } else {
      setIsSignedIn(true);
    }
  }, []);

  const posts = useLoaderData() as PostWithUser[];
	console.log(posts);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:max-w-2xl">
        
        <div>{isSignedIn ? <CreatePostWizard /> : <SignUpBtn />}</div>  
        
      </div>
      {posts.map((post) => (
        <PostView {...post} key={post._id}/>
      ))}
    </div>
  );
}

export default Root;
