webpackJsonp([12],{BiJF:function(e,t){},Egnc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mtWM"),s=n.n(a),o={data:function(){return{users:[],name:"axios",posts2:null,posts1:null,newUser:{}}},methods:{addUser:function(e){this.users.push({name:this.newUser.name,email:this.newUser.email,contacted:!1}),e.preventDefault()},deleteUser:function(e){this.users.splice(this.users.indexOf(e),1)}},created:function(){var e=this;s.a.get("http://jsonplaceholder.typicode.com/posts/1").then(function(t){e.post1=t.data}).catch(function(e){console.log("axios=="+e)}),s.a.all([s.a.get("http://jsonplaceholder.typicode.com/posts/2"),s.a.get("http://jsonplaceholder.typicode.com/users")]).then(s.a.spread(function(t,n){e.users=n.data}))},mounted:function(){}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" 初次遇见 "+e._s(e.name))]),e._v(" "),n("form",{on:{submit:e.addUser}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"Enter name"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"text",placeholder:"Enter eamil"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),e._v(" "),n("input",{attrs:{type:"submit",value:"Submit"}})]),e._v(" "),n("ul",e._l(e.users,function(t){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contacted,expression:"user.contacted"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.contacted)?e._i(t.contacted,null)>-1:t.contacted},on:{change:function(n){var a=t.contacted,s=n.target,o=!!s.checked;if(Array.isArray(a)){var c=e._i(a,null);s.checked?c<0&&e.$set(t,"contacted",a.concat([null])):c>-1&&e.$set(t,"contacted",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(t,"contacted",o)}}}),e._v(" "),n("span",{class:{contacted:t.contacted}},[e._v("\n                "+e._s(t.name)+":"+e._s(t.email)+":"+e._s(t.phone)+"\n          "),n("button",{on:{click:function(n){e.deleteUser(t)}}},[e._v("X")])])])}))])},staticRenderFns:[]};var r=n("VU/8")(o,c,!1,function(e){n("BiJF")},"data-v-5bd7e353",null);t.default=r.exports}});
//# sourceMappingURL=12.82f11efb69d96ac56b75.js.map