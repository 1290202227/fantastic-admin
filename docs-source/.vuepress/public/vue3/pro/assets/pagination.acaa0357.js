
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{$ as e}from"./vendor.e59ac5d6.js";const r=e({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function s(e={}){const s={from:(r.value.page-1)*r.value.size,limit:r.value.size};return r.value.sort&&r.value.order&&(s.sort=r.value.sort,s.order=r.value.order),Object.assign(s,e),s}function a(e){return new Promise((s=>{r.value.size=e,s()}))}function o(e){return new Promise((s=>{r.value.page=e,s()}))}function t(e,s){return new Promise((a=>{r.value.sort=e,r.value.order="ascending"===s?"asc":"desc",a()}))}export{o as a,t as b,s as g,a as o,r as p};
