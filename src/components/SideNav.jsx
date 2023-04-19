import React from 'react'

function SideNav(props) {

  const handleClick = (name) => {
    props.onChatRoomClick(name);
  }

  return (
    <ul className="menu bg-black border-r border-gray-400 w-56 h-screen fixed left-0 top-0 overflow-y-auto">
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      <li className="p-4"><a className="text-white font-bold">Chat Rooms</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150"  onClick={() => handleClick("Nebula")}>Nebula</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150"  onClick={() => handleClick("Andromida Galaxy")}>Andromida Galaxy</a></li>
      <li className="p-4"><a className="block text-white hover:bg-blue-500 hover:text-white transition duration-150" onClick={() => handleClick("Meteors")}>Meteors</a></li>
    </ul>
  )
}

export default SideNav;
