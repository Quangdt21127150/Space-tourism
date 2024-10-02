import { Route, Routes, Link, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const ErrorMsg = () => {
  return (
    <section
      className="error-message"
      style={{
        color: "#0B0D17",
        fontSize: "2.5rem",
        fontWeight: "Bold",
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>
        404 Error <br /> Page not found
      </h2>
      <Link to="/home">Back to home</Link>
    </section>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorMsg />}></Route>
      </Routes>
    </>
  );
};

export default App;
