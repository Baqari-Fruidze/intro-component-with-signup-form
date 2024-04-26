import styled from "styled-components";
import icon from "/images/icon-error.svg";

export const Inputs = styled.input`
  background-image: url(${(props) => (props.eror === "" ? icon : "")});
  background-repeat: no-repeat !important;
  background-position: right 2rem top 1.5rem !important;
  border-radius: 5px;
  border: 1px solid #dedede;
  padding: 2rem 0.5rem;
  &::placeholder {
    color: #3d3b48;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.25px;
    opacity: 0.75;
    padding-left: 2rem;
  }
`;
