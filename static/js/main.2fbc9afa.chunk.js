(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(t,e,a){t.exports={title:"Section_title__s91Xy"}},12:function(t,e,a){t.exports={notify:"Notification_notify__aHCFZ"}},19:function(t,e,a){},2:function(t,e,a){t.exports={list:"Statistics_list__3RV3w",item:"Statistics_item__3wdOw"}},21:function(t,e,a){},30:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(7),s=a.n(i),r=(a(19),a(8)),l=a(9),o=a(10),j=a(14),u=a(13),d=a(11),b=a.n(d),h=a(0),m=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:b.a.title,children:e}),a]})},O=a(6),f=a.n(O),p=(a(21),function(t){var e=t.btnTitle,a=t.hadleClick;return Object(h.jsx)("button",{type:"button",onClick:a,name:e,children:e})}),k=function(t){var e=t.markup,a=t.hadleClick,n=e.map((function(t){var e=t.mark,n=t.id;return Object(h.jsx)("li",{className:f.a.item,children:Object(h.jsx)(p,{btnTitle:e,hadleClick:a})},n)}));return Object(h.jsx)("ul",{className:f.a.list,children:n})},x=a(2),v=a.n(x),_=function(t){var e=t.markup,a=t.stats,n=t.total,c=t.positivePercentage,i=e.reduce((function(t,e,n){return e.stat=Object.values(a)[n],t.push(e),t}),[]).map((function(t){var e=t.mark,a=t.id,n=t.stat;return Object(h.jsxs)("li",{className:v.a.item,children:[Object(h.jsxs)("span",{children:[e,":"]}),Object(h.jsx)("span",{children:n})]},a)}));return Object(h.jsxs)("ul",{className:v.a.list,children:[i,Object(h.jsxs)("li",{className:v.a.item,children:[Object(h.jsx)("span",{children:"Total:"}),Object(h.jsx)("span",{children:n})]},1),Object(h.jsxs)("li",{className:v.a.item,children:[Object(h.jsx)("span",{children:"Positive feedback:"}),Object(h.jsx)("span",{children:c})]},2)]})},g=a(12),N=a.n(g),C=function(t){var e=t.message;return Object(h.jsx)("p",{className:N.a.notify,children:e})},w=a(4),y=a.n(w),S={marksArr:[{mark:"Good",id:y.a.generate()},{mark:"Neutral",id:y.a.generate()},{mark:"Bad",id:y.a.generate()}]},A=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.hadleClick=function(e){var a=e.target.name.toLowerCase();t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t,e=(t=this.state,Object.values(t).reduce((function(t,e){return t+e}),0)),a=function(t,e){return e>0?"".concat(parseInt(t/e*100),"%"):""}(this.state.good,e);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{title:"Please leave feddback",children:Object(h.jsx)(k,{markup:S.marksArr,hadleClick:this.hadleClick})}),Object(h.jsx)(m,{title:"Statistics",children:0===e?Object(h.jsx)(C,{message:"No feedback given"}):Object(h.jsx)(_,{markup:S.marksArr,stats:this.state,total:e,positivePercentage:a})})]})}}]),a}(n.Component),F=A;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},6:function(t,e,a){t.exports={list:"FeedbackOptions_list__TbI3A",item:"FeedbackOptions_item__3YIUz"}}},[[30,1,2]]]);
//# sourceMappingURL=main.2fbc9afa.chunk.js.map