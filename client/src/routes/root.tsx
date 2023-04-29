function CreatePostWizard() {
  return (
    <div className="py-6 px-6 md:px-0">
      <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full h-52 " />
      <button className="px-8 py-4 rounded-md bg-tertiary-500  border-none text-slate-900 text-lg font-normal mt-6 hover:shadow-md active:shadow-sm flex items-end">Post</button>
    </div>
  );
}

function Root() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:max-w-2xl">
        <div>
          <CreatePostWizard />
        </div>
      </div>
    </div>
  );
}

export default Root;
