import{r as a,c as n,a as s,b as e,F as r,e as t,d as p,o}from"./app.2ed959af.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const c={},l=t('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>默认提供开发环境、测试环境和生产环境三套配置，分别对应根目录下 <code>.env.development</code> 、<code>.env.test</code> 和 <code>.env.production</code> 文件。</p><p>如果要新增一个环境配置，或者环境变量，请保证原配置文件里默认提供的环境变量名不变，避免因修改环境变量名导致运行或打包错误。</p>',4),d=p("扩展阅读：《"),u={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html",target:"_blank",rel:"noopener noreferrer"},h=p("Vue CLI - 环境变量和模式"),b=p("》"),v=t('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>环境配置修改后，需要重新运行才会生效</p></div><h2 id="框架配置" tabindex="-1"><a class="header-anchor" href="#框架配置" aria-hidden="true">#</a> 框架配置</h2><p>框架所有可选的配置信息都在 <code>/src/settings.js</code> 文件里统一存放。例如你想要修改布局为定宽居中布局，则修改并设置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> globalSettings <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token operator">...</span>\n\tlayout<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>\n\t<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',4);var g=i(c,[["render",function(t,p){const i=a("OutboundLink");return o(),n(r,null,[l,s("p",null,[d,s("a",u,[h,e(i)]),b]),v],64)}]]);export{g as default};
