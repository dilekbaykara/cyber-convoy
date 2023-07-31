import logo from "./logo.svg";
import GetPics from "./GetPics";
import "./App.css";
// const img = document.querySelector("img");
// fetch(
//   `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`,
//   {
//     mode: "cors",
//   }
// ).then(function (response) {
//   console.log(response.json());
// });
function App() {
  return (
    <div className="App">
      <header className="App-header">cyberconvoy.dev</header>
      <div>
        <GetPics />
      </div>
    </div>
  );
}

export default App;
