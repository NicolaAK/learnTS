import axios from "axios";
import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import { ITodo, IUser } from "./types/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }

  async function fetchTodos() {
    const response = await axios.get<ITodo[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    setTodos(response.data);
  }

  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        height="200px"
        width="200px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
