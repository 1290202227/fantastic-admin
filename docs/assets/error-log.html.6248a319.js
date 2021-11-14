import{r as a,c as e,a as s,b as r,F as o,d as p,e as t,o as n}from"./app.a395bd62.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const d={},l={id:"错误日志",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#错误日志","aria-hidden":"true"},"#",-1),u=p(" 错误日志 "),g=t('<p>首先需要在框架配置里开启错误日志。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>enableErrorLog<span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre></div><p>然后需要到 <code>/src/util/error.log.js</code> 文件里编写业务代码，框架为方便演示，将错误日志记录在 <code>sessionStorage</code> 里。</p><p>开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。</p><p>由于开启错误日志监控后，所有的 js 错误都不会在控制台里显示，所以在开发环境下即使开启错误日志也不会被启用，如果需要在开发环境下测试，可在 <code>/src/util/error.log.js</code> 里修改开启的条件判断。</p>',5);var j=c(d,[["render",function(p,t){const c=a("Badge");return n(),e(o,null,[s("h1",l,[i,u,r(c,{type:"tip",text:"专业版",vertical:"top"})]),g],64)}]]);export{j as default};
