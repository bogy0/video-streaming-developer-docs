(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{F7Ra:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var b=n("7ljp"),c=n("XbGe"),r=n("Drr0");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},d=c.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,b,c={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(b.b)(d,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Network interface of an ECDN server."),Object(b.b)(r.k,{mdxType:"GQLCodeSnippet"},Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.d,{mdxType:"GQLKeyword"},"type")," Interface ",Object(b.b)(r.h,{mdxType:"GQLOpen"})),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Name of network interface (ie. eth0, eth1, ens36, etc...).")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Currently it's always eth0 (multiple interfaces aren't supported yet).")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.g,{mdxType:"GQLName"},"name"),": ",Object(b.b)(r.f,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String"),Object(b.b)(r.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Configuration mode of interface's network address.")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.g,{mdxType:"GQLName"},"networkConfigurationMode"),": ",Object(b.b)(r.f,{href:"/ecdn-api-enums/NetworkConfigurationMode",mdxType:"GQLLink"},"NetworkConfigurationMode"),Object(b.b)(r.i,{mdxType:"GQLOperator"},"!")),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Local IP of interface. Null if network configuration mode")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# is DYNAMIC and server never checked in before.")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.g,{mdxType:"GQLName"},"localIP"),": ",Object(b.b)(r.f,{href:"/ecdn-api-scalars/IPv4",mdxType:"GQLLink"},"IPv4")),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Netmask of interface's local network. Null if network configuration mode")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# is DYNAMIC and server never checked in before.")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.g,{mdxType:"GQLName"},"netmask"),": ",Object(b.b)(r.f,{href:"/ecdn-api-scalars/IPv4Mask",mdxType:"GQLLink"},"IPv4Mask")),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# Gateway of interface's local network. Null if network configuration mode")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.c,{mdxType:"GQLComment"},"# is DYNAMIC and server never checked in before.")),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.j,{mdxType:"GQLTab"}),Object(b.b)(r.g,{mdxType:"GQLName"},"gateway"),": ",Object(b.b)(r.f,{href:"/ecdn-api-scalars/IPv4",mdxType:"GQLLink"},"IPv4")),Object(b.b)(r.e,{mdxType:"GQLLine"}," "),Object(b.b)(r.e,{mdxType:"GQLLine"},Object(b.b)(r.b,{mdxType:"GQLClose"}))),Object(b.b)("h2",null,"Fields"),Object(b.b)("h3",null,"name: ",Object(b.b)("a",a({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/String"}),"String"),"!"),Object(b.b)("p",null,"Name of network interface (ie. eth0, eth1, ens36, etc…).\nCurrently it’s always eth0 (multiple interfaces aren’t supported yet)."),Object(b.b)("h3",null,"networkConfigurationMode: ",Object(b.b)("a",a({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-enums/NetworkConfigurationMode"}),"NetworkConfigurationMode"),"!"),Object(b.b)("p",null,"Configuration mode of interface’s network address."),Object(b.b)("h3",null,"localIP: ",Object(b.b)("a",a({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/IPv4"}),"IPv4")),Object(b.b)("p",null,"Local IP of interface. Null if network configuration mode\nis DYNAMIC and server never checked in before."),Object(b.b)("h3",null,"netmask: ",Object(b.b)("a",a({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/IPv4Mask"}),"IPv4Mask")),Object(b.b)("p",null,"Netmask of interface’s local network. Null if network configuration mode\nis DYNAMIC and server never checked in before."),Object(b.b)("h3",null,"gateway: ",Object(b.b)("a",a({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/IPv4"}),"IPv4")),Object(b.b)("p",null,"Gateway of interface’s local network. Null if network configuration mode\nis DYNAMIC and server never checked in before."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-objects-interface-mdx-51dcba40e0cdd9a10baf.js.map