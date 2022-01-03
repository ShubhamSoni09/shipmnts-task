import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { userData } from "./context";

import LogSign from "./logsign";
import Home from "./home";

const App = () => {
  const { rootUser } = useContext(userData);
  console.log("inside rootuser app,js", rootUser);

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LogSign />} exact></Route>
            <Route path="/home" element={<Home />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
