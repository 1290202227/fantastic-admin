
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.281722fb.js";import{_ as t}from"./index.46bcf552.js";import{b as s,t as n}from"./index.15daa332.js";import{r as o,n as a,J as l,q as i,l as d,K as c,R as u}from"./vendor.3dac1dfd.js";const r={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},f=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),m=u("连续点击我，只会执行最后一次点击事件，立即执行"),b=u("连续点击我，只会执行最后一次点击事件，延后执行"),h=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),p=u("连续点击我，每一秒只会执行一次点击事件");r.render=function(s,n,c,u,r,_){const g=e,k=o("el-button"),C=t;return a(),l("div",null,[i(g,{title:"防抖节流"}),i(C,{title:"防抖：debounce"},{default:d((()=>[f,i(k,{onClick:_.debounce},{default:d((()=>[m])),_:1},8,["onClick"]),i(k,{onClick:_.debounce2},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1}),i(C,{title:"节流：throttle"},{default:d((()=>[h,i(k,{onClick:_.throttle},{default:d((()=>[p])),_:1},8,["onClick"])])),_:1})])};export{r as default};
