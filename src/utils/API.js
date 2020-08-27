import axios from "axios";


export default {
  getUser: function() {
    return axios.get("https://randomuser.me/api/0FAE-LJYS-GDRT-O697");
  }
};


// import React from "react";
// import OmdbContainer from "./components/OmdbContainer";

// function App() {
//   return <OmdbContainer />;
// }

// export default App;
