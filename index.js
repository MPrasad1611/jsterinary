let isHtml = false;
let isCss = false;
let isboot = false;
let isJs = false;
let isReact = false;
let isNode = true;
isHtml &&
isCss &&
isboot &&
isJs == false &&
isReact == false &&
isNode == false
  ? console.log("Then Become UI/UX Developer")
  : isHtml && isCss && isboot && isJs && isReact && isNode == false
  ? console.log("Then Become Frontend Developer")
  : isHtml && isCss && isboot && isJs && isReact == false && isNode
  ? console.log("Then Become Backend Developer")
  : isHtml && isCss && isboot && isJs && isReact && isNode
  ? console.log("Then Become FullStack Developer")
  : console.log("GO and Join 10000Coders");
