const React = require("react");
const {
  metadata,
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
  HR,
  A,
  CODE,
  QUOTE,
  COLLAPSIBLE,
  TASKS,
  BADGE,
  TABLE
} = require("./lib");


const Button = ({ children }) => (
  <button style={{ color: "red" }}>{children}</button>
);

module.exports = (
  <React.Fragment>

  <BADGE label="LICENSE" message="MIT" style="for-the-badge" color="green" />
  <BADGE label="LICENSE" message="MIT" style="flat" color="green" />
  <BADGE label="LICENSE" message="MIT" style="flat-square" color="green" />
  <BADGE label="LICENSE" message="MIT" style="social" color="green" />


    <H1>{metadata.name}</H1>
    <H1>{metadata.description}</H1>
    <H1>{metadata.author}</H1>
    <H1>{metadata.keywords}</H1>
    <H1>{metadata.license}</H1>
    <H2>JSX to markdown, just like that... </H2>
    <H3>1.0.0 </H3>
    <H4>1.0.0 </H4>
    <H5>1.0.0 </H5>
    <H6>1.0.0 </H6>


    <A href="https://github.com/solidsnail/">Click me</A>

    <CODE>Hello world</CODE>

    <CODE inline={false} lang="jsx">
      {`<Button>Coool</Button>`}
    </CODE>


    <HR />

    <TABLE 
    columns={["First Header", "Second Header"]} 
    rows={[
      ["Content Cell","Content Cell"],
      ["Content Cell","Content Cell"],
    ]}
    />


<HR />

    <QUOTE>
      A quote here
    </QUOTE>

    <COLLAPSIBLE title="Hello">Content here</COLLAPSIBLE>

    <TASKS list={[
      {title: "Do this", done: true},
      {title: "Do that", done: false},
    ]} />

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


      <BR/>
      <BR/>
    <Button>Hello world</Button>
    <Button>Hello world 2</Button>
    <Button>Hello world 3</Button>


  </React.Fragment>
);
