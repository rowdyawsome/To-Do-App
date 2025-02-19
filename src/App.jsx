import { Todo } from "./components/Todo";
import { Header } from "./components/Header";
import style from "./app.module.css";
function App() {
  return (
    <div className={style.body}>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
