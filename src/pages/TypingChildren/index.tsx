import * as React from "react";
import "./style.scss";
/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

type BoxProps = { children: React.ReactNode };

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <section
      style={{ padding: "1em", border: "5px solid purple", margin: "20px" }}
    >
      {children}
    </section>
  );
};

const TypingChildren: React.FC = () => {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
};

export default TypingChildren;
