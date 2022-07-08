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
} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux/es/exports';
import {increment} from '../../actions/counterSlice';
import StyledLink from '../../presenter/Button';

const Login = () => {
  const [Id, setID] = useState('');
  const [Pw, setPw] = useState('');
  const [idIsError, setIdIsError] = useState('');
  const [pwIsError, setPwIsError] = useState('noError');
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('loginItem', true);
  }, []);
  const handleButton = () => {
    setIdIsError(Id);
    setPwIsError(Pw);
    dispatch(increment());
    localStorage.setItem('loginItem', false);
  };

  return (
    <div>
      <Container
        minHeight={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <FormControl
          display={'grid'}
          flexDirection={'column'}
          justifyContent={'space-around'}
          minHeight={'30vh'}
          borderRadius={'1rem'}
          border={'1px'}
          padding={'3rem'}
          borderColor={'#dddddd'}
        >
          <FormLabel fontWeight={'bold'}>
            아이디
            <Input
              variant="filled"
              placeholder="아이디"
              name="ID"
              onChange={e => setID(e.target.value)}
              margin={'auto'}
              isInvalid={!idIsError}
            />
          </FormLabel>
          <FormLabel fontWeight={'bold'}>
            비밀번호
            <Input
              variant="filled"
              placeholder="비밀번호"
              name="Password"
              onChange={e => setPw(e.target.value)}
              margin={'auto'}
              isInvalid={!pwIsError}
            />
            {!pwIsError === false ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>비밀번호를 입력해주세요</FormErrorMessage>
            )}
          </FormLabel>
          <StyledLink to="/">
            <Button colorScheme="blue" onClick={() => handleButton()}>
              로그인
            </Button>
          </StyledLink>
          <Stack spacing={5} direction={'row'} margin={'auto'}>
            <Checkbox defaultChecked>로그인 유지</Checkbox>
            <Checkbox defaultChecked>아이디 저장</Checkbox>
          </Stack>
        </FormControl>
      </Container>
    </div>
  );
};

export default Login;
