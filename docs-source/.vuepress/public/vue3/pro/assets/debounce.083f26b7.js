
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.29752973.js";import{b as s,t as n}from"./index.13e5accc.js";import{r as o,o as a,z as i,i as l,w as c,A as u,I as d}from"./vendor.b5a7373b.js";const r={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},f=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),m=d("连续点击我，只会执行最后一次点击事件，立即执行"),b=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),p=d("连续点击我，每一秒只会执行一次点击事件");r.render=function(s,n,u,d,r,_){const g=e,k=o("el-button"),C=t;return a(),i("div",null,[l(g,{title:"防抖节流"}),l(C,{title:"防抖：debounce"},{default:c((()=>[f,l(k,{onClick:_.debounce},{default:c((()=>[m])),_:1},8,["onClick"]),l(k,{onClick:_.debounce2},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1}),l(C,{title:"节流：throttle"},{default:c((()=>[h,l(k,{onClick:_.throttle},{default:c((()=>[p])),_:1},8,["onClick"])])),_:1})])};export{r as default};
