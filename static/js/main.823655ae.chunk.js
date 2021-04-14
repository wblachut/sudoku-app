(this["webpackJsonpsudoku-app"]=this["webpackJsonpsudoku-app"]||[]).push([[0],{45:function(t,r,e){},46:function(t,r,e){},47:function(t,r,e){},53:function(t,r,e){},54:function(t,r,e){},64:function(t,r,e){},66:function(t,r,e){},74:function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n),a=e(4),c=e.n(a),u=(e(45),e(14)),i=e(11),s=(e(46),e(47),e(9)),d=e(2),l=function(){return Object(d.jsx)("div",{className:"sudoku-box"})},f=function(t){var r=t.board;return Object(d.jsx)("div",{className:"sudoku-box-wrapper",children:r&&r.map((function(){return Object(d.jsx)(l,{},Object(s.uuid)())}))})},b=(e(53),e(17)),j=e.n(b),p=e(102),v=e(15),O=(e(54),function(t,r,e,n){var o=e[2],a=e[0],c=Object.assign(r);c[a][o]=t,n(c)}),h=function(t){var r=t.col,e=t.row,n=t.board,a=t.inputRef,c=t.popupState,u=t.setBoard;return Object(d.jsx)(o.a.Fragment,{children:Object(d.jsx)("input",Object(v.a)(Object(v.a)({type:"tel",maxLength:1,"data-cord":[e,r],ref:a},Object(b.bindToggle)(c)),{},{onInput:function(t){return function(t,r,e){var n=t.currentTarget.getAttribute("data-cord");isNaN(+t.currentTarget.value)?t.currentTarget.value="":r&&n&&O(+t.currentTarget.value,r,n,e)}(t,n,u)}}))})},x=(e(64),e(98)),m=e(99),g=function(t){var r=t.inputRef,e=t.board,n=t.popupState,o=t.setBoard;return Object(d.jsx)(m.a,Object(v.a)(Object(v.a)({},Object(b.bindPopper)(n)),{},{transition:!0,disablePortal:!0,children:function(t){var n=t.TransitionProps;return Object(d.jsx)(x.a,Object(v.a)(Object(v.a)({},n),{},{timeout:500,children:Object(d.jsx)("div",{className:"sudoku-picker",children:e.map((function(t,n){return Object(d.jsx)(k,{element:n,inputRef:r,board:e,setBoard:o},Object(s.uuid)())}))})}))}}))},k=function(t){var r=t.element,e=t.inputRef,n=t.board,o=t.setBoard;return Object(d.jsx)("div",{role:"button",className:"sudoku-picker-box",onClick:function(t){return function(t,r,e,n){var o=e.current.parentNode.parentNode.getAttribute("data-cord"),a=t.currentTarget.innerHTML;e.current.value=a,O(+a,r,o,n)}(t,n,e,o)},children:r+1})},N=function(t){var r=t.col,e=t.row,o=t.board,a=t.setBoard,c=Object(n.useState)(!1),u=Object(i.a)(c,2),s=u[0],l=u[1],f=Object(n.useRef)(null),b=function(){return l(!1)},v=function(){return l((function(t){return!t}))};return Object(d.jsx)(j.a,{variant:"popper",popupId:"sudoku-popper",children:function(t){return Object(d.jsx)(p.a,{onClickAway:b,children:Object(d.jsxs)("div",{className:"sudoku-cell-input-div",onClick:v,children:[Object(d.jsx)(h,{col:r,row:e,board:o,inputRef:f,popupState:t,setBoard:a}),s&&Object(d.jsx)(g,{board:o,inputRef:f,popupState:t,setBoard:a})]})})}})},B=function(t){var r=t.col,e=t.row,n=t.element,o=t.board,a=t.setBoard;return Object(d.jsxs)("div",{className:"sudoku-cell","data-cord":[e,r],children:[0!==n&&10!==n&&n,10===n&&Object(d.jsx)("span",{className:"sudoku-invalid-element",children:"x"}),0===n&&Object(d.jsx)(N,{col:r,row:e,board:o,setBoard:a})]},Object(s.uuid)())},w=function(t){var r=t.array,e=t.row,n=t.board,a=t.setBoard;return Object(d.jsx)(o.a.Fragment,{children:r.map((function(t,r){return Object(d.jsx)(B,{col:r,row:e,element:t,board:n,setBoard:a},Object(s.uuid)())}))})},S=(e(66),e(31)),y=function(t){if(function(t){for(var r=0;r<9;r++)for(var e=0;e<9;e++)if(0===t[r][e])return!1;return!0}(t))return t;var r=R(t),e=T(r);return C(e)};var C=function t(r){if(r.length<1)return!1;var e=r.shift(),n=y(e);return!1!==n?n:t(r)},T=function(t){var r=[];if(t){for(var e=0;e<t.length;e++)z(t[e])&&r.push(t[e]);return r}},R=function(t){var r=[],e=F(t);if(void 0!==e)for(var n=e[0],o=e[1],a=1;a<=9;a++){var c=Object(u.a)(t),i=Object(u.a)(c[n]);i[o]=a,c[n]=i,r.push(c)}return r},F=function(t){for(var r=0;r<9;r++)for(var e=0;e<9;e++)if(0===t[r][e])return[r,e]},z=function(t){if(E(t)&&I(t)&&P(t))return!0},E=function(t){for(var r=0;r<t.length;r++)for(var e=[],n=0;n<t.length;n++){var o=t[r][n];if(e.includes(o))return!1;0!==o&&e.push(o)}return!0},I=function(t){for(var r=0;r<t.length;r++)for(var e=[],n=0;n<t.length;n++){var o=t[n][r];if(e.includes(o))return!1;0!==o&&e.push(o)}return!0},P=function(t){for(var r=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],e=0;e<t.length;e+=3)for(var n=0;n<t.length;n+=3)for(var o=[],a=0;a<t.length;a++){var c=r[a][0]+e,u=r[a][1]+n,i=t[c][u];if(o.includes(i))return!1;0!==i&&o.push(i)}return!0},A=function(){var t=Object(S.makepuzzle)(),r=Object(S.solvepuzzle)(t);return{board:J(t),solution:L(r)}},J=function(t){var r=t.map((function(t){return null===t?0:t+1}));return M(r)},L=function(t){var r=t.map((function(t){return t+1}));return M(r)},M=function(t){for(var r=[],e=0;e<9;e++){for(var n=[],o=0;o<9;o++){var a=t[9*e+o];n.push(a)}r.push(n)}return r},D=function(t){var r=function(t){for(var r=Object(u.a)(t),e=0;e<9;e++)for(var n=0;n<9;n++)null===r[e][n]&&r[e][n];return r}(JSON.parse(t).board);return{board:r,solution:y(r)}},G=function(t,r,e){return t.forEach((function(n,o){n.forEach((function(n,a){r&&e?n!==e[o][a]&&0!==n&&(t[o][a]=10):t[o][a]=10===n?0:n}))})),t},H=function(t,r,e,n){var o=n||A();t(o),r(o.board),e(!1)},U=function(t,r){t.every((function(t){return t.every((function(t){return 0!==t}))}))&&function(t,r){t.every((function(t,e){return t===r[e]}))?alert("Congratulations, sudoku solved correctly !"):(console.log(t),alert("Sorry, sudoku solved wrong !"))}(t,r)},V=e(96),q=e(100),K=e(97),Q=Object(V.a)((function(t){return Object(q.a)({root:{"& > *":{margin:t.spacing(2)}}})})),W=function(t){var r=t.solution,e=t.board,o=t.setBoard,a=t.setSudoku,c=Q(),u=Object(n.useState)(e),s=Object(i.a)(u,2),l=s[0],f=s[1],b=Object(n.useState)(!1),j=Object(i.a)(b,2),p=j[0],v=j[1];return Object(n.useEffect)((function(){U(e,r)}),[e]),Object(d.jsx)("section",{className:"Options-box-wrapper",children:Object(d.jsxs)("div",{className:c.root,children:[Object(d.jsx)(K.a,{color:"primary",variant:"contained",onClick:function(){return H(a,f,v)},children:"New Game"}),Object(d.jsx)(K.a,{color:"primary",variant:"contained",onClick:function(){return function(t,r,e,n,o,a,c){n?(a(Object.assign(t)),o(G(e,!1))):(a(Object.assign(t)),o(G(e,!0,r))),c((function(t){return!t}))}(e,r,l,p,o,f,v)},children:p?"Return":"Validate"})," ",Object(d.jsx)("div",{children:Object(d.jsx)(K.a,{color:"secondary",variant:"contained",size:"small",onClick:function(){!function(t,r,e){var n=prompt("paste board in form of JSON string");if("string"===typeof n&&""!==n)try{var o=D(n);if(!o.solution)return void alert("Board is not solvable!");H(t,r,e,o),alert("User board set correctly...")}catch(a){alert("Invalid sudoku input"),console.error(a)}}(a,f,v)},children:"Fetch Board"})})]})})},X=function(){var t=A(),r=Object(n.useState)(t),e=Object(i.a)(r,2),o=e[0],a=e[1],c=Object(n.useState)(Object(u.a)(o.board)),l=Object(i.a)(c,2),b=l[0],j=l[1],p=Object(n.useState)(o.solution),v=Object(i.a)(p,2),O=v[0],h=v[1];return Object(n.useEffect)((function(){j(Object(u.a)(o.board)),h(o.solution)}),[o]),Object(d.jsxs)("div",{className:"sudoku-container",children:[Object(d.jsx)(f,{board:b}),Object(d.jsx)("div",{className:"sudoku-board-wrapper",children:Object(d.jsx)("div",{className:"sudoku-board",children:b&&b.map((function(t,r){return Object(d.jsx)(w,{array:t,row:r,board:b,setBoard:j},Object(s.uuid)())}))})}),Object(d.jsx)(W,{board:b,solution:O,setBoard:j,setSudoku:a})]})},Y=function(){return Object(d.jsx)("div",{className:"App sudoku-wrapper",children:Object(d.jsx)(X,{})})},Z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,103)).then((function(r){var e=r.getCLS,n=r.getFID,o=r.getFCP,a=r.getLCP,c=r.getTTFB;e(t),n(t),o(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[74,1,2]]]);
//# sourceMappingURL=main.823655ae.chunk.js.map