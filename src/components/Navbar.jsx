import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-black text-neutral-content">
  <div className="containerWrap flex justify-between">
    <a className="btn btn-ghost normal-case text-xl">Space Chat</a>
    {currentUser && (
  <button
    onClick={handleLogout}
    style={{ float: "left", marginLeft: "20px" }}
  >
    Logout
  </button>
)}

  </div>
</div>
  )
}

export default Navbar