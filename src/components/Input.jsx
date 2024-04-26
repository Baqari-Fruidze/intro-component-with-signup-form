import React from "react";
import styled from "styled-components";
import { Inputs } from "../styles/Inputs";
import { Btn } from "../styles/Btn";
import icon from "/images/icon-error.svg";
import { useState } from "react";

export default function Input({
  firstName,
  lastName,
  email,
  password,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
}) {
  const HandleClick = (event) => {
    event.preventDefault();
  };
  const FirstChecker = (event) => {
    setFirstName(event.target.value);
  };
  const lastChecker = (event) => {
    setLastName(event.target.value);
  };
  const emailChecker = (event) => {
    setEmail(event.target.value);
  };
  const passwordChecker = (event) => {
    setPassword(event.target.value);
  };
  const [firstNameEror, setFirstNameEror] = useState();
  const [lastNameEror, setLastNameEror] = useState();
  const [emailEror, setEmailEror] = useState();
  const [passwordEror, setPasswordEror] = useState();
  if (firstName === "") {
    setFirstNameEror(true);
  }
  if (lastName === "") {
    setLastNameEror(true);
  }
  if (email === "") {
    setEmailEror(true);
  }
  if (password === "") {
    setPasswordEror(true);
  }
  const BigBoss = () => {};

  return (
    <Parent>
      <SpansDiv>
        <DaySpan>Try it free 7 days</DaySpan>
        <MoneySpan> then $20/mo. thereafter</MoneySpan>
      </SpansDiv>
      <FormsDiv>
        <Form onSubmit={HandleClick}>
          <Inputs
            onChange={FirstChecker}
            value={firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
            eror={firstNameEror}
          />
          {firstNameEror ? (
            <ErrorMessage>First Name cannot be empty</ErrorMessage>
          ) : (
            ""
          )}
          <Inputs
            onChange={lastChecker}
            value={lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
            eror={lastNameEror}
          />
          {lastNameEror ? (
            <ErrorMessage>Last Name cannot be empty</ErrorMessage>
          ) : (
            ""
          )}
          <Inputs
            onChange={emailChecker}
            value={email}
            type="text"
            name="email"
            placeholder="Email Address"
            eror={emailEror}
          />
          {emailEror ? (
            <ErrorMessage>Looks like this is not an email</ErrorMessage>
          ) : (
            ""
          )}
          <Inputs
            onChange={passwordChecker}
            value={password}
            type="text"
            name="password"
            placeholder="Password"
            eror={passwordEror}
          />
          {passwordEror ? (
            <ErrorMessage>Password cannot be empty</ErrorMessage>
          ) : (
            ""
          )}
          <Btn type="submit" onSubmit={BigBoss}>
            CLAIM YOUR FREE TRIAL
          </Btn>
          <Ftr>
            <FtrSpn>By clicking the button, you are agreeing to our</FtrSpn>
            <FtrSpann>Terms and Services</FtrSpann>
          </Ftr>
        </Form>
      </FormsDiv>
    </Parent>
  );
}
const ErrorMessage = styled.span`
  margin-left: auto;
  color: #ff7979;
  text-align: right;
  font-family: Poppins;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FormsDiv = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  padding: 2.4rem;
`;
const SpansDiv = styled.div`
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  padding: 1.8rem 6.6rem;
  text-align: center;
`;
const DaySpan = styled.span`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.268px;
`;
const MoneySpan = styled.span`
  color: #fff;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.268px;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Ftr = styled.footer`
  padding: 0 3.9rem 2.4rem;
`;
const FtrSpn = styled.span`
  color: #bab7d4;
  text-align: center;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 190.909% */
`;
const FtrSpann = styled.span`
  color: #ff7979;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
`;
