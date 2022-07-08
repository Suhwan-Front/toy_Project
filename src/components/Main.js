import {Button, Stack} from '@chakra-ui/react';
import {EmailIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Main() {
  useEffect(() => {
    console.log(localStorage.getItem('loginItem'));
  }, []);
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Stack direction="row" spacing={4}>
        {localStorage.getItem('loginItem') === 'false' ? (
          <Link to="/" className="main_login_btn" onClick={logOut}>
            <Button colorScheme="teal" variant="solid">
              로그아웃
            </Button>
          </Link>
        ) : (
          <>
            <Link to="/Login" className="main_login_btn">
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
              >
                로그인
              </Button>
            </Link>
            <Link to="Signup" className="main_signup_btn">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                회원가입
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </>
  );
}

export default Main;
