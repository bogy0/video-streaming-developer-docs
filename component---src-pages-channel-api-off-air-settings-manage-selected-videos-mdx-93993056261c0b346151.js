(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"20nm":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return i}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={},c={_frontmatter:b},o=l.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Get Selected Videos"),Object(a.b)("p",null,"Returns the currently select videos on a channel."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/settings/off-air/selected.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"videos")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"int[]"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Selected video ids")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "videos": [\n    54321,\n    64321\n  ]\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Set Selected Videos"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channelId}/settings/off-air/selected.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"videos")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"int[]"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Video ids (only published videos allowed)")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"PUT /channels/1234/settings/off-air/selected.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nvideos[]=123979122&videos[]=124044209&videos[]=128385174&videos[]=12344321\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Invalid ",Object(a.b)("inlineCode",{parentName:"td"},"videos")," (eg. one of the videos is not on the channel or it is not published)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-off-air-settings-manage-selected-videos-mdx-93993056261c0b346151.js.map