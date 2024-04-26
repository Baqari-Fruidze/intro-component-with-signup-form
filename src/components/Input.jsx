import React from "react";
import styled from "styled-components";
import { Inputs } from "../styles/Inputs";
import { Btn } from "../styles/Btn";

export default function Input() {
  return (
    <Parent>
      <SpansDiv>
        <DaySpan>Try it free 7 days</DaySpan>
        <MoneySpan> then $20/mo. thereafter</MoneySpan>
      </SpansDiv>
      <FormsDiv>
        <Form>
          <Inputs type="firstName" placeholder="First Name" />
          <Inputs type="lastName" placeholder="Last Name" />
          <Inputs type="email" placeholder="Email Address" />
          <Inputs type="password" placeholder="Password" />
          <Btn type="submit">CLAIM YOUR FREE TRIAL</Btn>
          <Ftr>
            <FtrSpn>By clicking the button, you are agreeing to our</FtrSpn>
            <FtrSpann>Terms and Services</FtrSpann>
          </Ftr>
        </Form>
      </FormsDiv>
    </Parent>
  );
}
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
