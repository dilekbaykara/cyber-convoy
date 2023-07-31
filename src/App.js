import logo from "./logo.svg";
import "./App.css";
const img = document.querySelector("img");
fetch("https://api.unsplash.com/photos/?client_id=", {
  mode: "cors",
}).then(function (response) {
  console.log(response.json());
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
