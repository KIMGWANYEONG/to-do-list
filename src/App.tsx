import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "⚽️ 축구하기",
    isDone: false,
  },
  {
    id: 2,
    content: "🏓 탁구하기",
    isDone: false,
  },
  {
    id: 3,
    content: "🧹 청소하기",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
