"use strict";
const React = require("react");
const puppeteer = require("puppeteer");
const ReactDOMServer = require("react-dom/server");
const PATH = require("path");
const FS = require("fs");
const { render, Color } = require("ink");
const { screenshotDOMElement } = require("./helpers");
const [path = "./README.jsx"] = process.argv.slice(2);

let dotsInterval;
const ASSETS_DIR = "./readme_assets";

if (!FS.existsSync(ASSETS_DIR)) {
  FS.mkdirSync(ASSETS_DIR);
}

const generateMD = (html, replacers) => {
  let md = html;
  return Promise.all(
    replacers.map(replacer => {
      md = md.replace(replacer.replace, replacer.with);
      return Promise.resolve(md);
    }),
  );
};

const parseHTML = html =>
  new Promise(async (resolve, reject) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    const elements = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          "*:not(html):not(head):not(body):not(style):not(script):not(img)",
        ),
      ).map((el, i) => ({
        html: el.outerHTML,
        filename: `${el.tagName}_${i}`,
      }));
    });
    const screenshots = elements.map(
      element =>
        new Promise(async function(resolve, reject) {
          await page.setContent(element.html, { waitUntil: "load" });
          await screenshotDOMElement(
            page,
            "body > *",
            element.filename,
            ASSETS_DIR,
          );
          resolve({
            replace: element.html,
            with: `<img src="${ASSETS_DIR}/${element.filename}.png" />`,
          });
        }),
    );
    const results = await Promise.all(screenshots);
    resolve(results);
  });
const Parser = () => {
  const [parsed, setParsed] = React.useState(false);
  const [dots, setDots] = React.useState(".");
  React.useEffect(() => {
    const readme = require(PATH.resolve(path));
    const html = ReactDOMServer.renderToString(readme).replace(
      /<!-- -->/g,
      "\n\n",
    );
    parseHTML(html).then(replacers =>
      generateMD(html, replacers).then(md => {
        const finalresult = md[replacers.length - 1];
        FS.writeFile(PATH.resolve("./README.md"), finalresult, err => {
          if (err) throw err;
          setParsed(true);
          clearInterval(dotsInterval);
          process.exit();
        });
      }),
    );
  }, []);
  React.useEffect(() => {
    dotsInterval = setInterval(() => {
      setDots(dots.split("").length < 3 ? `${dots}.` : ".");
    }, 500);
    return () => {
      clearInterval(dotsInterval);
    };
  }, [dots]);

  return parsed ? (
    <Color green> File parsed successfully.</Color>
  ) : (
    <Color yellow> Parsing{dots}</Color>
  );
};

render(<Parser />);
