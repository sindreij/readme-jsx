<img src="./readme_assets/H1_0.png" />
<img src="./readme_assets/H1_1.png" />


![LICENSE](https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=e91e63&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)

![VERSION](https://img.shields.io/static/v1?label=VERSION&message=0.3.0&color=e91e63&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)





<img src="./readme_assets/H1_2.png" />


> README-JSX is a package that lets you write your README documentations in jsx, opening a multitude of new possibilities and oppurtinities to get creative. Not only that, but it also provides you with all the necessary components for writing traditional markdown without having to struggle with spacing and formatting... 

> NOTICE: This file was generated with this library, you can checkout the sourecode by viewing the README.jsx file


<img src="./readme_assets/H1_3.png" />


`npm i --save readme-jsx`




```jsx
// ./README.jsx
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
)
```




```jsx
// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)
```




`node ./scripts/readme-gen.js`




![LICENSE](https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=blue&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)


<img src="./readme_assets/H1_4.png" />
<img src="./readme_assets/H2_5.png" />


| Component | Props | Description | Example | Preview |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| H1 |  | A basic markdown header | `<H1>A header</H1>` | # A header | 
| H2 |  | A basic markdown header | `<H2>A header</H2>` | ## A header | 
| H3 |  | A basic markdown header | `<H3>A header</H3>` | ### A header | 
| H4 |  | A basic markdown header | `<H4>A header</H4>` | #### A header | 
| H5 |  | A basic markdown header | `<H5>A header</H5>` | ##### A header | 
| H6 |  | A basic markdown header | `<H6>A header</H6>` | ##### A header | 
| ITALIC |  | Turns text italic | `<H6>A header</H6>` | ##### A header | 
| BOLD |  | Turns text bold | `<H6>A header</H6>` | ##### A header | 
| SCRATCH |  | Scratches the text | `<H6>A header</H6>` | ##### A header |



<img src="./readme_assets/H2_6.png" />


| Function | Arguments | Description | Example |
| ------------- | ------------- | ------------- | ------------- |
|  |



<img src="./readme_assets/H2_7.png" />


| Property | Description | Example |
| ------------- | ------------- | ------------- |
|  |



