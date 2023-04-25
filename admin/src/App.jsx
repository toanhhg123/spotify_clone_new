import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Musics from "./pages/Musics";
import CreateMusic from "./pages/CreateMusic";
import Login from "./pages/Login";
import Error404 from "./pages/error404";
import Error505 from "./pages/error505";
import Accounts from "./pages/Accounts";
import UpdateAccount from "./pages/updateAccount";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/update/account/:id" element={<UpdateAccount />} />
        <Route path="/music/create" element={<CreateMusic />} />
        <Route path="/musics" element={<Musics />} />

      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Error404" element={<Error404 />} />
      <Route path="/Error505" element={<Error505 />} />
    </Routes>
  );
};

export default App;
