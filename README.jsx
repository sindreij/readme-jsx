const React = require("react");
const {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  UL,
  BOLD,
  ITALIC,
  OL,
  SCRATCH,
  requireJSX,
} = require("./lib");
const Button = requireJSX("./components/button.jsx");

module.exports = (
  <>
    <H1>JSX to MD</H1>
    <H2>JSX to markdown, just like that... </H2>
    <H3>1.0.0 </H3>
    <H4>1.0.0 </H4>
    <H5>1.0.0 </H5>
    <H6>1.0.0 </H6>
    <BOLD>1.0.0 </BOLD>
    <ITALIC>1.0.0 </ITALIC>
    <SCRATCH>1.0.0 </SCRATCH>

    <UL
      list={[
        {
          title: "First item",
          content: [
            "This is the first item content",
            "This is the first item content",
            "This is the first item content",
          ],
        },
        { title: "Second item", content: ["This is the second item content"] },
        { title: "Third item", content: ["This is the third item content"] },
      ]}
    />

    <Button>Hello world</Button>
    <Button>Hello world 2</Button>
    <Button>Hello world 3</Button>
  </>
);
