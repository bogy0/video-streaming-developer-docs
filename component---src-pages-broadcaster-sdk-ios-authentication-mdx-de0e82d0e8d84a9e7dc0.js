(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{pkqt:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var i=n("7ljp"),a=n("XbGe");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"IBM Video Streaming SDK provides a secure way to authenticate users with IBM ID or legacy Ustream account and getting access for IBM Channel API features for example listing or broadcasting. ",Object(i.b)("inlineCode",{parentName:"p"},"IBMWatsonMediaAuthClient")," wraps up ",Object(i.b)("a",o({parentName:"p"},{href:"https://developers.video.ibm.com/channel-api/getting-started.html#authorization-flows_2"}),"IBM Video Streaming Channel APIs Authentication flow")," and implements a basic authentication service that present the IBM Video Streaming authentication site in an embedded ",Object(i.b)("inlineCode",{parentName:"p"},"SFSafariViewController")," on iOS or in default browser on macOS."),Object(i.b)("p",null,"Current authentication flow:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set up the authentication client with ",Object(i.b)("inlineCode",{parentName:"li"},"configureClientWithClientID:redirectURI:completion:")," must be called prior to any other requests."),Object(i.b)("li",{parentName:"ul"},"Open login site with ",Object(i.b)("inlineCode",{parentName:"li"},"requestLoginWithPresenter:completion:")," on iOS or ",Object(i.b)("inlineCode",{parentName:"li"},"requestLoginWithCompletion:")," on macOS."),Object(i.b)("li",{parentName:"ul"},"Place ",Object(i.b)("inlineCode",{parentName:"li"},"handleRedirectURL:")," into AppDelegates ",Object(i.b)("inlineCode",{parentName:"li"},"openURL")," callback for handling redirection."),Object(i.b)("li",{parentName:"ul"},"If user successfully logged in credentials (access token, refresh token, id token payload) will be accessible via ",Object(i.b)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient")," properties. See ",Object(i.b)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient.h")," for more details."),Object(i.b)("li",{parentName:"ul"},"If access token expires a new one can be requested with ",Object(i.b)("inlineCode",{parentName:"li"},"requestFreshTokensWithCompletion:")," it gets a new access token with ",Object(i.b)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient"),"s ",Object(i.b)("inlineCode",{parentName:"li"},"refreshToken"),"."),Object(i.b)("li",{parentName:"ul"},"For log out host app should call ",Object(i.b)("inlineCode",{parentName:"li"},"requestLogoutWithPresenter:completion:")," on iOS or ",Object(i.b)("inlineCode",{parentName:"li"},"requestLoginWithCompletion:")," on macOS. These methods opens authentication site for invalidate tokens and other credentials.")),Object(i.b)("p",null,"For more details see sample apps or visit ",Object(i.b)("a",o({parentName:"p"},{href:"https://developers.video.ibm.com/channel-api/getting-started.html"}),"IBM Video Streaming Channel API")," page for more information about Channel API usage."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-ios-authentication-mdx-de0e82d0e8d84a9e7dc0.js.map