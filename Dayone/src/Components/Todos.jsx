import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchtodos } from "../app/slices/todos";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchtodos());
  }, []);
  if (loading) return <h1>loading....</h1>;
  if (error) return <h1>error...</h1>;
  return (
    <>
      <div>
        {todos.map((todo) => (
          <h1 key={todo.id}>{todo.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Todos;
