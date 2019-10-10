"use strict";
const puppeteer = require("puppeteer");
const importJSX = require("import-jsx");
const he = require("he");
const ReactDOMServer = require("react-dom/server");
const PATH = require("path");
const FS = require("fs");

const screenshotDOMElement = async (
  page,
  selector,
  name,
  folder,
  padding = 0
) => {
  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    const { x, y, width, height } = element.getBoundingClientRect();
    return { left: x, top: y, width, height, id: element.id };
  }, selector);
  return await page.screenshot({
    path: `${folder}/${name}.png`,
    omitBackground: true,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  });
};
const createDir = dir =>
  new Promise((resolve, reject) => {
    FS.exists(dir, () => {
      FS.mkdir(dir, resolve);
    });
  });

const getHTML = (readme, linebreak) =>
  new Promise((resolve, reject) => {
    const html = ReactDOMServer.renderToString(readme).replace(
      /<!-- -->/g,
      "\n".repeat(linebreak)
    );
    resolve(he.decode(html));
  });

const evaluateHTML = page =>
  new Promise(async (resolve, reject) => {
    const snapshots = await page.evaluate(() => {
      const styles = Array.from(document.querySelectorAll("style"))
        .map(style => style.innerHTML)
        .join("\n\n");
      const elements = Array.from(
        document.querySelectorAll("[data-reactroot]:not(style)")
      );
      return elements.map((el, i) => {
        return {
          globalstyle: `<style>${styles}</style>`,
          html: el.outerHTML,
          filename: `${el.tagName}_${i}`
        };
      });
    });
    resolve(snapshots);
  });

const takeSnapshots = (browser, snapshots, dir) =>
  new Promise(async (resolve, reject) => {
    const replacers = snapshots.map(async snap => {
      const page = await browser.newPage();
      await page.setContent(
        `
      <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        ${snap.globalstyle}
    </head>
    <body>
        ${snap.html}
    </body>
    </html>
      `,
        {
          waitUntil: "networkidle0"
        }
      );
      await screenshotDOMElement(page, "body > *", snap.filename, dir);
      return Promise.resolve({
        replace: snap.html,
        with: `<img src="${dir}/${snap.filename}.png" />`
      });
    });
    resolve(Promise.all(replacers));
  });
const parseMetadata = (packagejson, markdown) => {
  const result = markdown.match(/{{{(.*?)}}}/g)
    ? markdown.match(/{{{(.*?)}}}/g).reduce((md, data) => {
        const property = data.replace("{{{", "").replace("}}}", "");
        return (md = md.replace(
          new RegExp(data, "g"),
          typeof packagejson[property] === "string"
            ? packagejson[property]
            : JSON.stringify(packagejson[property])
        ));
      }, markdown)
    : markdown;
  return Promise.resolve(result);
};

const stripStyles = markdown =>
  Promise.resolve(markdown.replace(/<style.*?<\/style>/gims, ""));

const replaceTags = (replacers, packagejson, html) =>
  new Promise(async (resolve, reject) => {
    let markdown = replacers.reduce((html, replacer) => {
      return html.replace(new RegExp(replacer.replace, "g"), replacer.with);
    }, html);
    markdown = await parseMetadata(packagejson, markdown);
    markdown = await stripStyles(markdown);
    resolve(markdown);
  });

const writeFile = (markdown, path) =>
  new Promise((resolve, reject) => {
    FS.writeFile(
      PATH.resolve(PATH.resolve(`${path.split(".jsx")[0]}.md`)),
      markdown,
      err => {
        if (err) throw err;
        resolve();
      }
    );
  });

const generateMD = async (
  path = "./README.jsx",
  options = {
    linebreak: 2,
    assetsDir: "./readme_assets",
    packagejson: "./package.json"
  }
) => {
  await createDir(options.assetsDir);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const readme = importJSX(PATH.resolve(path));
  const packagejson = require(PATH.resolve(options.packagejson));
  const html = await getHTML(readme, options.linebreak);
  await page.setContent(html, { waitUntil: "load" });
  const snapshots = await evaluateHTML(page);
  const replacers = await takeSnapshots(browser, snapshots, options.assetsDir);
  const markdown = await replaceTags(replacers, packagejson, html);
  await writeFile(markdown, path);
  return Promise.resolve();
};

module.exports = generateMD;

// const generateMD = (html, replacers) => {
//   let md = html;
//   return Promise.all(    console.log(markdown);
//     replacers.map(replacer => {
//       md = md.replace(replacer.replace, replacer.with);
//       return Promise.resolve(md);
//     })
//   );
// };

// const parseHTML = html =>
//   new Promise(async (resolve, reject) => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(html, { waitUntil: "load" });
//     const elements = await page.evaluate(() => {
//       return Array.from(
//         document.querySelectorAll(
//           "*:not(html):not(head):not(body):not(style):not(script):not(img)"
//         )
//       ).map((el, i) => {
//         return {
//           html: el.outerHTML,
//           filename: `${el.tagName}_${i}`
//         };
//       });
//     });
//     const replacers = elements.map(
//       element =>
//         new Promise(async function(resolve, reject) {
//           const page = await browser.newPage();
//           await page.setContent(element.html, {
//             waitUntil: "networkidle0"
//           });
//           await screenshotDOMElement(
//             page,
//             "body > *",
//             element.filename,
//             ASSETS_DIR
//           );
//           resolve({
//             replace: element.html,
//             with: `<img src="${ASSETS_DIR}/${element.filename}.png" />`
//           });
//         })
//     );
//     const results = await Promise.all(replacers);
//     resolve(results);
//   });
// const Parser = (path = "./README.jsx") => {
//   const [parsed, setParsed] = React.useState(false);
//   const [dots, setDots] = React.useState(".");
//   React.useEffect(() => {
//     const readme = require(PATH.resolve(path));
//     const packagejson = require(PATH.resolve("./package.json"));
//     let html = ReactDOMServer.renderToString(readme).replace(
//       /<!-- -->/g,
//       "\n\n"
//     );
//     const parsepackage = html.match(/{{{(.*?)}}}/g).map(data => {
//       const property = data.replace("{{{", "").replace("}}}", "");
//       return Promise.resolve(
//         (html = html.replace(
//           new RegExp(data, "g"),
//           typeof packagejson[property] === "string"
//             ? packagejson[property]
//             : JSON.stringify(packagejson[property])
//         ))
//       );
//     });
//     Promise.all(parsepackage)
//       .then(res => res[parsepackage.length - 1])
//       .then(() => {
//         parseHTML(html).then(replacers =>
//           generateMD(html, replacers).then(md => {
//             const finalresult = he.decode(md[replacers.length - 1]);
//             FS.writeFile(PATH.resolve("./README.md"), finalresult, err => {
//               if (err) throw err;
//               setParsed(true);
//               clearInterval(dotsInterval);
//               process.exit();
//             });
//           })
//         );
//       });
//   }, []);
//   React.useEffect(() => {
//     dotsInterval = setInterval(() => {
//       setDots(dots.split("").length < 3 ? `${dots}.` : ".");
//     }, 500);
//     return () => {
//       clearInterval(dotsInterval);
//     };
//   }, [dots]);

//   return parsed ? (
//     <Color green> File parsed successfully.</Color>
//   ) : (
//     <Color yellow> Parsing{dots}</Color>
//   );
// };

// render(<Parser />);
