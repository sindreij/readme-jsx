
module.exports = {
  H1: function({ children }) {
    return `# ${children}`;
  },
  H2: function({ children }) {
    return `## ${children}`;
  },
  H3: function({ children }) {
    return `### ${children}`;
  },
  H4: function({ children }) {
    return `#### ${children}`;
  },
  H5: function({ children }) {
    return `##### ${children}`;
  },
  H6: function({ children }) {
    return `##### ${children}`;
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
        `\n${i + 1}. ${item.title}${item.content && item.content.length ? item.content.map(c => `\n   - ${c}`).join("") : ""}`,
    );
  },
  UL: function({ list }) {
    return list.map(
      item => `\n* ${item.title}${item.content && item.content.length ? item.content.map(c => `\n   - ${c}`).join("") : ""}`,
    );
  },
  BR: function( ) {
    return "\n"
  },
};
