import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PostWithUser } from '../types';
// import { useQuery } from "@tanstack/react-query";

export const loader = async () => {
	const res = await fetch('http://localhost:3000/api/posts');
	const data: PostWithUser = await res.json();
	return data;
};



function CreatePostWizard() {
	return (
		<div className="px-6 py-6 md:px-0">
			<textarea
				placeholder="Bio"
				className="textarea-bordered textarea textarea-lg h-52 w-full focus:outline-none"
			/>
			<button className="text-md  mt-6 flex items-end  rounded-md border-none bg-tertiary-500 px-8  py-3 font-normal text-slate-900 hover:shadow-md active:shadow-sm">
				Post
			</button>
		</div>
	);
}

const PostView = (props: PostWithUser) => {
	const { post, author } = props;
	return (
		<div key={post.id} className="bg-red-100">
			<div>
				<p className="text-white">{author.username}</p>
				<span className="text-white">{post.createdAt}</span>
			</div>
			<p className="text-white">{post.content}</p>
		</div>
	);
};

function SignUpBtn() {
	return <a className="mr-4 mt-4 flex justify-end text-slate-200">Sign Up</a>;
}

function Root() {
	const [isSignedIn, setIsSignedIn] = useState<boolean>();
	useEffect(() => {
		const authToken = localStorage.getItem('x-auth-token');
		if (!authToken) {
			setIsSignedIn(false);
		} else {
			setIsSignedIn(true);
		}
	}, [isSignedIn]);

	const posts = useLoaderData() as PostWithUser;
	return (
		<div className="flex flex-col items-center">
			<div className="w-full md:max-w-2xl">
				<div>{isSignedIn ? <CreatePostWizard /> : <SignUpBtn />}</div>
			</div>
			{[posts].map((post) => (
				<PostView key={post.post.id} {...post} />
			))}
		</div>
	);
}

export default Root;
