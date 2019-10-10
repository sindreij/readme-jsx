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
  <button>
    <style>{`
    button{
      padding: 15;
      color: white;
      font-weight: bold;
      border: none;
      background: coral;
    }
  `}</style>
  {children}</button>
);

const Logo = ({  }) => (
  <div>
    <style>{`
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-weight: 900;
    font-family: monospace;
    width: 100%;
    text-align: center;
    font-size: 16vw;
    background: linear-gradient(-45deg, #4bc0c8 25%, #feac5e 25%, #feac5e 50%, #4bc0c8 50%, #4bc0c8 75%, #feac5e 75%, #feac5e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 20px 20px;
    background-position: 0 0;
    -webkit-animation: stripes 1s linear infinite;
            animation: stripes 1s linear infinite;
  }
  
  @-webkit-keyframes stripes {
    100% {
      background-position: 20px 0, 20px 0, 20px 0;
    }
  }
  
  @keyframes stripes {
    100% {
      background-position: 20px 0, 20px 0, 20px 0;
    }
  }
  
  `}</style>
    <h1 data-heading="Slide">README-JSX</h1>
  </div>
);

module.exports = (
  <React.Fragment>
    
    <Logo />
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
