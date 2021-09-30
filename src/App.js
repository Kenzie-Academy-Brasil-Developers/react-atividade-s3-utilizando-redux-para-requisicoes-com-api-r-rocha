import "./App.css";
import Digimon from "./components/Digimon";
import Search from "./components/Search";
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Search />
        </Box>
        <Box mt={7}>
          <Digimon />
        </Box>
      </header>
    </div>
  );
}

export default App;
