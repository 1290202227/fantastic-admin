
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as C}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,m as h,n as I,q as r,Q as x,R as s,t as a,Z as k,_ as N,$ as V,Y as D,i as B,P as F,a3 as P,a2 as Q,a6 as S,S as z,T as O,a7 as U}from"./vendor.4daee5e9.js";import{_ as Y}from"./index.cc6d1ed1.js";import{_ as Z}from"./index.29905634.js";import{_ as G}from"./index.a912659c.js";const H=e=>(N("data-v-123b0450"),e=e(),V(),e),J={class:"slot"},W=H(()=>s("div",{class:"el-upload__text"},[D("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),s("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),X={key:0,class:"el-upload__tip"},ee={style:{display:"inline-block"}},te={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=B();function n(p){const u=p.name.split("."),$=u[u.length-1],f=c.ext.indexOf($)>=0,d=p.size/1024/1024<c.size;return f||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),d||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),f&&d}function y(){v.$message.warning("\u6587\u4EF6\u4E0A\u4F20\u8D85\u8FC7\u9650\u5236")}function w(p,u){o("on-success",p,u)}return(p,u)=>{const $=l("el-icon-upload-filled"),f=l("el-icon"),d=l("el-alert"),t=l("el-upload");return h(),I(t,{action:e.action,data:e.data,name:e.name,"before-upload":n,"on-exceed":y,"on-success":w,"file-list":e.files,limit:e.max,drag:""},{tip:r(()=>[e.notip?k("v-if",!0):(h(),x("div",X,[s("div",ee,[a(d,{title:`\u4E0A\u4F20\u6587\u4EF6\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u4E14\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u4E2A`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))]),default:r(()=>[s("div",J,[a(f,{class:"el-icon--upload"},{default:r(()=>[a($)]),_:1}),W])]),_:1},8,["action","data","name","file-list","limit"])}}};var ae=C(te,[["__scopeId","data-v-123b0450"]]);const ne=e=>(N("data-v-2f7d9ed6"),e=e(),V(),e),le={class:"upload-container"},se={class:"mask"},ie={class:"actions"},oe=["onClick"],ce=["onClick"],ue=["onClick"],re=["onClick"],de=ne(()=>s("i",{class:"el-icon-plus"},null,-1)),pe=[de],me={key:0,class:"el-upload__tip"},he={style:{display:"inline-block"}},fe={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=B(),n=F({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function y(t){n.value.dialogImageIndex=t,n.value.imageViewerVisible=!0}function w(){n.value.imageViewerVisible=!1}function p(t){let m=c.url;m.splice(t,1),o("update:url",m)}function u(t,m){let i=c.url;m=="left"&&t!=0&&(i[t]=i.splice(t-1,1,i[t])[0]),m=="right"&&t!=i.length-1&&(i[t]=i.splice(t+1,1,i[t])[0]),o("update:url",i)}function $(t){const m=t.name.split("."),i=m[m.length-1],b=c.ext.indexOf(i)>=0,g=t.size/1024/1024<c.size;return b||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),g||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),b&&g&&(n.value.progress.preview=URL.createObjectURL(t)),b&&g}function f(t){n.value.progress.percent=~~t.percent}function d(t){n.value.progress.preview="",n.value.progress.percent=0,o("on-success",t)}return(t,m)=>{const i=l("el-image"),b=l("el-icon-zoom-in"),g=l("el-icon"),T=l("el-icon-delete"),E=l("el-icon-back"),M=l("el-icon-right"),A=l("el-progress"),q=l("el-upload"),K=l("el-alert"),L=l("el-image-viewer");return h(),x("div",le,[(h(!0),x(P,null,Q(e.url,(R,_)=>(h(),x("div",{key:_,class:"images"},[_<e.max?(h(),I(i,{key:0,src:R,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):k("v-if",!0),s("div",se,[s("div",ie,[s("span",{title:"\u9884\u89C8",onClick:j=>y(_)},[a(g,null,{default:r(()=>[a(b)]),_:1})],8,oe),s("span",{title:"\u79FB\u9664",onClick:j=>p(_)},[a(g,null,{default:r(()=>[a(T)]),_:1})],8,ce),z(s("span",{title:"\u5DE6\u79FB",class:U({disabled:_==0}),onClick:j=>u(_,"left")},[a(g,null,{default:r(()=>[a(E)]),_:1})],10,ue),[[O,e.url.length>1]]),z(s("span",{title:"\u53F3\u79FB",class:U({disabled:_==e.url.length-1}),onClick:j=>u(_,"right")},[a(g,null,{default:r(()=>[a(M)]),_:1})],10,re),[[O,e.url.length>1]])])])]))),128)),z(a(q,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":$,"on-progress":f,"on-success":d,drag:"",class:"images-upload"},{default:r(()=>[s("div",{class:"image-slot",style:S(`width:${e.width}px;height:${e.height}px;`)},pe,4),z(s("div",{class:"progress",style:S(`width:${e.width}px;height:${e.height}px;`)},[a(i,{src:n.value.progress.preview,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),a(A,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:n.value.progress.percent},null,8,["width","percentage"])],4),[[O,n.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),[[O,e.url.length<e.max]]),e.notip?k("v-if",!0):(h(),x("div",me,[s("div",he,[a(K,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}\uFF0C\u4E14\u56FE\u7247\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u5F20`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),n.value.imageViewerVisible?(h(),I(L,{key:1,"url-list":e.url,"initial-index":n.value.dialogImageIndex,onClose:w},null,8,["url-list","initial-index"])):k("v-if",!0)])}}};var ge=C(fe,[["__scopeId","data-v-2f7d9ed6"]]);const _e={data(){return{image:"",images:[],files:[{name:"\u6D4B\u8BD5\u6587\u4EF6.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){e.error==""?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){e.error==""?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,o){this.files.push({name:o.name,url:e.error==""?e.data.path:""}),this.$nextTick(()=>{e.error!=""&&(this.$message.warning(e.error),this.files.pop())})}}};function ve(e,o,c,v,n,y){const w=G,p=Z,u=Y,$=ge,f=ae;return h(),x("div",null,[a(w,{title:"\u4E0A\u4F20",content:"ImageUpload / ImagesUpload / FileUpload"}),a(u,{title:"\u5355\u56FE\u4E0A\u4F20"},{default:r(()=>[a(p,{url:n.image,"onUpdate:url":o[0]||(o[0]=d=>n.image=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess1},null,8,["url","onOnSuccess"])]),_:1}),a(u,{title:"\u591A\u56FE\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u5F20\uFF09"},{default:r(()=>[a($,{url:n.images,"onUpdate:url":o[1]||(o[1]=d=>n.images=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess2},null,8,["url","onOnSuccess"])]),_:1}),a(u,{title:"\u6587\u4EF6\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u4E2A\uFF09"},{default:r(()=>[a(f,{files:n.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess3},null,8,["files","onOnSuccess"])]),_:1})])}var ke=C(_e,[["render",ve]]);export{ke as default};
