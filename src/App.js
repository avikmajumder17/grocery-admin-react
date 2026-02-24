import { useEffect, useState } from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { NavigationMenu } from './components/layout/NavigationMenu.js';
import { Header } from './components/layout/Header.js';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "./assets/css/theme.min.css";
import './App.css';
import { AllRoutes } from './routes/AllRoutes.js';



function App() {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    navToggle ? html.classList.add("minimenu") : html.classList.remove("minimenu");
  }, [navToggle]);



  return (
    <>
      <NavigationMenu navToggle={navToggle} />

      <Header navToggle={navToggle} setNavToggle={setNavToggle} />

      <AllRoutes navToggle={navToggle} />
    </>
  );
}

export default App;
