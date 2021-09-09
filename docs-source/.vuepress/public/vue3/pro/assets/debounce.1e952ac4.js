
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.f03e52fd.js";import{b as s,t as n}from"./index.9c2de28b.js";import{r as o,l,J as i,s as a,n as d,K as u,R as c}from"./vendor.7707186e.js";const f={methods:{debounce:s((function(){this.message()}),1e3),debounce2:s((function(){this.message()}),1e3,!1),throttle:n((function(){this.message()}),1e3),message(){this.$message.success({message:"恭喜你，这是一条成功消息"})}}},r=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),m=c("连续点击我，只会执行最后一次点击事件，立即执行"),b=c("连续点击我，只会执行最后一次点击事件，延后执行"),h=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),p=c("连续点击我，每一秒只会执行一次点击事件");f.render=function(s,n,u,c,f,_){const g=e,k=o("el-button"),C=t;return l(),i("div",null,[a(g,{title:"防抖节流"}),a(C,{title:"防抖：debounce"},{default:d((()=>[r,a(k,{onClick:_.debounce},{default:d((()=>[m])),_:1},8,["onClick"]),a(k,{onClick:_.debounce2},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1}),a(C,{title:"节流：throttle"},{default:d((()=>[h,a(k,{onClick:_.throttle},{default:d((()=>[p])),_:1},8,["onClick"])])),_:1})])};export{f as default};
