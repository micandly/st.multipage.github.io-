(this["webpackJsonpstreamlit-agraph"]=this["webpackJsonpstreamlit-agraph"]||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(25),i=n.n(o),l=n(26),c=n(6),s=n(1),u=n(0),p=n(2),d=n(3),m=n(13),f=n(30),v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).render=function(){for(var t=JSON.parse(e.props.args.data),n=t.nodes.slice(),r=0;r<n.length;r++)n[r].title&&(n[r].div=e.htmlTitle(n[r].title));var o=JSON.parse(e.props.args.config),i={selectNode:function(e){m.Streamlit.setComponentValue(e.nodes[0])},doubleClick:function(e){console.log(e.nodes);var t=function(e,t){var n,r=Object(c.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.id===e)return a}}catch(o){r.e(o)}finally{r.f()}}(e.nodes[0],n).div.innerHTML;t&&window.open(t)}};return a.a.createElement("span",null,a.a.createElement(f.a,{graph:t,options:o,events:i,getNetwork:function(e){}}))},e.htmlTitle=function(e){var t=document.createElement("div");return t.innerHTML=e,t},e}return Object(s.a)(n)}(m.StreamlitComponentBase),h=Object(m.withStreamlitConnection)(v);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.StreamlitProvider,null,a.a.createElement(h,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.df689717.chunk.js.map