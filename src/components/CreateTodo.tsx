import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Flex bgColor="teal.200" h={32} justifyContent="center" alignItems="center">
      <Input />
      <Button>만들기</Button>
    </Flex>
  );
};

export default CreateTodo;
