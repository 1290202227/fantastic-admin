
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as i}from"./vendor.ab59999c.js";function v(){const e=i({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function a(n={}){const r={from:(e.value.page-1)*e.value.size,limit:e.value.size};return e.value.sort&&e.value.order&&(r.sort=e.value.sort,r.order=e.value.order),Object.assign(r,n),r}function o(n){return new Promise(r=>{e.value.size=n,r()})}function t(n){return new Promise(r=>{e.value.page=n,r()})}function s(n,r){return new Promise(u=>{e.value.sort=n,e.value.order=r==="ascending"?"asc":"desc",u()})}return{pagination:e,getParams:a,onSizeChange:o,onCurrentChange:t,onSortChange:s}}export{v as u};
