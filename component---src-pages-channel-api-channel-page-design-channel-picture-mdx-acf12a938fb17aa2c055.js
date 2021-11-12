(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{MRwv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={},c={_frontmatter:b},i=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,l({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Set channel picture"),Object(a.b)("p",null,"Upload an image file and set as the channel picture."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"POST https://api.video.ibm.com/channels/{channel_id}/design/picture.json\n")),Object(a.b)("p",null,"The parameters for the POST request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"picture")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"file"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"The channel picture. The image must be square and less than 1MB")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status “204 No Content” is returned."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Image format or size is wrong")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h3",null,"Remove channel picture"),Object(a.b)("p",null,"Delete the custom channel picture."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"DELETE https://api.video.ibm.com/channels/{channel_id}/design/picture.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"This request has no parameters."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Channel not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-channel-page-design-channel-picture-mdx-acf12a938fb17aa2c055.js.map