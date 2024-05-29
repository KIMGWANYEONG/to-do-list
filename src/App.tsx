import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App: FC = () => {
  return (
    <Flex>
      <CreateTodo />
      <TodoList />
    </Flex>
  );
};

export default App;
