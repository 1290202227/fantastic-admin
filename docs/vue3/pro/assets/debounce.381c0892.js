
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{b as s,t as n}from"./index.e4e8dab3.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l,H as i,s as r,n as u,I as c,S as d}from"./vendor.1e0be253.js";const m={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},f=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),b=d("连续点击我，只会执行最后一次点击事件，立即执行"),p=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),_=d("连续点击我，每一秒只会执行一次点击事件");var g=o(m,[["render",function(s,n,o,c,d,m){const g=e,k=a("el-button"),C=t;return l(),i("div",null,[r(g,{title:"防抖节流"}),r(C,{title:"防抖：debounce"},{default:u((()=>[f,r(k,{onClick:m.debounce},{default:u((()=>[b])),_:1},8,["onClick"]),r(k,{onClick:m.debounce2},{default:u((()=>[p])),_:1},8,["onClick"])])),_:1}),r(C,{title:"节流：throttle"},{default:u((()=>[h,r(k,{onClick:m.throttle},{default:u((()=>[_])),_:1},8,["onClick"])])),_:1})])}]]);export{g as default};
