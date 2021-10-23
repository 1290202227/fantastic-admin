
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a1 as o}from"./vendor.9f126d3c.js";const e=o({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function t(a={}){const r={from:(e.value.page-1)*e.value.size,limit:e.value.size};return e.value.sort&&e.value.order&&(r.sort=e.value.sort,r.order=e.value.order),Object.assign(r,a),r}function u(a){return new Promise(r=>{e.value.size=a,r()})}function i(a){return new Promise(r=>{e.value.page=a,r()})}function l(a,r){return new Promise(n=>{e.value.sort=a,e.value.order=r==="ascending"?"asc":"desc",n()})}export{i as a,l as b,t as g,u as o,e as p};
