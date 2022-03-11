const directionMap = {
  top: "t",
  right: "r",
  bottom: "b",
  left: "l",
};

function mapSpacingStyles(values, prefix) {
  return Object.entries(values).map(
    ([dir, val]) => `${prefix}${directionMap[dir]}-${val}`
  );
}

const styleMap = {
  padding: (values) => mapSpacingStyles(values, "p"),
  margin: (values) => mapSpacingStyles(values, "m"),
};

export function mapStyles(styles) {
  return Object.entries(styles)
    .flatMap(([style, value]) => styleMap[style](value))
    .join(" ");
}
