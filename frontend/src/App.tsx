import { useCardModule } from "./hooks/useCardModule";
import { AppProvider } from "./providers/AppProvider";
// import { Test1 } from "./components/Test1";
import { Lobby } from "./components/Lobby";

import "./App.css";

function App() {
  useCardModule();

  return (
    <AppProvider>
      <Lobby />
      {/* <Test1></Test1> */}
    </AppProvider>
  );
}

export default App;
