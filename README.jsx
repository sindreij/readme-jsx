const React = require("react");
const { H1, H2, H3, H4, H5, H6, requireJSX } = require("./lib");
const Button = requireJSX("./components/button.jsx");

module.exports = (
  <>
    <H1>JSX to MD</H1>
    <H2>JSX to markdown, just like that... </H2>
    <H3>1.0.0 </H3>
    <H4>1.0.0 </H4>
    <H5>1.0.0 </H5>
    <H6>1.0.0 </H6>
    <Button>Hello world</Button>
    <Button>Hello world 2</Button>
    <Button>Hello world 3</Button>
  </>
);
