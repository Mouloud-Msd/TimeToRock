import Main from "./Components/Main";
import { Provider } from "react-redux";
import { store } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
