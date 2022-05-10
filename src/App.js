import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodosContext.jsx";


function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodosContextProvider>
          <Form />
          <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
