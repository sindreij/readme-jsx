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
  BR,
} = require("./lib");
const Button = require("./components/button.jsx");

module.exports = (
  <React.Fragment>
    <H1>JSX to MD</H1>
    <BR />
    <H2>JSX to markdown, just like that... </H2>
    <BR />
    <H3>1.0.0 </H3>
    <BR />
    <H4>1.0.0 </H4>
    <BR />
    <H5>1.0.0 </H5>
    <BR />
    <H6>1.0.0 </H6>
    <BR />
    <BOLD>1.0.0 </BOLD>
    <BR />
    <ITALIC>1.0.0 </ITALIC>
    <BR />
    <SCRATCH>1.0.0 </SCRATCH>
    <BR />

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
    <BR />
    <OL
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
    <BR />
    <BR />

    <Button>Hello world</Button>
    <Button>Hello world 2</Button>
    <Button>Hello world 3</Button>
  </React.Fragment>
);
