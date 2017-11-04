// @flow
export const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
export const FLATTENABLE_KEYS = ["body", "expressions"];
export const FOR_INIT_KEYS = ["left", "init"];
export const COMMENT_KEYS = [
  "leadingComments",
  "trailingComments",
  "innerComments",
];

export const LOGICAL_OPERATORS = ["||", "&&", "??"];
export const UPDATE_OPERATORS = ["++", "--"];

export const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
export const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
export const COMPARISON_BINARY_OPERATORS = [
  ...EQUALITY_BINARY_OPERATORS,
  "in",
  "instanceof",
];
export const BOOLEAN_BINARY_OPERATORS = [
  ...COMPARISON_BINARY_OPERATORS,
  ...BOOLEAN_NUMBER_BINARY_OPERATORS,
];
export const NUMBER_BINARY_OPERATORS = [
  "-",
  "/",
  "%",
  "*",
  "**",
  "&",
  "|",
  ">>",
  ">>>",
  "<<",
  "^",
];
export const BINARY_OPERATORS = [
  "+",
  ...NUMBER_BINARY_OPERATORS,
  ...BOOLEAN_BINARY_OPERATORS,
];

export const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
export const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
export const STRING_UNARY_OPERATORS = ["typeof"];
export const UNARY_OPERATORS = [
  "void",
  "throw",
  ...BOOLEAN_UNARY_OPERATORS,
  ...NUMBER_UNARY_OPERATORS,
  ...STRING_UNARY_OPERATORS,
];

export const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"],
};

export const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
export const NOT_LOCAL_BINDING = Symbol.for(
  "should not be considered a local binding",
);

export const RESERVED_WORDS_ES3_ONLY: Set<string> = new Set([
  "abstract",
  "boolean",
  "byte",
  "char",
  "double",
  "enum",
  "final",
  "float",
  "goto",
  "implements",
  "int",
  "interface",
  "long",
  "native",
  "package",
  "private",
  "protected",
  "public",
  "short",
  "static",
  "synchronized",
  "throws",
  "transient",
  "volatile",
]);
