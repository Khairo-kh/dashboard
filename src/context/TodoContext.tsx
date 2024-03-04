import React, { createContext, useReducer, useContext, FC } from "react";

// To-do item interface
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// State interface
interface TodoState {
  todos: Todo[];
}

// Action types
type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "MARK_COMPLETE"; payload: number }
  | {
      type: "UPDATE_TODO";
      payload: { id: number; updatedTodo: Partial<Todo> };
    };

// Reducer function
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload, completed: false },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.updatedTodo }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Context interface
interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TodoContext = createContext<TodoContextType>({} as any);

// Provider
export const TodoProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook for using TodoContext
export const useTodo = () => useContext(TodoContext);
