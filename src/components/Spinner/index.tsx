import * as React from "react";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  display: flex;
  justify-content: center;

  .spinner {
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-top: 0.3em solid blue;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: React.FC = () => (
  <SpinnerStyled>
    <div className="spinner"></div>
  </SpinnerStyled>
);
export default Spinner;
