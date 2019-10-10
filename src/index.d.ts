import React from "react";

declare module "readme-jsx" {
  export const generateMD: (
    path: string,
    options: {
      linebreak: number;
      assetsDir: string;
      packagejson: string;
    }
  ) => Promise<void>;
  export const importJSX: (path: string) => React.FunctionComponent;
  export const metadata: {
    name: "{{{name}}}";
    description: "{{{description}}}";
    version: "{{{version}}}";
    keywords: "{{{keywords}}}";
    author: "{{{author}}}";
    license: "{{{license}}}";
    dependencies: "{{{dependencies}}}";
    homepage: "{{{homepage}}}";
    scripts: "{{{scripts}}}";
  };
  export const H1: React.FunctionComponent<{
    children: string;
  }>;
  export const H2: React.FunctionComponent<{
    children: string;
  }>;
  export const H3: React.FunctionComponent<{
    children: string;
  }>;
  export const H4: React.FunctionComponent<{
    children: string;
  }>;
  export const H5: React.FunctionComponent<{
    children: string;
  }>;
  export const H6: React.FunctionComponent<{
    children: string;
  }>;
  export const ITALIC: React.FunctionComponent<{
    children: string;
  }>;
  export const BOLD: React.FunctionComponent<{
    children: string;
  }>;
  export const SCRATCH: React.FunctionComponent<{
    children: string;
  }>;
  export const BR: React.FunctionComponent<{
    children: string;
  }>;
  export const HR: React.FunctionComponent<{
    children: string;
  }>;
  export const QUOTE: React.FunctionComponent<{
    children: string;
  }>;
  export const OL: React.FunctionComponent<{
    list: { title: string; content: string[] }[];
  }>;
  export const UL: React.FunctionComponent<{
    list: { title: string; content: string[] }[];
  }>;
  export const CODE: React.FunctionComponent<{
    children: string;
    inline: boolean;
    lang:
      | "actionscript3"
      | "apache"
      | "applescript"
      | "asp"
      | "brainfuck"
      | "c"
      | "cfm"
      | "clojure"
      | "cmake"
      | "coffee-script"
      | "coffeescript"
      | "coffee"
      | "cpp-C++"
      | "cs"
      | "csharp"
      | "css"
      | "csv"
      | "bash"
      | "diff"
      | "elixir"
      | "erb-HTML+EmbeddedRuby"
      | "go"
      | "haml"
      | "http"
      | "java"
      | "javascript"
      | "json"
      | "jsx"
      | "less"
      | "lolcode"
      | "make-Makefile"
      | "markdown"
      | "matlab"
      | "nginx"
      | "objectivec"
      | "pascal"
      | "PHP"
      | "Perl"
      | "python"
      | "profile-pythonprofileroutput"
      | "rust"
      | "salt"
      | "saltstate-Salt"
      | "shell"
      | "sh"
      | "zsh"
      | "bash-Shellscripting"
      | "sql"
      | "scss"
      | "sql"
      | "svg"
      | "swift"
      | "rb"
      | "jruby"
      | "ruby-Ruby"
      | "smalltalk"
      | "vim"
      | "viml-VimScript"
      | "volt"
      | "vhdl"
      | "vue"
      | "xml-XMLandalsousedforHTMLwithinlineCSSandJavascript"
      | "yaml";
  }>;
  export const A: React.FunctionComponent<{
    children: string;
    href: string;
  }>;
  export const TASKS: React.FunctionComponent<{
    list: { title: string; done: boolean }[];
  }>;
  export const COLLAPSIBLE: React.FunctionComponent<{
    title: string;
    children: any;
  }>;
  export const TABLE: React.FunctionComponent<{
    columns: string[];
    rows: string[][];
  }>;
  export const IMG: React.FunctionComponent<{
    src: string;
    href: string;
    alt: string;
  }>;
  export const BADGE: React.FunctionComponent<{
    label: string;
    message: string;
    link: string;
    color: string;
    style: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social";
    // https://simpleicons.org/ or any base64 image
    logo: string;
    logoColor: string;
    labelColor: string;
  }>;
}
