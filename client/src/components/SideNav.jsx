import React from 'react'

function SideNav(props) {

  const handleClick = (name) => {
    console.log('Clicked on chat room:', name);
    props.onChatRoomClick(name);
  }
  
  return (
    <ul className="menu bg-black border-r border-gray-400 w-56 h-screen fixed left-0 top-0 overflow-y-auto">
      <li className="p-4"><a className="text-white font-bold">Chat Rooms</a></li>
      <input type="text" placeholder="Search topics" className="input input-bordered input-primary w-full max-w-xs" />
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150"  onClick={() => handleClick("Nebula")}>Nebula</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150"  onClick={() => handleClick("AiChatroom")}>Ask-AI</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150"  onClick={() => handleClick("Andromida Galaxy")}>Andromida Galaxy</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150" onClick={() => handleClick("Orion's Belt")}>Orion's Belt</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150" onClick={() => handleClick("messages")}>General</a></li>
      <style jsx>{`
        .menu {
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
            position: relative;
            z-index: 1;
          }
        }
        
        .input {
          @media (max-width: 768px) {
            max-width: 100%;
          }
        }
      `}</style>
    </ul>
  )
}

export default SideNav;
