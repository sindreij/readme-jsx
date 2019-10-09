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
    return `*${children.trim()}*`;
  },
  BOLD: function({ children }) {
    return `**${children.trim()}**`;
  },
  SCRATCH: function({ children }) {
    return `~~${children.trim()}~~`;
  },
  OL: function({ list }) {
    return list.map(
      (item, i) =>
        `\n${i + 1}. ${item.title}${item.content && item.content.length ? item.content.map(c => `\n   - ${c}`).join("\n") : ""}`,
    );
  },
  UL: function({ list }) {
    return list.map(
      item => `\n* ${item.title}${item.content && item.content.length ? item.content.map(c => `\n   - ${c}`).join("\n") : ""}`,
    );
  },
};
