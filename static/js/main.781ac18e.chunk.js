(this.webpackJsonpenglish=this.webpackJsonpenglish||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),o=a.n(m);var r=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),l.a.createElement("p",null,"English Cards"))},c=a(4),i=a(5),s=a(6),h=a(8),u=a(7),p=a(1),d=a(9),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),l.a.createElement("button",null,"Gen")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:""}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",null,l.a.createElement(r,null),l.a.createElement(g,null))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.781ac18e.chunk.js.map