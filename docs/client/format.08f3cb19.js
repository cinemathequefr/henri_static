import{l as t}from"./client.eab20f2a.js";var e={artTitre:function(t,e){return t?"L'"===t?`${t}${e}`:`${t} ${e}`:e},titreArt:function(t,e){return t?`${e} (${t})`:e},beforeAfterStr:function(t,e,r){if(!r)return"";let n=t,f=e;return"function"!=typeof t&&(t=()=>n||""),"function"!=typeof e&&(e=()=>f||""),t(r)+r+e(r)},kebab:function(e){return t.kebabCase(e.replace(/'/gi," ").replace(/&nbsp;/gi," "))}};export{e as f};
