(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ckFF:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("XbGe");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},c={_frontmatter:o},b=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Authentication"),Object(a.b)("p",null,"The API uses JWT token for authentication. The API accepts the token in the\n",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," header, in the following format:\n",Object(a.b)("inlineCode",{parentName:"p"},"Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...0RMHrHDcEfxjoYZgeFONFh7HgQ"),"\nThis header must be included with every request."),Object(a.b)("h2",null,"Obtaining the Access token"),Object(a.b)("p",null,"You can get JWT token from the OAuth2 token endpoint by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"token_type")," parameter to ",Object(a.b)("inlineCode",{parentName:"p"},"jwt"),". ",Object(a.b)("strong",{parentName:"p"},"This parameter must be set as HTTP POST parameter.")),Object(a.b)("p",null,"The OAuth2 flows are described here:\n",Object(a.b)("a",r({parentName:"p"},{href:"/video-streaming-developer-docs/api-basics-authentication"}),"Basic Authentication")),Object(a.b)("p",null,"The recommended authentication flow is ",Object(a.b)("em",{parentName:"p"},"Client credentials"),"."),Object(a.b)("h2",null,"Time format"),Object(a.b)("p",null,"Every time field provided by the API is formatted by ISO8601 format (eg. ",Object(a.b)("inlineCode",{parentName:"p"},"2018-07-16T19:20:30+01:00"),").\nThe API also accepts parameters in this format only."),Object(a.b)("h2",null,"Terminology"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"media"),": Media is a common word for both live broadcasts and recorded videos"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"content type"),": The API has knowledge of two types of content that are live\nbroadcasts and recorded videos"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"content id"),": A numeric identifier of the media. For live it means channel ID,\nfor video it means video ID"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"segment"),": A part of the media watched by the user")),Object(a.b)("h2",null,"Response times"),Object(a.b)("p",null,"Depending on your query and the underlying data size the response might take a minute."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-analytics-api-getting-started-mdx-183d4e81bb105a3df226.js.map