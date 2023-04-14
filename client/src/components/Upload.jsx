import React,{useEffect, useState} from 'react'

function Upload() {
  const [file,setFile] = useState();
  
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleSubmit(event){
      event.preventDefault()
      const url = 'http://localhost:3000/uploadFile';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      fetch("http://localhost:5000/upload_files", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then((res) => console.log(res))
        .catch((err) => ("Error occurred", err));
}
  
  return (
    <div>
      <div className="absolute bottom-8 right-4 w-12 h-12 bg-primary2 rounded-full px-6">
        <div className="-mt-[3px] -ml-[14px] max-w-xs">
          <form action="" onSubmit={handleSubmit}></form>
          <input type="file" name="addFile" id="file"className="hidden"onChange={handleChange} multiple/>
          <label htmlFor="file"><button  className="text-5xl text-secondary">+</button></label>
        </div>
      </div>
    </div>
  )
}

export default Upload