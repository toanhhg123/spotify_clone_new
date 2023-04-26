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
import CreateAccount from "./pages/CreateAccount";
import Category from "./pages/Category";
import Toast from "./components/Toast";

import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(["accessToken"]);

  const accessToken = cookies.accessToken;
  if (!accessToken) {
    return <Login />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/create/account" element={<CreateAccount />} />
        <Route path="/update/account/:id" element={<UpdateAccount />} />
        <Route path="/music/create" element={<CreateMusic />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/category" element={<Category />} />
        <Route path="/Toast" element={<Toast />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Error404" element={<Error404 />} />
      <Route path="/Error505" element={<Error505 />} />
    </Routes>
  );
};

export default App;
