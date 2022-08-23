(function(){"use strict";var t={6155:function(t,e,n){var o=n(9242),r=n(3396);const c={class:"container col-md-7 col-lg-7 col-xl-5"};function a(t,e){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(n)])}var s=n(89);const i={},l=(0,s.Z)(i,[["render",a]]);var u=l,d=n(2483);const p={class:"mt-5"},m={class:"mb-5"};function h(t,e,n,o,c,a){const s=(0,r.up)("Header"),i=(0,r.up)("Tech"),l=(0,r.up)("Backend"),u=(0,r.up)("About"),d=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",p,[(0,r.Wm)(s)]),(0,r._)("section",null,[(0,r.Wm)(i)]),(0,r._)("section",null,[(0,r.Wm)(l)]),(0,r._)("section",m,[(0,r.Wm)(u)]),(0,r._)("section",null,[(0,r.Wm)(d)])],64)}const g={class:"container text-light"},v=(0,r.uE)('<header class="row d-grid justify-content-center pt-3 mb-4"><div class="text-center"><h1 class="fs-1 text-uppercase mb-0">Carlos Aguilera</h1><h5 class="fs-5 text-muted">Software Engineer</h5></div></header><div class="row ps-lg-5 pe-lg-5 justify-content-center text-center"><img src="HunkPic.png" class="col-2 img-thumbnail border border-0 p-0 rounded-pill mb-5" alt="Hunk Los"><p class="text-break"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae quis at cum ipsa impedit! Labore amet ipsa sequi incidunt commodi ex veritatis, molestiae beatae corrupti? Qui libero vitae dolores. </p><p class="text-break"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae quis at cum ipsa impedit! </p></div>',2),b=[v];function f(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",g,b)}var w={name:"Header-V"};const _=(0,s.Z)(w,[["render",f]]);var y=_;const j=t=>((0,r.dD)("data-v-7844b436"),t=t(),(0,r.Cn)(),t),x={class:"container-fluid mt-5 text-white"},k=j((()=>(0,r._)("div",{class:"row text-center"},[(0,r._)("h4",{class:"fst-italic mb-3"},"Technologies"),(0,r._)("hr",{class:"border border-1"})],-1))),C={class:"row ps-lg-4 pe-lg-4"},P=["src","alt"];function D(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",x,[k,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.Techs,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"col-1 m-2 m-lg-0 mb-lg-2",key:t.name},[(0,r._)("img",{src:t.image_path,alt:t.name,width:"30",height:"30"},null,8,P)])))),128))])])}var T=n(6265),O=n.n(T);const H=async()=>{try{const t=await O().get("/api/tech");return t.data}catch(t){console.log(t)}};var Z=H,W={name:"Tech-V",data(){return{Techs:[]}},async mounted(){this.Techs=await Z()}};const B=(0,s.Z)(W,[["render",D],["__scopeId","data-v-7844b436"]]);var L=B;const V={class:"container-fluid text-white mt-5"},A=(0,r._)("div",{class:"row text-center"},[(0,r._)("h4",{class:"fst-italic mb-3"},"Backend Projects"),(0,r._)("hr",{class:"border border-1"})],-1);function G(t,e,n,o,c,a){const s=(0,r.up)("Projects");return(0,r.wg)(),(0,r.iD)("div",V,[A,(0,r.Wm)(s,{projects:c.projects},null,8,["projects"])])}var q=n(2482);class I{}(0,q.Z)(I,"GetProjectsByCategory",(async t=>{try{const e=await O().get(`/api/projects/${t}`);return e.data}catch(e){console.log(e)}})),(0,q.Z)(I,"GetProjectByName",(async t=>{try{const e=await O().get(`/api/projects/name/${t}`);return e.data}catch(e){console.log(e)}}));var M=I,S=n(7139);const $={class:"row d-flex text-center justify-content-center"},z=["textContent","onClick"];function F(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.projects,(t=>((0,r.wg)(),(0,r.iD)("p",{key:t.name,class:"btn btn-sm text-light rounded-3",textContent:(0,S.zw)(t.name),type:"button",onClick:e=>this.$router.push(`project/${t.name}`)},null,8,z)))),128))])}var E={name:"Projects-C",props:{projects:{type:Array,required:!0}}};const K=(0,s.Z)(E,[["render",F]]);var Y=K,N={name:"Backend-V",components:{Projects:Y},data(){return{projects:[]}},async mounted(){this.projects=await M.GetProjectsByCategory("backend")}};const R=(0,s.Z)(N,[["render",G]]);var Q=R;const U={class:"container-fluid text-white mt-5"},J=(0,r._)("div",{class:"row text-center"},[(0,r._)("h4",{class:"fst-italic mb-3"},"Web Projects"),(0,r._)("hr",{class:"border border-1"})],-1);function X(t,e,n,o,c,a){const s=(0,r.up)("Projects");return(0,r.wg)(),(0,r.iD)("div",U,[J,(0,r.Wm)(s,{projects:c.projects},null,8,["projects"])])}var tt={name:"Web-V",data(){return{projects:[]}},components:{Projects:Y},async mounted(){this.projects=await M.GetProjectsByCategory("web")}};const et=(0,s.Z)(tt,[["render",X]]);var nt=et;const ot={class:"container-fluid mt-5 pt-5 mb-3 pb-5 text-white"},rt={class:"row text-center justify-content-center mt-5 mb-4"},ct=["href"],at=["src","alt"],st=(0,r._)("p",{class:"fs-6 text-muted text-center"},[(0,r._)("small",null," © 2022 Carlos Aguilera ")],-1);function it(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",ot,[(0,r._)("div",rt,[(0,r._)("button",{class:"btn btn-sm col-6 col-md-4 col-lg-4 col-xl-4 p-0 text-muted mb-3",onClick:e[0]||(e[0]=(...t)=>a.copy&&a.copy(...t))}," los@caguilera.dev "),(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.socials,(t=>((0,r.wg)(),(0,r.iD)("a",{key:t.name,href:t.url,target:"_blank",class:"m-2"},[(0,r._)("img",{src:t.image_path,alt:t.name,width:"30",height:"30"},null,8,at)],8,ct)))),128))])]),st])}var lt={name:"Footer-V",data(){return{socials:[{name:"Linkedin",url:"https://www.linkedin.com/in/aguilerac/",image_path:"./Linkedin.svg"},{name:"Github",url:"https://github.com/Puwya",image_path:"./Github.svg"},{name:"MonkeyType",url:"https://monkeytype.com/profile/m79cIZ2I3ATVjygkeIK8kbVFByI2",image_path:"./MonkeyType.png"}]}},methods:{copy(){try{navigator.clipboard.writeText("los@caguilera.dev"),alert("Copied")}catch(t){console.log(t)}}}};const ut=(0,s.Z)(lt,[["render",it]]);var dt=ut,pt={name:"Home-V",components:{Header:y,Tech:L,Backend:Q,About:nt,Footer:dt}};const mt=(0,s.Z)(pt,[["render",h]]);var ht=mt;const gt=t=>((0,r.dD)("data-v-72b26384"),t=t(),(0,r.Cn)(),t),vt={class:"container text-white mt-5 pt-5"},bt={class:"row d-flex justify-content-between"},ft={class:"dropdown-center col-3 col-lg-2"},wt=gt((()=>(0,r._)("button",{class:"btn btn-sm text-muted active dropdown-toggle",type:"buttn","data-bs-toggle":"dropdown"}," MORE ",-1))),_t={class:"dropdown-menu bg-dark text-center"},yt=["href"],jt={key:0},xt=["href"],kt={class:"row mt-4 pb-5"},Ct=["textContent"],Pt=["src"],Dt={class:"row mt-5"},Tt=gt((()=>(0,r._)("h5",{class:"text-center text-muted"},"About The Project",-1))),Ot=["textContent"],Ht={class:"row mt-5"},Zt=gt((()=>(0,r._)("h5",{class:"text-center text-muted"},"Creation",-1))),Wt=["textContent"],Bt={key:0,class:"text-center"},Lt=gt((()=>(0,r._)("small",{class:"text-muted"},[(0,r.Uk)("With "),(0,r._)("a",{href:"https://github.com/connor-darling",class:"btn btn-sm text-muted p-0",target:"_blank"}," Connor Darling ")],-1))),Vt=[Lt],At={class:"row mt-5 mb-5"},Gt=["textContent"];function qt(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",vt,[(0,r._)("div",bt,[(0,r._)("button",{class:"btn btn-sm col-2 ms-3 col-lg-1 text-muted active",onClick:e[0]||(e[0]=e=>t.$router.push("/"))}," ← "),(0,r._)("div",ft,[wt,(0,r._)("ul",_t,[(0,r._)("li",null,[(0,r._)("a",{href:c.project.code_link,class:"dropdown-item text-white",target:"_blank"}," Code Repository ",8,yt)]),c.ProjectHasLiveTest?((0,r.wg)(),(0,r.iD)("li",jt,[(0,r._)("a",{href:c.project.test_link,class:"dropdown-item text-white",type:"button",target:"_blank"},"Test Live",8,xt)])):(0,r.kq)("",!0)])])]),(0,r._)("div",kt,[(0,r._)("h2",{class:"text-center col-12",textContent:(0,S.zw)(c.project.name)},null,8,Ct),(0,r._)("video",{src:c.project.video_path,class:"mt-4",autoplay:"",muted:"",loop:""},null,8,Pt)]),(0,r._)("div",Dt,[Tt,(0,r._)("p",{class:"text-center",textContent:(0,S.zw)(c.project.description)},null,8,Ot)]),(0,r._)("div",Ht,[Zt,(0,r._)("p",{class:"text-center",textContent:(0,S.zw)(c.project.creation)},null,8,Wt)]),"Pokemon-Clone"===c.project.name?((0,r.wg)(),(0,r.iD)("p",Bt,Vt)):(0,r.kq)("",!0),(0,r._)("div",At,[(0,r._)("p",{class:"text-center",textContent:(0,S.zw)(c.project.date)},null,8,Gt)])])}var It={name:"Project-V",data(){return{project:{},ProjectHasLiveTest:!1}},async mounted(){const t=await M.GetProjectByName(this.$route.params.project);this.project={name:t[0].name,video_path:t[0].video_path,description:t[0].description,creation:t[0].mini_description,code_link:t[0].code_link,test_link:t[0].test_link,date:t[0].date},this.project.test_link&&(this.ProjectHasLiveTest=!0)}};const Mt=(0,s.Z)(It,[["render",qt],["__scopeId","data-v-72b26384"]]);var St=Mt;const $t=[{path:"/",name:"home",component:ht},{path:"/project/:project",name:"project",component:St}],zt=(0,d.p7)({history:(0,d.r5)(),routes:$t});var Ft=zt;n(2166);(0,o.ri)(u).use(Ft).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,c){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],c=t[u][2];for(var s=!0,i=0;i<o.length;i++)(!1&c||a>=c)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(s=!1,c<a&&(a=c));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[o,r,c]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,c,a=o[0],s=o[1],i=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(i)var u=i(n)}for(e&&e(o);l<a.length;l++)c=a[l],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(u)},o=self["webpackChunkportfolio_cli"]=self["webpackChunkportfolio_cli"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6155)}));o=n.O(o)})();
//# sourceMappingURL=app.6e6dd934.js.map