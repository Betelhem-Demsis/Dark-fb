import "./App.css";
import Header from "./header";
import Sidebar from "./Sidebar";
import Feed from "./feed.js";
import Widgets from "./Widget.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
