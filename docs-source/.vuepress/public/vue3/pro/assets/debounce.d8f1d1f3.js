
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as t}from"./index.c535d87f.js";import{b as s,t as n}from"./index.e7a764ff.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l,H as i,s as c,n as r,I as u,S as d}from"./vendor.e59ac5d6.js";const f={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},m=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),p=d("连续点击我，只会执行最后一次点击事件，立即执行"),b=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),_=d("连续点击我，每一秒只会执行一次点击事件");var g=o(f,[["render",function(s,n,o,u,d,f){const g=e,k=a("el-button"),C=t;return l(),i("div",null,[c(g,{title:"防抖节流"}),c(C,{title:"防抖：debounce"},{default:r((()=>[m,c(k,{onClick:f.debounce},{default:r((()=>[p])),_:1},8,["onClick"]),c(k,{onClick:f.debounce2},{default:r((()=>[b])),_:1},8,["onClick"])])),_:1}),c(C,{title:"节流：throttle"},{default:r((()=>[h,c(k,{onClick:f.throttle},{default:r((()=>[_])),_:1},8,["onClick"])])),_:1})])}]]);export{g as default};
