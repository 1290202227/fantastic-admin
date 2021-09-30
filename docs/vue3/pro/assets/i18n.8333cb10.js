
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as n}from"./index.c535d87f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as r,H as o,s as i,n as l}from"./vendor.e59ac5d6.js";function s(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"])}},"zh-tw":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試"])}},en:{intro:e=>{const{normalize:n}=e;return n(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])}}}})}const u={data:()=>({page:1,pageSize:100}),methods:{handleSizeChange(e){this.pageSize=e},handleCurrentChange(e){this.page=e}}};s(u);var g=t(u,[["render",function(t,s,u,g,p,c){const h=e,d=a("el-pagination"),m=n;return r(),o("div",null,[i(h,{title:t.$t("route.i18n"),content:t.$t("intro")},null,8,["title","content"]),i(m,{title:"Element 组件"},{default:l((()=>[i(d,{"current-page":p.page,"page-sizes":[100,200,300,400],"page-size":p.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:c.handleSizeChange,onCurrentChange:c.handleCurrentChange},null,8,["current-page","page-size","onSizeChange","onCurrentChange"])])),_:1})])}]]);export{g as default};
