import{d as s}from"./dayjs.min.df78d2e6.js";import{l as t}from"./client.e30b38f0.js";function a(a){return t(a).map((a=>t(a).assign({status:(1===a.status||2===a.status)&&a.dateUnpublished&&s().isAfter(a.dateUnpublished,"day")?3:a.status}).value())).filter((s=>1===s.status||2===s.status)).value()}export{a as u};