(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{h3To:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},o={_frontmatter:r},i=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(i,b({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This API call is used to configure the Account’s SSO login settings. Currently two types of SSO providers are supported: Google Apps and SAML based."),Object(a.b)("h2",null,"Get the current settings"),Object(a.b)("p",null,"This API call lists the current settings of the Organization’s SSO login."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/organizations/{organizationId}/sso.json\n")),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET /organizations/ZzzqXZ/sso.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\n")),Object(a.b)("p",null,"The token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, key-value pairs are returned with an HTTP Status code of 200."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"allow_sso_login")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"SSO login is enabled")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"login_method")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Type of SSO login. Possible values: ",Object(a.b)("inlineCode",{parentName:"td"},"samlsso"),", ",Object(a.b)("inlineCode",{parentName:"td"},"googlesso"),", ",Object(a.b)("inlineCode",{parentName:"td"},"none"))))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "allow_sso_login": true,\n  "login_method": "samlsso"\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Turn on/off SSO login"),Object(a.b)("p",null,"This API call allows to turn off/on the Organization’s SSO login."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/organizations/{organizationId}/sso.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the POST request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"allow_sso_login")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"SSO login is enabled")))),Object(a.b)("p",null,"To change the login method you have to set the method’s settings. (",Object(a.b)("a",b({parentName:"p"},{href:"#set-google-sso-settings"}),"Set Google SSO settings"),", ",Object(a.b)("a",b({parentName:"p"},{href:"#set-google-sso-settings"}),"Set Google SSO settings"),")"),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT /organization/ZzzqXZ/sso.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nallow_sso_login=true\n")),Object(a.b)("p",null,"The token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"We couldn’t update the Organization with the provided parameters")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h3",null,"Get the current Google SSO settings"),Object(a.b)("p",null,"This API call lists the current Google settings of the Organization’s SSO login."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/organizations/{organizationId}/sso/google.json\n")),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET /organizations/ZzzqXZ/sso/google.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, key-value pairs are returned with an HTTP Status code of 200."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"hosted_domain")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Google Apps domain")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "hosted_domain": "example.com"\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"If Google SSO settings previously hadn’t been set")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Set Google SSO settings"),Object(a.b)("p",null,"This API call is used to set the Organization’s Google SSO login settings. ",Object(a.b)("strong",{parentName:"p"},"Note that setting the SSO domain doesn’t automatically turn SSO login on.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/organizations/{organizationId}/sso/google.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the PUT request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"hosted_domain")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Google Apps domain")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT /organization/ZzzqXZ/sso/google.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nhosted_domain=example.com\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"We couldn’t update the Organization with the provided parameters (eg.: invalid domain)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get the current SAML SSO settings"),Object(a.b)("p",null,"This API call lists the current SAML settings of the Organization’s SSO login."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/organizations/{organizationId}/sso/saml.json\n")),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET /organizations/ZzzqXZ/sso/saml.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, key-value pairs are returned with an HTTP Status code of 200."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"entity_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Entity ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"certificate_data")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Certificate")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"login_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Login URL")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"logout_mode")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Login mode. Possible values: ",Object(a.b)("inlineCode",{parentName:"td"},"local"),", ",Object(a.b)("inlineCode",{parentName:"td"},"global"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"logout_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Logout URL if Login mode is global")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "entity_id": "https://sso.example.info/entity",\n  "certificate_data": "MIIJnz...",\n  "login_url": "https://example.com/login",\n  "logout_mode": "global",\n  "logout_url": "https://example.com/logout"\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"certificate_data")," in the above call is truncated for clarity."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"If SAML SSO settings previously hadn’t been set")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Set SAML SSO settings"),Object(a.b)("p",null,"This API call is used to set the Organization’s Google SSO login settings. ",Object(a.b)("strong",{parentName:"p"},"Setting the SSO domain doesn’t automatically turn SSO login on.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/organizations/{organizationId}/sso/saml.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the PUT request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"entity_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Entity ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"certificate_data")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Certificate")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"login_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Login URL")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"logout_mode")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Logout mode. Possible values: ",Object(a.b)("inlineCode",{parentName:"td"},"local"),", ",Object(a.b)("inlineCode",{parentName:"td"},"global"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"logout_url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Logout URL. Required if ",Object(a.b)("inlineCode",{parentName:"td"},"logout_mode")," is global")))),Object(a.b)("p",null,"The Content-Type of the request should be ",Object(a.b)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),Object(a.b)("p",null,"Example of the request:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT /organization/ZzzqXZ/sso/saml.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nentity_id=https%3A%2F%2Fsso.example.info%2Fentity&certificate_data=MIIJnz...&login_url=https%3A%2F%2Fexample.com%2Flogin&logout_mode=global&logout_url=https%3A%2F%2Fexample.com%2Flogout\n")),Object(a.b)("p",null,"Note that the token in the above call is only an example."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"certificate_data")," in the above call is truncated for clarity."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"We couldn’t update the Organization with the provided parameters (eg.: invalid domain)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token has no access to the user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-organization-api-sso-settings-mdx-c0a73441399b7f6be404.js.map