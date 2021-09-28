
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.afd122f8.js";import{_ as t}from"./index.0c60f4e3.js";import{_ as a}from"./index.2f66b5c7.js";import{K as s,r as i,a as l,n,P as r,Q as o,c,I as p,y as u,q as d,s as m,v as h,H as g,t as f,x as v,z as y,A as x,W as w,F as $}from"./vendor.8d92a282.js";import{_ as b}from"./plugin-vue_export-helper.5a098b48.js";const k=e=>(y("data-v-6a57666a"),e=e(),x(),e),_={class:"upload-container"},S={class:"mask"},j={class:"actions"},z=["onClick"],O=[k((()=>d("i",{class:"el-icon-zoom-in"},null,-1)))],I=["onClick"],C=[k((()=>d("i",{class:"el-icon-delete"},null,-1)))],V=["onClick"],B=[k((()=>d("i",{class:"el-icon-back"},null,-1)))],N=["onClick"],U=[k((()=>d("i",{class:"el-icon-right"},null,-1)))],A=[k((()=>d("i",{class:"el-icon-plus"},null,-1)))],M={key:0,class:"el-upload__tip"},K={style:{display:"inline-block"}};var T=b({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const a=e,{proxy:y}=w(),x=s({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function $(){x.value.imageViewerVisible=!1}function b(e,s){let i=a.url;"left"==s&&0!=e&&(i[e]=i.splice(e-1,1,i[e])[0]),"right"==s&&e!=i.length-1&&(i[e]=i.splice(e+1,1,i[e])[0]),t("update:url",i)}function k(e){const t=e.name.split("."),s=t[t.length-1],i=a.ext.indexOf(s)>=0,l=e.size/1024/1024<a.size;return i||y.$message.error(`上传图片只支持 ${a.ext.join(" / ")} 格式！`),l||y.$message.error(`上传图片大小不能超过 ${a.size}MB！`),i&&l&&(x.value.progress.preview=URL.createObjectURL(e)),i&&l}function T(e){x.value.progress.percent=~~e.percent,100==x.value.progress.percent&&(x.value.progress.preview="",x.value.progress.percent=0)}function q(e){t("on-success",e)}return(s,y)=>{const w=i("el-image"),E=i("el-progress"),F=i("el-upload"),L=i("el-alert"),R=i("el-image-viewer");return l(),n("div",_,[(l(!0),n(r,null,o(e.url,((s,i)=>(l(),n("div",{key:i,class:"images"},[i<e.max?(l(),c(w,{key:0,src:s,style:p(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):u("v-if",!0),d("div",S,[d("div",j,[d("span",{title:"预览",onClick:e=>function(e){x.value.dialogImageIndex=e,x.value.imageViewerVisible=!0}(i)},O,8,z),d("span",{title:"移除",onClick:e=>function(e){let s=a.url;s.splice(e,1),t("update:url",s)}(i)},C,8,I),m(d("span",{title:"左移",class:g({disabled:0==i}),onClick:e=>b(i,"left")},B,10,V),[[h,e.url.length>1]]),m(d("span",{title:"右移",class:g({disabled:i==e.url.length-1}),onClick:e=>b(i,"right")},U,10,N),[[h,e.url.length>1]])])])])))),128)),m(f(F,{"show-file-list":!1,headers:e.headers,action:e.action,data:x.value,name:e.name,"before-upload":k,"on-progress":T,"on-success":q,drag:"",class:"images-upload"},{default:v((()=>[d("div",{class:"image-slot",style:p(`width:${e.width}px;height:${e.height}px;`)},A,4),m(d("div",{class:"progress",style:p(`width:${e.width}px;height:${e.height}px;`)},[f(w,{src:x.value.progress.preview,style:p(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),f(E,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:x.value.progress.percent},null,8,["width","percentage"])],4),[[h,x.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[h,e.url.length<e.max]]),e.notip?u("v-if",!0):(l(),n("div",M,[d("div",K,[f(L,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),x.value.imageViewerVisible?(l(),c(R,{key:1,"url-list":e.url,"initial-index":x.value.dialogImageIndex,onClose:$},null,8,["url-list","initial-index"])):u("v-if",!0)])}}},[["__scopeId","data-v-6a57666a"]]);const q=(e=>(y("data-v-6c490d82"),e=e(),x(),e))((()=>d("div",{class:"slot"},[d("i",{class:"el-icon-upload"}),d("div",{class:"el-upload__text"},[$("将文件拖到此处，或"),d("em",null,"点击上传")])],-1))),E={key:0,class:"el-upload__tip"},F={style:{display:"inline-block"}};var L=b({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:t}){const a=e,{proxy:s}=w();function r(e){const t=e.name.split("."),i=t[t.length-1],l=a.ext.indexOf(i)>=0,n=e.size/1024/1024<a.size;return l||s.$message.error(`上传文件只支持 ${a.ext.join(" / ")} 格式！`),n||s.$message.error(`上传文件大小不能超过 ${a.size}MB！`),l&&n}function o(){s.$message.warning("文件上传超过限制")}function p(e,a){t("on-success",e,a)}return(t,a)=>{const s=i("el-alert"),m=i("el-upload");return l(),c(m,{action:e.action,data:e.data,name:e.name,"before-upload":r,"on-exceed":o,"on-success":p,"file-list":e.files,limit:e.max,drag:""},{tip:v((()=>[e.notip?u("v-if",!0):(l(),n("div",E,[d("div",F,[f(s,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:v((()=>[q])),_:1},8,["action","data","name","file-list","limit"])}}},[["__scopeId","data-v-6c490d82"]]);var R=b({data:()=>({image:"",images:["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}},[["render",function(s,i,r,o,c,p){const u=e,d=t,m=a,h=T,g=L;return l(),n("div",null,[f(u,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),f(m,{title:"单图上传"},{default:v((()=>[f(d,{url:c.image,"onUpdate:url":i[0]||(i[0]=e=>c.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),f(m,{title:"多图上传（默认最多3张）"},{default:v((()=>[f(h,{url:c.images,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),f(m,{title:"文件上传（默认最多3个）"},{default:v((()=>[f(g,{files:c.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{R as default};
