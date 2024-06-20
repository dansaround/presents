import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (isMainPage) {
      setRedirect(true);
    }
  }, [isMainPage]);

  if (redirect) {
    return <Navigate to="/rosamaria" replace />;
  }

  return <> To do:Main Presents App Page</>;
}

export default App;
