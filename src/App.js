import Main from "./components/discordProfile/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManager from "./components/usermanager/UserManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="manager" element={<UserManager />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
