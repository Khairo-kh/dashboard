import React from "react";
import { IoIosCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { useTodo } from "../context/TodoContext";
import CustomButton from "./Button";
import Checkbox from "./Checkbox";
import CustomInput from "./Input";

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background: #111827;
  height: 100%;
  min-height: 350px;
  margin: 0.2rem;
  padding: 1.5rem;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.05);
`;

const TodoInputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0rem;
  justify-content: space-between;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem;
`;

const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  border: 1px solid #9b9b9b;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
`;

const TodoComponent: React.FC = () => {
  const { dispatch, state } = useTodo();
  const [newTodo, setNewTodo] = React.useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const handleToggleComplete = (id: number) => {
    dispatch({ type: "MARK_COMPLETE", payload: id });
  };

  return (
    <Todo>
      <TodoInputArea>
        <CustomInput
          type="secondary"
          inputsize="large"
          width="calc(90% - 0.5rem)"
          color="#ffffff"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <CustomButton
          size="medium"
          type="primary"
          style={{
            marginLeft: "1rem",
            fontSize: "1rem",
            marginRight: "0.56rem",
          }}
          onClick={handleAddTodo}
        >
          <IoIosCreate />
        </CustomButton>
      </TodoInputArea>
      <hr style={{ width: "100%", color: "#ffffff", marginTop: "1rem" }} />
      <TodoList>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id}>
            <p
              style={{
                color: "#ffffff",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </p>
            <div style={{ display: "flex" }}>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <CustomButton
                size="medium"
                type="danger"
                style={{ marginLeft: "1rem", fontSize: "1rem" }}
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                <MdDelete />
              </CustomButton>
            </div>
          </TodoItem>
        ))}
      </TodoList>
    </Todo>
  );
};

export default TodoComponent;
