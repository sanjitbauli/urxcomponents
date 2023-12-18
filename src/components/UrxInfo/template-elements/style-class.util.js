import isEmpty from "lodash/isEmpty";
import pick from "lodash/pick";
import value from "lodash/values";

export function getStyleClasses(attributes, classNames = "") {
  const classes = pick(attributes, [
    "classNames",
    "color",
    "typeClass",
    "textAlign",
    "fontSize",
  ]);
  if (classes && !isEmpty(value(classes)))
    return classNames +' '+ value(classes).join(" ");
  else return classNames;
}
