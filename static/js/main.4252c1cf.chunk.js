(this["webpackJsonpsample-dashboard-with-fluentui"]=this["webpackJsonpsample-dashboard-with-fluentui"]||[]).push([[0],{177:function(e,t,s){},178:function(e,t,s){},318:function(e,t,s){"use strict";s.r(t);var c=s(0),l=s.n(c),r=s(62),a=s.n(r),n=(s(177),s(178),s(1));function i(){return Object(n.jsxs)("div",{className:"bg-blue-50 z-50 py-2 w-full pb-0 lg:pb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 justify-center border-b fixed top-0 h-24 lg:h-14",children:[Object(n.jsx)("div",{className:"lg:mt-0 lg:w-3/5",children:Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Enter field to search",className:"w-full px-2 py-1 border border-black"})}),Object(n.jsxs)("div",{className:"flex justify-between items-center",children:[Object(n.jsx)("div",{className:"bg-green-400 lg:hidden my-2 py-1 px-6 text-white w-max",children:"Admin"}),Object(n.jsx)("button",{type:"button",className:"bg-green-400 py-1 px-6 text-white lg:hidden",children:"Bars"})]}),Object(n.jsx)("div",{className:"hidden lg:block",children:"Hello"})]})}var j=s(18);function d(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=t[0],l=t[1];function r(){l((function(e){return!e}))}return Object(n.jsx)("div",{className:"".concat(s?"h-20":"h-8"," bg-gray-500 z-10"),children:Object(n.jsx)("button",{onClick:function(){return r},children:"Click me"})})}var b=s(17);function x(e){var t=e.crumbs,s=e.className;return Object(n.jsx)("div",{className:s,children:t.map((function(e,s){return 0===s?Object(n.jsxs)("pre",{className:"inline",children:[Object(n.jsx)("a",{href:e.link,children:e.title},s)," /"]}):s===t.length-1?Object(n.jsxs)("pre",{className:"inline",children:[" ",Object(n.jsx)("a",{href:e.link,children:e.title},s)]}):Object(n.jsxs)("pre",{className:"inline",children:[" ",Object(n.jsx)("a",{href:e.link,children:e.title},s)," /"]})}))})}function h(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=t[0],l=t[1];Object(b.f)();return Object(n.jsx)("div",{className:"fixed ".concat(s?"static-":"hidden"," lg:fixed top-0 w-2/3 lg:w-48 bg-gray-500 h-screen overflow-y-auto z-40 py-3"),children:Object(n.jsx)("div",{className:"flex flex-col px-4",children:Object(n.jsxs)("div",{className:"flex gap-4 lg:justify-center",children:[Object(n.jsx)("div",{className:"w-4/5 py-1 text-center shadow-lg rounded bg-white",children:Object(n.jsx)("span",{className:"font-bold text-green-400",children:"Admin"})}),Object(n.jsx)("div",{className:"w-1/5 bg-red-400 text-center lg:hidden",onClick:function(){return l((function(e){return!e}))},children:"Bars"})]})})})}var m=s(320),o=s(326),O=s(324),g=s(166),f=s(71),p=s(67),u=s(168),N=[{name:"JAN",uv:"566",pv:"567",amt:"4643"},{name:"FEB",uv:"344",pv:"567",amt:"4643"},{name:"MAR",uv:"578",pv:"567",amt:"4643"},{name:"APR",uv:"974",pv:"567",amt:"4643"},{name:"MAY",uv:"128",pv:"567",amt:"4643"},{name:"JUN",uv:"485",pv:"567",amt:"4643"},{name:"JUL",uv:"725",pv:"567",amt:"4643"},{name:"AUG",uv:"545",pv:"567",amt:"4643"},{name:"SEP",uv:"594",pv:"567",amt:"4643"},{name:"OCT",uv:"294",pv:"567",amt:"4643"},{name:"NOV",uv:"945",pv:"567",amt:"4643"},{name:"DEC",uv:"285",pv:"567",amt:"4643"}],v=function(e){var t=e.active,s=e.payload,c=e.label;return t&&s&&s.length?Object(n.jsx)("div",{className:"bg-red-500 p-4",children:Object(n.jsx)("p",{className:"label",children:"".concat(c," : ").concat(s[0].value)})}):Object(n.jsx)(n.Fragment,{})};var w=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(o.a,{width:150,height:40,data:N,children:[Object(n.jsx)(O.a,{strokeDasharray:"3 3"}),Object(n.jsx)(g.a,{dataKey:"name"}),Object(n.jsx)(f.a,{content:Object(n.jsx)(v,{})}),Object(n.jsx)(p.a,{}),Object(n.jsx)(u.a,{dataKey:"uv",fill:"#8884d8"})]})})})},y=s(70);function k(){return Object(n.jsxs)("div",{className:"h-screen max-h-screen flex",children:[Object(n.jsx)("div",{className:"absolute w-max lg:block md:static lg:max-h-screen lg:w-56 h-screen bg-white",children:Object(n.jsx)(h,{})}),Object(n.jsxs)("div",{className:"w-full lg:flex lg:flex-col pt-24 lg:pt-14",children:[Object(n.jsx)(i,{}),Object(n.jsxs)("div",{className:"bg-blue-50 px-4 py-2 flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center gap-2 h-14 w-full border-b",children:[Object(n.jsx)(x,{className:"hidden lg:inline-block w-max",crumbs:[{title:"Home",link:"/#"},{title:"Reports",link:"/reports"}]}),Object(n.jsxs)("div",{className:"flex justify-between gap-4 lg:pr-4",children:[Object(n.jsxs)("button",{className:"bg-gray-500 text-white min-w-max px-6 py-1 flex items-center justify-center gap-1",children:[Object(n.jsx)(y.b,{})," Filter"]}),Object(n.jsxs)("button",{className:"bg-gray-500 text-white min-w-max px-6 py-1 flex items-center justify-center gap-1",children:[Object(n.jsx)(y.a,{})," Download"]})]})]}),Object(n.jsxs)("div",{className:"flex-grow flex flex-col lg:flex-row bg-pink-400",children:[Object(n.jsxs)("div",{className:"h-full bg-blue-50 w-full lg:w-2/3",children:[Object(n.jsxs)("div",{className:"grid grid-cols-12 bg-white m-4 p-4",children:[Object(n.jsx)("div",{className:"bg-gradient-to-br from-green-600 to-green-300 col-span-5 lg:col-span-3 h-20 flex justify-center items-center shadow-md",children:Object(n.jsxs)("div",{className:"flex gap-3",children:[Object(n.jsx)("div",{className:"w-max p-2",children:Object(n.jsx)(y.d,{size:35,color:"#fff"})}),Object(n.jsxs)("div",{className:"flex flex-col text-white",children:[Object(n.jsx)("span",{className:"font-semibold text-md leading-5",children:"Total Users"}),Object(n.jsx)("span",{className:"font-bold text-xl",children:"356"})]})]})}),Object(n.jsx)("div",{className:"bg-gradient-to-br from-red-600 to-red-300 col-span-5 lg:col-span-3 col-start-8 lg:col-start-5 h-20 flex justify-center items-center shadow-md",children:Object(n.jsxs)("div",{className:"flex gap-3",children:[Object(n.jsx)("div",{className:"w-max p-2",children:Object(n.jsx)(y.c,{size:35,color:"#fff"})}),Object(n.jsxs)("div",{className:"flex flex-col text-white",children:[Object(n.jsx)("span",{className:"font-semibold text-md leading-5",children:"User Retained"}),Object(n.jsx)("span",{className:"font-bold text-xl",children:"56"})]})]})})]}),Object(n.jsxs)("div",{className:"bg-white mx-4 mb-4 py-4",children:[Object(n.jsxs)("div",{className:"bg-red-600- px-4 mb-2 flex flex-col lg:flex-row lg:justify-between",children:[Object(n.jsx)("h2",{className:"text-center lg:text-left text-2xl font-bold text-gray-700",children:"Users' Acquisation"}),Object(n.jsxs)("div",{className:"flex justify-end my-2",children:[Object(n.jsx)("span",{className:"mr-2 text-sm font-medium text-gray-500",children:"Showing for last"}),Object(n.jsxs)("select",{className:"bg-gray-500 text-white text-sm px-1",children:[Object(n.jsx)("option",{children:"12 Months"}),Object(n.jsx)("option",{children:"6 Months"}),Object(n.jsx)("option",{children:"4 Months"})]})]})]}),Object(n.jsx)("div",{className:"h-60 lg:h-64 2xl:h-96 lg:pr-4 z-10",children:Object(n.jsx)(w,{})})]})]}),Object(n.jsx)("div",{className:"h-full bg-blue-300 flex-grow flex",children:Object(n.jsx)("div",{className:"flex-grow flex bg-blue-50 p-4",children:Object(n.jsxs)("div",{className:"bg-white w-full px-4 py-2 pb-4 lg:px-8 flex flex-col gap-8",children:[Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h2",{className:"text-center text-2xl font-bold text-gray-700",children:"Users' Referrers"}),Object(n.jsxs)("div",{className:"flex justify-end my-2 mb-4",children:[Object(n.jsx)("span",{className:"mr-2 text-sm font-medium text-gray-500",children:"Sorting order"}),Object(n.jsxs)("select",{className:"bg-gray-500 text-white text-sm px-1",children:[Object(n.jsx)("option",{children:"Ascending"}),Object(n.jsx)("option",{children:"Descending"})]})]}),Object(n.jsx)("div",{className:"",children:Object(n.jsxs)("table",{className:"w-full border-l border-r",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"border-b bg-gray-100",children:[Object(n.jsx)("th",{className:"text-left text-gray-700 p-2",children:"Source"}),Object(n.jsx)("th",{className:"text-right text-gray-700 p-2",children:"No. of users"})]})}),Object(n.jsxs)("tbody",{className:"text-sm",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Facebook"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"67"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Friends"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"24"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Hauler App"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"45"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Other sources"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"58"})]})]})]})})]}),Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h2",{className:"text-center text-2xl font-bold text-gray-700",children:"Users' Referrers"}),Object(n.jsxs)("div",{className:"flex justify-end my-2 mb-4",children:[Object(n.jsx)("span",{className:"mr-2 text-sm font-medium text-gray-500",children:"Sorting order"}),Object(n.jsxs)("select",{className:"bg-gray-500 text-white text-sm px-1",children:[Object(n.jsx)("option",{children:"Ascending"}),Object(n.jsx)("option",{children:"Descending"})]})]}),Object(n.jsx)("div",{className:"",children:Object(n.jsxs)("table",{className:"w-full border-l border-r",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"border-b bg-gray-100",children:[Object(n.jsx)("th",{className:"text-left text-gray-700 p-2",children:"Source"}),Object(n.jsx)("th",{className:"text-right text-gray-700 p-2",children:"No. of users"})]})}),Object(n.jsxs)("tbody",{className:"text-sm",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Facebook"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"67"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Friends"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"24"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Hauler App"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"45"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-2 border-b",children:"Other sources"}),Object(n.jsx)("td",{className:"text-right p-2 border-b",children:"58"})]})]})]})})]})]})})})]}),Object(n.jsx)(d,{})]})]})}function S(){return Object(n.jsxs)("div",{className:"h-screen max-h-screen flex",children:[Object(n.jsx)("div",{className:"absolute hidden lg:block md:static lg:max-h-screen w-56 h-screen bg-red-700",children:"Sidebar"}),Object(n.jsxs)("div",{className:"w-full flex flex-col bg-blue-500",children:[Object(n.jsx)(i,{}),Object(n.jsx)("div",{className:"bg-green-500 h-24",children:"Header"}),Object(n.jsxs)("div",{className:"flex-grow flex flex-col lg:flex-row bg-pink-400 lg:overflow-y-hidden",children:[Object(n.jsxs)("div",{className:"h-full bg-yellow-300 w-full lg:w-2/3",children:["Primary Section",Object(n.jsx)("div",{className:"h-96",children:"f"}),Object(n.jsx)("div",{className:"h-96",children:"f"})]}),Object(n.jsx)("div",{className:"h-full bg-blue-300 flex-grow overflow-y-auto",children:"Secondary Section"})]}),Object(n.jsx)(d,{})]})]})}var A=s(80);function F(){return Object(n.jsx)(A.a,{basename:window.location.pathname||"",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/reports",component:S}),Object(n.jsx)(b.a,{exact:!0,path:"/",component:k})]})})}a.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[318,1,2]]]);
//# sourceMappingURL=main.4252c1cf.chunk.js.map