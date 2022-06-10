import {Button, Stack} from '@chakra-ui/react';
import {EmailIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Main() {
  const [loginSet, setLoginSet] = useState(false);
  useEffect(() => {
    setLoginSet(localStorage.getItem('loginItem'));
    console.log(loginSet);
  }, []);
  return (
    <>
      <Stack direction="row" spacing={4}>
        {localStorage.getItem('loginItem') === true ? (
          <Button colorScheme="teal" variant="solid">
            <Link to="/Login" className="main_login_btn">
              로그아웃
            </Link>
          </Button>
        ) : (
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            <Link to="/Login" className="main_login_btn">
              로그인
            </Link>
          </Button>
        )}
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          회원가입
        </Button>
      </Stack>
    </>
  );
}

export default Main;
