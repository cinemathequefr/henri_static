import{d as s}from"./dayjs.min.46cec71b.js";import{l as t}from"./client.3a62ac3a.js";function a(a){return t(a).map((a=>t(a).assign({status:(1===a.status||2===a.status)&&a.dateUnpublished&&s().isAfter(a.dateUnpublished,"day")?3:a.status}).value())).filter((s=>1===s.status||2===s.status)).value()}export{a as u};
