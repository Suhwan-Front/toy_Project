import { Input, Button } from "@chakra-ui/react";
import axiosManager from "../util/axiosManager";
import { useState } from "react";

const Login = () => {
  const [Id, setID] = useState("");
  const [Pw, setPw] = useState("");
  const handleButton = () => {
    console.log(Id);
    console.log(Pw);
  };

  return (
    <div>
      <form>
        <Input
          variant="filled"
          placeholder="아이디"
          name="ID"
          onChange={(e) => setID(e.target.value)}
        />
        <Input
          variant="filled"
          placeholder="비밀번호"
          name="Password"
          onChange={(e) => setPw(e.target.value)}
        />
        <Button colorScheme="blue" onClick={() => handleButton()}>
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Login;
