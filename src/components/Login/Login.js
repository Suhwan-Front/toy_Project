import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Container,
  Checkbox,
  Stack,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, loginKeep } from "../../actions/user_action"; // redux Login 정보 유지하기

const Login = ({ authenticated, login, location }) => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => ({
    email: state.email,
    password: state.password,
  }));
  const { userKeep } = useSelector((state) => ({
    userKeep: state.userKeep,
  }));

  const [Id, setID] = useState("");
  const [Pw, setPw] = useState("");
  const [idIsError, setIdIsError] = useState("");
  const [pwIsError, setPwIsError] = useState("noError");
  const handleButton = () => {
    setIdIsError(Id);
    setPwIsError(Pw);

    console.log(dispatch(authLogin).email);
    if (
      dispatch(authLogin).email === Id &&
      dispatch(authLogin).password === Pw
    ) {
      dispatch(loginKeep).userKeep = true;
    }
  };

  return (
    <div>
      <Container
        minHeight={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FormControl
          display={"grid"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          minHeight={"30vh"}
          borderRadius={"1rem"}
          border={"1px"}
          padding={"3rem"}
          borderColor={"#dddddd"}
        >
          <FormLabel fontWeight={"bold"}>
            아이디
            <Input
              variant="filled"
              placeholder="아이디"
              name="ID"
              onChange={(e) => setID(e.target.value)}
              margin={"auto"}
              isInvalid={!idIsError}
            />
          </FormLabel>
          <FormLabel fontWeight={"bold"}>
            비밀번호
            <Input
              variant="filled"
              placeholder="비밀번호"
              name="Password"
              onChange={(e) => setPw(e.target.value)}
              margin={"auto"}
              isInvalid={!pwIsError}
            />
            {!pwIsError === false ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>비밀번호를 입력해주세요</FormErrorMessage>
            )}
          </FormLabel>
          <Button colorScheme="blue" onClick={() => handleButton()}>
            로그인
          </Button>
          <Stack spacing={5} direction={"row"} margin={"auto"}>
            <Checkbox defaultChecked>로그인 유지</Checkbox>
            <Checkbox defaultChecked>아이디 저장</Checkbox>
          </Stack>
        </FormControl>
      </Container>
    </div>
  );
};

export default Login;
