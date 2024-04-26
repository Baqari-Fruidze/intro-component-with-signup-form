import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <div>
      <Parag>Try it free 7 days then $20/mo. thereafter</Parag>
      <div>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button></button>
          <footer></footer>
        </form>
      </div>
    </div>
  );
}
const Parag = styled.p`
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
`;
