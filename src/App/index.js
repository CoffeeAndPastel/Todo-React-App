import React from "react";
import { Todoprovider } from "../TodoContext";
import { AppUI } from "./appUI";


function App() {
  return (
    <main className="pageContent">
      <Todoprovider>
        <AppUI/>
      </Todoprovider>
    </main>
  );
}

export default App;
