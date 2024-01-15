import React from "react";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  return (
    <div className="App">
      <ListItem
        data={{
          id: "29",
          name: "Lucas Harris",
          mail: "lucas.harris@example.com",
          img: "https://source.unsplash.com/random/640x508",
        }}
      />
    </div>
  );
}

export default App;
