import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Musics from "./pages/Musics";
import CreateMusic from "./pages/CreateMusic";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/music/create" element={<CreateMusic />} />
      </Route>
    </Routes>
  );
};

export default App;
