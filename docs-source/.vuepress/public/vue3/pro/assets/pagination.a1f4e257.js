
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a0 as o}from"./vendor.626824a3.js";const e=o({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function t(r={}){const a={from:(e.value.page-1)*e.value.size,limit:e.value.size};return e.value.sort&&e.value.order&&(a.sort=e.value.sort,a.order=e.value.order),Object.assign(a,r),a}function u(r){return new Promise(a=>{e.value.size=r,a()})}function i(r){return new Promise(a=>{e.value.page=r,a()})}function l(r,a){return new Promise(n=>{e.value.sort=r,e.value.order=a==="ascending"?"asc":"desc",n()})}export{i as a,l as b,t as g,u as o,e as p};
