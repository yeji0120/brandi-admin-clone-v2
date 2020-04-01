import React from "react";
import styled from "styled-components";
import Input from "src/component/common/Input";

const Login = () => {
  return (
    <Container>
      <BgBox>
        <BgImage />
      </BgBox>
      <LoginBox>
        <InputBox>
          <Input width="300" height="34" placeholder="셀러 아이디" />
          <Input width="300" height="34" placeholder="셀러 비밀번호" />
          <Input width="300" height="34" placeholder="셀러 비밀번호" />
        </InputBox>
        <></>
      </LoginBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-color: #fafafa;
`;

const BgBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

const BgImage = styled.div`
  width: 130px;
  height: 52px;
  margin-bottom: 15px;
  background-image: url("http://sadmin.brandi.co.kr/include/img/logo_seller_admin_1.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const LoginBox = styled.div`
  width: 360px;
  margin: 0px auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
