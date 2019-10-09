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
};
