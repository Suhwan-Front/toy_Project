import { Button, Stack } from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          <Link to="/Login" className="main_login_btn">
            로그인
          </Link>
        </Button>
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
