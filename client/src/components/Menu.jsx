import React,{useState} from 'react'

function Menu() {
  const [menu,setMenu] = useState(false);
  function handleMenu(){
    setMenu(prevState => !prevState)
  }
  return (
    <div>
      <div className="absolute top-4 right-6 flex gap-1 flex-col cursor-pointer" onClick={handleMenu}>
        <span className="w-1 h-1 block bg-primary2 rounded-full"></span>
        <span className="w-1 h-1 block bg-primary2 rounded-full"></span>
        <span className="w-1 h-1 block bg-primary2 rounded-full"></span>
      </div>
      <div className={menu ? 'block' : 'hidden'}>
        <div className="bg-white absolute top-11 right-6">
          <p className="px-6 py-3 cursor-pointer hover:bg-slate-200">Create album</p>
        </div>
      </div>
    </div>
  )
}

export default Menu