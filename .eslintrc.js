module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "react-app", // cra 기본설정 in package.json
    "react-app/jest", // cra 기본설정 in package.json
    "eslint:recommended", // eslint의 체크표시 적용 // https://eslint.org/docs/rules/ => common problems, which have a check mark.
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["prettier", "react", "@typescript-eslint", "react-hooks"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "testing-library/no-node-access": "off",
    "linebreak-style": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-alert": "off",
    "no-return-assign": ["error", "except-parens"],
    "consistent-return": "off", // useEffect에서 return 적용을 위해 "treatUndefinedAsUnspecified" 옵션을 true로 지정합니다.
    "import/no-cycle": "off", // This rule is comparatively computationally expensive. If you are pressed for lint time, or don't think you have an issue with dependency cycles, you may not want this rule enabled.
    "import/prefer-default-export": "off",
    "import/extensions": "off", // This disables the rule, since airbnb's config enables it.
    "import/no-unresolved": "off",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true, // allows unary operators ++ and -- in the afterthought (final expression) of a for loop.
      },
    ],
    "no-param-reassign": ["error", { props: false }], // https://eslint.org/docs/rules/no-param-reassign
    strict: ["error", "global"],
    curly: "warn",
    indent: [
      "off",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: true,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
        offsetTernaryExpressions: true,
      },
    ], // 들여쓰기 2, swith {case} 문에서 들여쓰기 사용, 2항 연산자 사용할때 스타일을 prettier와 맞추기위해 offsetTernaryExpressions 사용
    "react/jsx-indent": [
      "error",
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ], // JSX 들여쓰기 확인
    semi: "error", // 세미콜론(;)이 필요한 위치에 없을 시 에러를 발생
    camelcase: "off",
    "no-extra-boolean-cast": "off", // !!로 객체 및 변수를 boolean형으로 바꾸기 경고 끄기
    "no-use-before-define": "off",
    "no-shadow": ["error", { hoist: "never" }],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "no-underscore-dangle": "off",
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    "react/jsx-props-no-spreading": [
      "error",
      {
        exceptions: ["StyledButton", "Input"], // StyledButton은 조건을 반전시킨다. ( default = enforce이므로 ignore로 반전됨 )
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react/destructuring-assignment": [
      "error",
      "always",
      { ignoreClassFields: true },
    ], // class형 LifeSyCle에서 state assignment 사용가능
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "@typescript-eslint/explicit-function-return-type": "off", // .tsx에서 함수 리턴 타입 미작성 오류 끄기
    "@typescript-eslint/explicit-module-boundary-types": "off", // .ts에서 함수 리턴 타입 미작성 오류 끄기
    "@typescript-eslint/no-explicit-any": "off", // any타입 허용
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: { pragma: "React", version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
    },
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
