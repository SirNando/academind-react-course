import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export function TodosContextProvider({ children }: any) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);

    setTodos((currentState) => currentState.concat(newTodo));
  }

  function removeTodoHandler(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}
