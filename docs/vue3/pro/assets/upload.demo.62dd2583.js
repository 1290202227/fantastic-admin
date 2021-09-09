
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.ae222503.js";import{_ as a}from"./index.f03e52fd.js";import{H as s,I as i,h as l,$ as n,r,l as o,J as c,V as u,U as d,m as p,Z as m,S as h,K as g,L as f,M as y,Y as v,s as x,n as b,R as w}from"./vendor.7707186e.js";s("data-v-fbebcdee");const $={class:"upload-container"},k={class:"mask"},S={class:"actions"},_=["onClick"],j=[g("i",{class:"el-icon-zoom-in"},null,-1)],z=["onClick"],O=[g("i",{class:"el-icon-delete"},null,-1)],I=["onClick"],C=[g("i",{class:"el-icon-back"},null,-1)],V=["onClick"],U=[g("i",{class:"el-icon-right"},null,-1)],B=[g("i",{class:"el-icon-plus"},null,-1)],M={key:0,class:"el-upload__tip"},N={style:{display:"inline-block"}};i();const A={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const a=e,{proxy:s}=l(),i=n({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function w(){i.value.imageViewerVisible=!1}function A(e,s){let i=a.url;"left"==s&&0!=e&&(i[e]=i.splice(e-1,1,i[e])[0]),"right"==s&&e!=i.length-1&&(i[e]=i.splice(e+1,1,i[e])[0]),t("update:url",i)}function K(e){const t=e.name.split("."),l=t[t.length-1],n=a.ext.indexOf(l)>=0,r=e.size/1024/1024<a.size;return n||s.$message.error(`上传图片只支持 ${a.ext.join(" / ")} 格式！`),r||s.$message.error(`上传图片大小不能超过 ${a.size}MB！`),n&&r&&(i.value.progress.preview=URL.createObjectURL(e)),n&&r}function T(e){i.value.progress.percent=~~e.percent,100==i.value.progress.percent&&(i.value.progress.preview="",i.value.progress.percent=0)}function E(e){t("on-success",e)}return(s,l)=>{const n=r("el-image"),L=r("el-progress"),R=r("el-upload"),q=r("el-alert"),F=r("el-image-viewer");return o(),c("div",$,[(o(!0),c(u,null,d(e.url,((s,l)=>(o(),c("div",{key:l,class:"images"},[l<e.max?(o(),p(n,{key:0,src:s,style:m(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):h("v-if",!0),g("div",k,[g("div",S,[g("span",{title:"预览",onClick:e=>function(e){i.value.dialogImageIndex=e,i.value.imageViewerVisible=!0}(l)},j,8,_),g("span",{title:"移除",onClick:e=>function(e){let s=a.url;s.splice(e,1),t("update:url",s)}(l)},O,8,z),f(g("span",{title:"左移",class:v({disabled:0==l}),onClick:e=>A(l,"left")},C,10,I),[[y,e.url.length>1]]),f(g("span",{title:"右移",class:v({disabled:l==e.url.length-1}),onClick:e=>A(l,"right")},U,10,V),[[y,e.url.length>1]])])])])))),128)),f(x(R,{"show-file-list":!1,headers:e.headers,action:e.action,data:i.value,name:e.name,"before-upload":K,"on-progress":T,"on-success":E,drag:"",class:"images-upload"},{default:b((()=>[g("div",{class:"image-slot",style:m(`width:${e.width}px;height:${e.height}px;`)},B,4),f(g("div",{class:"progress",style:m(`width:${e.width}px;height:${e.height}px;`)},[x(n,{src:i.value.progress.preview,style:m(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),x(L,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:i.value.progress.percent},null,8,["width","percentage"])],4),[[y,i.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[y,e.url.length<e.max]]),e.notip?h("v-if",!0):(o(),c("div",M,[g("div",N,[x(q,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),i.value.imageViewerVisible?(o(),p(F,{key:1,"url-list":e.url,"initial-index":i.value.dialogImageIndex,onClose:w},null,8,["url-list","initial-index"])):h("v-if",!0)])}},__scopeId:"data-v-fbebcdee"};s("data-v-243b3ad6");const K=g("div",{class:"slot"},[g("i",{class:"el-icon-upload"}),g("div",{class:"el-upload__text"},[w("将文件拖到此处，或"),g("em",null,"点击上传")])],-1),T={key:0,class:"el-upload__tip"},E={style:{display:"inline-block"}};i();const L={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:t}){const a=e,{proxy:s}=l();function i(e){const t=e.name.split("."),i=t[t.length-1],l=a.ext.indexOf(i)>=0,n=e.size/1024/1024<a.size;return l||s.$message.error(`上传文件只支持 ${a.ext.join(" / ")} 格式！`),n||s.$message.error(`上传文件大小不能超过 ${a.size}MB！`),l&&n}function n(){s.$message.warning("文件上传超过限制")}function u(e,a){t("on-success",e,a)}return(t,a)=>{const s=r("el-alert"),l=r("el-upload");return o(),p(l,{action:e.action,data:e.data,name:e.name,"before-upload":i,"on-exceed":n,"on-success":u,"file-list":e.files,limit:e.max,drag:""},{tip:b((()=>[e.notip?h("v-if",!0):(o(),c("div",T,[g("div",E,[x(s,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:b((()=>[K])),_:1},8,["action","data","name","file-list","limit"])}},__scopeId:"data-v-243b3ad6"},R={data:()=>({image:"",images:["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}};R.render=function(s,i,l,n,r,u){const d=e,p=t,m=a,h=A,g=L;return o(),c("div",null,[x(d,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),x(m,{title:"单图上传"},{default:b((()=>[x(p,{url:r.image,"onUpdate:url":i[0]||(i[0]=e=>r.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:u.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),x(m,{title:"多图上传（默认最多3张）"},{default:b((()=>[x(h,{url:r.images,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:u.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),x(m,{title:"文件上传（默认最多3个）"},{default:b((()=>[x(g,{files:r.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:u.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])};export{R as default};
