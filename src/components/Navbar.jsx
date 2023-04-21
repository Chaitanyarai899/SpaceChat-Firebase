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
    <div className="navbar font-bold fixed z-10 bg-black text-neutral-content">
      <div className="containerWrap flex justify-between items-center">
        <a className="btn btn-ghost normal-case text-xl">Space Chat</a>
        {currentUser && (
          <button
            onClick={handleLogout}
            style={{ marginLeft: "20px", marginRight: "60px" }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar;
