(window.webpackJsonpexample=window.webpackJsonpexample||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(15),a(6)),s=a.n(i),u=a(9),l=a(1),p=a(2),m=a(4),h=a(3),d=a(5),y=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Simple weather app on react.js"))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"weather_form",onSubmit:this.props.weatherMethod},r.a.createElement("input",{type:"text",name:"city",placeholder:"Your city"}),r.a.createElement("button",null,"Go!"))}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.city&&r.a.createElement("div",{className:"weather_wrapper"},r.a.createElement("div",{className:"weather_city"},"Location: ",r.a.createElement("b",null,this.props.city,", ",r.a.createElement("span",{className:"weather_country"},this.props.country))),r.a.createElement("div",{className:"weather_temp"},"Temperature: ",r.a.createElement("b",null,this.props.temp)," \u2103")),r.a.createElement("p",{className:"weather_error"},this.props.error))}}]),t}(r.a.Component),b="e926124910809df40d4f149a4627417a",w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={temp:void 0,city:void 0,country:void 0,error:void 0},a.gettingWeather=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=t.target.elements.city.value)){e.next=12;break}return e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(b));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,a.setState({temp:Math.round(c.main.temp-273),city:c.name,country:c.sys.country,error:void 0}),e.next=13;break;case 12:a.setState({temp:void 0,city:void 0,country:void 0,error:"Please, enter your city"});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Weather App"),r.a.createElement(y,null),r.a.createElement(f,{weatherMethod:this.gettingWeather}),r.a.createElement(v,{temp:this.state.temp,city:this.state.city,country:this.state.country,error:this.state.error}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.845b0e6d.chunk.js.map