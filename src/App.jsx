import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
