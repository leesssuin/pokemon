module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint에 어떠한 parser를 사용할지 알려주는 옵션
  // eslint가 typescript 문법을 이해할 수 있게 해준다.
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    courceType: "module",
  },
  // typescript-eslint에서 제공하는 규칙들을 사용할 수 있게 해준다.
  plugins: ["react", "@typescript-eslint", "prettier"],
  // 어떠한 규칙들과 설정으로 eslint를 사용할지 명시한다.
  // 아래와 같이 작성하면 default 값으로 적용이 된다.
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    // 세미콜론이 없으면 에러로 취급한다.
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-var": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // 기존 프로젝트에서는 "warn"으로 취급되지만, "error"로 설정하면 에러로 취급한다.
    "@typescript-eslint/no-unused-vars": "error",
  },
  settings: {
    "import/parsers": {
      "@typscript-eslint/parser": [".ts", ".tsx", ".js"],
    },
    "import/resolve": {
      typescript: ".tsconfig.json",
    },
  },
};
