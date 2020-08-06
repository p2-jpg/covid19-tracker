(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{101:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(99),a(24)),l=a.n(s),i=a(35),u=a(16),m=a(237),f=a(238),d=a(239),v=a(231),p=a(235),h=a(54),E=(a(101),a(236));var b=function(e){var t=e.title,a=e.cases,n=e.recovered,c=e.active,o=e.total,s=Object(h.a)(e,["title","cases","recovered","active","total"]);return r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(n&&"infoBox--recovered")},r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(n&&"infoBox__cases--recovered")},a),r.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},o," Total")))},y=a(242),j=a(243),g=(a(105),a(87)),O=a(14),x=a.n(O),w=a(240),N=a(241),_={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},k=function(e){return Object(g.a)(e).sort((function(e,t){return e.cases<t.cases}))},C=function(e){return e?"".concat(x()(e).format("+0,0")):"+0"};var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(y.a,{center:n,zoom:c},r.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:_[t].hex,fillColor:_[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*_[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(106);var B=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,x()(a).format("0,0"))))})))},I=a(86),T={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"},gridLines:{display:!0}}],yAxes:[{gridLines:{display:!0},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},D=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var M=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(h.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=D(e,a);f(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:c.className},(null===m||void 0===m?void 0:m.length)>0&&r.a.createElement(I.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:m}]},options:T}))};a(203),a(204);var z=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),j=Object(u.a)(y,2),g=j[0],O=j[1],w=Object(n.useState)([]),N=Object(u.a)(w,2),_=N[0],I=N[1],T=Object(n.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(T,2),z=D[0],L=D[1],R=Object(n.useState)(3),W=Object(u.a)(R,2),A=W[0],J=W[1],Y=Object(n.useState)([]),q=Object(u.a)(Y,2),F=q[0],V=q[1],$=Object(n.useState)("cases"),G=Object(u.a)($,2),H=G[0],K=G[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));I(k(e)),V(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,E(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),O(e),L([e.countryInfo.lat,e.countryInfo.long]),J(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",onChange:P,value:h},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(b,{active:"cases"===H,onClick:function(e){return K("cases")},title:"Coronavirus Cases",cases:C(g.todayCases),total:x()(g.cases).format("0.0a")}),r.a.createElement(b,{recovered:!0,active:"recovered"===H,onClick:function(e){return K("recovered")},title:"Recovered",cases:C(g.todayRecovered),total:x()(g.recovered).format("0.0a")}),r.a.createElement(b,{active:"deaths"===H,onClick:function(e){return K("deaths")},title:"Deaths",cases:C(g.todayDeaths),total:x()(g.deaths).format("0.0a")})),r.a.createElement(S,{casesType:H,countries:F,center:z,zoom:A})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("h3",null,"Total Live Cases by Country"),r.a.createElement(B,{countries:_}),r.a.createElement("h3",{className:"app__graphTitle"},"Worldwide New ",H),r.a.createElement(M,{className:"app__graph",casesType:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.6f677a93.chunk.js.map