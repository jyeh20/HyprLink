(this.webpackJsonphyprlnk=this.webpackJsonphyprlnk||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(34),c=a.n(o),r=(a(82),a(41)),i=a(44),s=a.n(i);s.a.initializeApp({apiKey:"AIzaSyA1JlRWdErM-H0-XY3AbsfiJgYYwEepLrU",authDomain:"hyprlink-f461d.firebaseapp.com",databaseURL:"https://hyprlink-f461d.firebaseio.com",projectId:"hyprlink-f461d",storageBucket:"hyprlink-f461d.appspot.com",messagingSenderId:"333297777039",appId:"1:333297777039:web:5484a563515ab5d3e873fa",measurementId:"G-HR6GS3WCHN"}),s.a.analytics();var m=s.a,u=a(28);var p=function(e,t){return console.log(e,t),t};var h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){m.firestore().collection("events").get().then((function(e){var t=e.docs;console.log(t),o(t)}))}),[]),l.a.createElement("div",null,a.map((function(e){return p(e.id,e.id.slice(0,5)),l.a.createElement("h1",{key:e.id},l.a.createElement(u.b,{to:"/event/".concat(e.id)},l.a.createElement("button",null,e.data().name)))})))},d=a(67),E=a(68),f=a(75),g=a(76),v=a(72),b=a.n(v),C=(a(97),a(98),a(69)),N=a.n(C),w=a(70),y=a.n(w),I=a(71),k=a.n(I),j=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handleLocationChange=function(e){n.setState({location:e.target.value})},n.handleTimeChange=function(e){n.setState({time:e.target.value})},n.handleDateChange=function(e){n.setState({date:e})},n.handlePriceChange=function(e){n.setState({price:e.target.value})},n.handleDescriptionChange=function(e){n.setState({description:e.target.value})},n.submitForm=function(){m.firestore().collection("events").add(n.state).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))},n.state={name:"",location:"",time:"00:00",date:new Date,price:"0",description:"",toContact:!1},n}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{id:"title",src:N.a,alt:"hyprlink"}),l.a.createElement("img",{id:"plus",src:y.a,alt:"+"}),l.a.createElement("form",null,l.a.createElement("h2",null,"CREATE NEW EVENT"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nameInput"}),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,className:"form-control",id:"nameInput",placeholder:"ENTER EVENT NAME"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"locationInput"}),l.a.createElement("span",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:this.handleLocationChange,className:"form-control",id:"locationInput",placeholder:"Address or link"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"dateInput"}),l.a.createElement("span",null,"Date"),l.a.createElement(b.a,{selected:this.state.date,onChange:this.handleDateChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"timeInput"}),l.a.createElement("span",null,"Time"),l.a.createElement("input",{type:"time",name:"time",value:this.state.time,onChange:this.handleTimeChange,className:"form-control",id:"timeInput"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"priceInput"}),l.a.createElement("span",null,"Price"),l.a.createElement("input",{type:"price",name:"price",value:this.state.price,onChange:this.handlePriceChange,className:"form-control",id:"priceInput"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"descriptionInput"}),l.a.createElement("span",null,"Description"),l.a.createElement("textarea",{type:"text",name:"description",value:this.state.description,onChange:this.handleDescriptionChange,className:"form-control",id:"descriptionInput",placeholder:"Write about this event"})),l.a.createElement("button",{className:"submit",onClick:this.submitForm},"HYPRLNK IT")),l.a.createElement("img",{id:"smiles",src:k.a,alt:"smiles"}))}}]),a}(l.a.Component);var S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){m.firestore().collection("events").doc(window.location.pathname.slice(7)).get().then((function(e){var t=e.data();console.log(window.location.pathname.slice(7)),console.log(t),o(t)}))}),[]),console.log(a),l.a.createElement("div",null,l.a.createElement("h1",null,a.name),l.a.createElement("h3",null,a.location),l.a.createElement("h3",null,a.date),l.a.createElement("h3",null,a.time),l.a.createElement("h3",null,a.price),l.a.createElement("h3",null,a.description),l.a.createElement("h3",null,l.a.createElement(u.b,{to:window.location.pathname},window.location.href)))},x=(a(156),a(20));var D=function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(x.a,{path:"/events",exact:!0,component:h}),l.a.createElement(x.a,{path:"/hyprlnk",exact:!0,component:j}),l.a.createElement(x.a,{path:"/event/:id",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a.p+"static/media/hyprlink_title2.3d637d24.png"},70:function(e,t,a){e.exports=a.p+"static/media/plus.83050630.png"},71:function(e,t,a){e.exports=a.p+"static/media/faces3.69c79402.png"},77:function(e,t,a){e.exports=a(157)},82:function(e,t,a){},97:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.f974f61a.chunk.js.map