import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/LangsContext";

function App() {
  return (
    <>
      <ContextProvider>
        <ToggleLangs />
        <Contenu />
      </ContextProvider>


    </>
  );
}

export default App;
