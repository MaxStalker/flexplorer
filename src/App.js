import { store, Provider } from "./state/root";
import View from "./View";
import { StateRouter, Link } from "mobx-state-tree-router";
import { router } from "./Views";

const App = () => {
  return (
    <div>Welcome to FlEx!</div>
  );
};

export default App;
