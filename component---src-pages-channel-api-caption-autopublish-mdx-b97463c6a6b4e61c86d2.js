(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{tAtT:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},c={_frontmatter:l},o=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,b({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Check caption autopublish is enabled"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/settings/caption-autopublish.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"enabled")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Autopublish is enabled")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n    "enabled": true,\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Turn on/off caption autopublish"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channelId}/settings/caption-autopublish.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"enable")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"true/false")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"POST /channels/1234/settings/caption-autopublish.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nenable=true\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-caption-autopublish-mdx-b97463c6a6b4e61c86d2.js.map