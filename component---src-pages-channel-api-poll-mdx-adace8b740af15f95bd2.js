(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{LcQu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return i}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},p=l.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(p,b({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Get a list of Polls on a Channel"),Object(a.b)("p",null,"Returns the Polls on a channel"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/polls.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pagesize")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 20 by default, max. 20)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under an ",Object(a.b)("inlineCode",{parentName:"p"},"polls")," key."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"poll_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Poll ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"question")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Question")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"votes")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Vote count")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"created_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the Poll was created (Unix timestamp)")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "polls": [\n    {\n      "poll_id": "john",\n      "question": "What is your favourite color?",\n      "votes": 3,\n      "created_at": 1599852837\n    },\n    ...\n  ]\n}\n')),Object(a.b)("p",null,"The paging information can be found under the ",Object(a.b)("inlineCode",{parentName:"p"},"paging")," key. Example:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "paging": {\n    "previous": "https://api.video.ibm.com/channels/CHANNEL_ID/polls.json?page=1",\n    "next": "https://api.video.ibm.com/channels/CHANNEL_ID/polls.json?page=3",\n    "page_count": 3,\n    "item_count": 272\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get a list of available answers for a Poll on a Channel"),Object(a.b)("p",null,"Returns the available answers for a Poll"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/polls/{pollId}/answers.json\n")),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under an ",Object(a.b)("inlineCode",{parentName:"p"},"answers")," key."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"answer_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Answer ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"answer")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Answer")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "answers": [\n    {\n      "answer_id": 34563,\n      "answer": "Blue"\n    },\n    ...\n  ]\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Poll not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get a list of Votes for a Poll on a Channel"),Object(a.b)("p",null,"Returns the Viewers’ Votes for a Poll"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channelId}/polls/{pollId}/votes.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pagesize")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 100 by default, max. 100)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under an ",Object(a.b)("inlineCode",{parentName:"p"},"votes")," key."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"user_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"User ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"answer_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Answer ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"answered_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the Vote was created (Unix timestamp)")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "polls": [\n    {\n      "user_id": "john@example.com",\n      "answer_id": 34563,\n      "answered_at": 1599852837\n    },\n    ...\n  ]\n}\n')),Object(a.b)("p",null,"The paging information can be found under the ",Object(a.b)("inlineCode",{parentName:"p"},"paging")," key. Example:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "paging": {\n    "previous": "https://api.video.ibm.com/channels/CHANNEL_ID/polls/POLL_ID/votes.json?page=1",\n    "next": "https://api.video.ibm.com/channels/CHANNEL_ID/polls/POLL_ID/votes.json?page=3",\n    "page_count": 3,\n    "item_count": 272\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token could not access the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Poll not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-poll-mdx-adace8b740af15f95bd2.js.map