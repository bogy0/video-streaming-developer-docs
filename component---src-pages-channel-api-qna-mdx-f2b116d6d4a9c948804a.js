(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{G6S3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),b=n("XbGe");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i={_frontmatter:l},c=b.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,["components"]);return Object(a.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Check QnA is enabled"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/settings/qna.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"enabled")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"QnA is enabled")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_default_interactive_module")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"QnA is the default interactive module on the channel page")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n    "enabled": true,\n    "is_default_interactive_module": false\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Turn on/off QnA"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channelId}/settings/qna.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"enable")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"true/false")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"POST /channels/1234/settings/qna.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nenable=true\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get a list of QnA questions on a channel"),Object(a.b)("p",null,"Returns the QnA questions on a channel"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/qna/questions.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"from")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"List start timestamp")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"to")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"List end timestamp")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pagesize")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Requested page size (value is 100 by default, max. 100)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under an ",Object(a.b)("inlineCode",{parentName:"p"},"questions")," key."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"user_display_name")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Questioner’s display name")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"question")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Question")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"answer")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Answer (if the question has been answered)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"user_email")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Questioner’s email")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"created_at")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The date and time when the question was asked (Unix timestamp)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_edited")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"True if the question has been edited")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_archived")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"True if the question has been archived")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"is_moderated")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"True if the question has been moderated")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"votes")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Number of votes the question got")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "questions": [\n    {\n      "user_display_name": "john",\n      "question": "How is the weather where you are?",\n      "answer": "It\'s beautiful",\n      "user_email": "john@example.com",\n      "created_at": 1599852837,\n      "is_edited": false,\n      "is_archived": true,\n      "is_moderated": true,\n      "votes": 0\n    },\n    ...\n  ]\n}\n')),Object(a.b)("p",null,"The paging information can be found under the ",Object(a.b)("inlineCode",{parentName:"p"},"paging")," key. Example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "paging": {\n    "previous": "https://api.video.ibm.com/channels/CHANNEL_ID/qna/questions.json?page=1",\n    "next": "https://api.video.ibm.com/channels/CHANNEL_ID/qna/questions.json?page=3",\n    "page_count": 3,\n    "item_count": 272\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-qna-mdx-f2b116d6d4a9c948804a.js.map