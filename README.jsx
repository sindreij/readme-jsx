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
  TABLE,
  importJSX
} = require("./src");


const Button = ({ children }) => (
  <button>{children}</button>
);

const Header = ({ children }) => (
  <h1 className="header">{children}</h1>
);

const Logo = ({  }) => (
  <h1 id="logo">
    <span>README</span>{"  -  "}<span>JSX</span>
    </h1>
);

const Description = ({  }) => (
  <h1 id="description">
    <span>{metadata.description}</span>
    </h1>
);

module.exports = (
  <React.Fragment>
    <style>
      {`
      @import url('https://fonts.googleapis.com/css?family=Raleway:100&display=swap');
      *{
        font-family: "Raleway";
      }
      #logo {
        width: 880px;
        height: 180px;
        margin: 0px;
        font-size: 8em;
        display: flex;
        font-weight:100;
        justify-content: center;
        align-items: center;
        padding: 0px;
        color: black;
        // text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black, 0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black, 0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black, -0.03em 0 0 black;
      }
      #description{
        padding: 0px 0px 40px 0px;
        width: 880px;
        height: 70px;
        margin: 0px;
        display: flex;
        font-weight:800;
        justify-content: center;
        align-items: center;
        color: #e91e63;
        font-size: 1.6em;
      }
      .header {
        width: 880px;
        height: 50px;
        margin: 0px;
        font-size: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        color: white;
        background: black;
        text-transform: uppercase;
        text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black, 0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black, 0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black, -0.03em 0 0 black;
      }
      

      button{
        background: yellow;
      }
      `}
    </style>
    <Logo /><BR />
  <Description /><BR />


  <BADGE label="LICENSE" message={metadata.license} style="for-the-badge" color="e91e63" /><BADGE label="VERSION" message={metadata.version} style="for-the-badge" color="e91e63" />

  <BR /><BR/>
  <Header>About</Header><BR/>
  <QUOTE>README-JSX is a package that lets you write your README documentations in jsx, opening a multitude of new possibilities and oppurtinities to get creative.
   Not only that, but it also provides you with all the necessary components for writing traditional markdown without having to struggle with spacing and formatting... </QUOTE>
   <QUOTE>NOTICE: This file was generated with this library, you can checkout the sourecode by viewing the README.jsx file</QUOTE><BR/>
   <Header>Usage</Header><BR/>
   <CODE lang="shell">{`npm i --save readme-jsx`}</CODE><BR/>
   <CODE inline={false} lang="jsx">{`// ./README.jsx
const React = require("react");
const { BADGE, metadata} = require("readme-jsx");

module.exports = (
  <React.Fragment>
    <BADGE 
    label="LICENSE" 
    message={metadata.license} 
    style="for-the-badge" 
    color="blue" />
  </React.Fragment>
)`}</CODE><BR/>
   <CODE inline={false} lang="jsx">{`// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)`}</CODE><BR/>
   <CODE  lang="shell">{`node ./scripts/readme-gen.js`}</CODE><BR/>
<BADGE 
    label="LICENSE" 
    message={metadata.license} 
    style="for-the-badge" 
    color="blue" /><BR/>
       <Header>API</Header><BR/>
{/* 
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
    <Button>Hello world 3</Button> */}


  </React.Fragment>
);
