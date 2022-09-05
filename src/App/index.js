import React from "react";
import { Todoprovider } from "../TodoContext";
import { AppUI } from "./appUI";


function App() {

  return (
    <Todoprovider>
      <AppUI/>
    </Todoprovider>
  );
}

export default App;
