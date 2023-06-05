import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./component.css";


const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200" style={{ 
      backgroundImage: `url(https://images3.alphacoders.com/899/899272.jpg)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
    
    <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(https://images2.alphacoders.com/912/912958.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container bg-opacity-50 bg-gray-800">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-white">Space Chat</h1>
        <p className="py-6 font-bold text-white">
          Multiple chatting room web App where you can meet new space and Sci-fi enthusiasts, and make connections.
        </p>
        <button type="button" class="btnnnn mx-auto" onClick={handleLogin} style={{ fontSize: '2rem' }}>
          <strong>Login With Google</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Login;
