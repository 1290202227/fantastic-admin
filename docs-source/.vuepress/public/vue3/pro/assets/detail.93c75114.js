
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.f03e52fd.js";import{_ as a}from"./index.ed5e0ab2.js";import s from"./index.365da6e2.js";import{H as i,I as o,r,l,J as n,s as d,n as m,R as u}from"./vendor.7707186e.js";import"./index.fc4f5d03.js";import"./index.9c2de28b.js";import"./index.72672077.js";const f={name:"PagesExampleDeliveryDetail",components:{DetailForm:s},data:()=>({}),mounted(){},methods:{onSubmit(){this.$refs.form.submit((()=>{this.$eventBus.emit("get-data-list"),this.$router.back()}))},onCancel(){this.$store.state.settings.enableTabbar&&!this.$store.state.settings.enableTabbarMergeTabs?this.$tabbar.close({name:"pagesExampleShopDeliveryList"}):this.$router.push({name:"pagesExampleShopDeliveryList"}),this.$router.back()}}};i("data-v-63093cc4");const c=u("返 回"),p=u("提 交"),b=u("取 消");o(),f.render=function(s,i,o,u,f,h){const _=r("el-button"),x=e,$=r("DetailForm"),g=r("el-col"),v=r("el-row"),j=t,C=a;return l(),n("div",null,[d(x,{title:"pagesExampleShopDeliveryCreate"==s.$route.name?"新增运费模版":"编辑运费模版"},{default:m((()=>[d(_,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:i[0]||(i[0]=e=>s.$router.go(-1))},{default:m((()=>[c])),_:1})])),_:1},8,["title"]),d(j,null,{default:m((()=>[d(v,null,{default:m((()=>[d(g,{md:24,lg:16},{default:m((()=>[d($,{id:s.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),d(C,null,{default:m((()=>[d(_,{type:"primary",onClick:h.onSubmit},{default:m((()=>[p])),_:1},8,["onClick"]),d(_,{onClick:h.onCancel},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1})])},f.__scopeId="data-v-63093cc4";export{f as default};
