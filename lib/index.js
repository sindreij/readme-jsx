const requireJSX = require("import-jsx");
module.exports = {
  requireJSX,
  H1: function({ children }) {
    return `# ${children}\n`;
  },
  H2: function({ children }) {
    return `## ${children}\n`;
  },
  H3: function({ children }) {
    return `### ${children}\n`;
  },
  H4: function({ children }) {
    return `#### ${children}\n`;
  },
  H5: function({ children }) {
    return `##### ${children}\n`;
  },
  H6: function({ children }) {
    return `##### ${children}\n`;
  },
  ITALIC: function({ children }) {
    return `_${children}_`;
  },
  BOLD: function({ children }) {
    return `**${children}**`;
  },
  SCRATCH: function({ children }) {
    return `~~${children}~~`;
  },
  OL: function({ list }) {
    return list.map(
      (item, i) => `
    ${i + 1}. ${item.title}
    ${item.content ? `⋅⋅⋅ ${item.content}` : ""}
    `,
    );
  },
  UL: function({ list }) {
    return list.map(
      item => `
    * ${item.title}
    ${item.content ? `⋅⋅* ${item.content}` : ""}
    `,
    );
  },
};
