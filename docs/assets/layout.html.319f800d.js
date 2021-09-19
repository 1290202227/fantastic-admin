import{r as a,o as s,c as n,a as e,b as p,F as l,e as t,d as r}from"./app.a7cff54e.js";const c={},i=e("h1",{id:"布局",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#布局","aria-hidden":"true"},"#"),t(" 布局")],-1),o=e("p",null,[t("通过 5 种导航栏模式和 4 种页宽模式的组合搭配，可实现 20 种布局结构，再搭配默认提供的 6 款主题，"),e("strong",null,"即可实现上百种界面风格"),t("。")],-1),d=e("h2",{id:"导航栏模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导航栏模式","aria-hidden":"true"},"#"),t(" 导航栏模式")],-1),u=e("p",null,"在框架配置里进行设置，可实现 5 种导航栏模式：",-1),h=e("li",null,"顶部模式",-1),g=e("li",null,"侧边栏模式（含主导航）",-1),m=e("li",null,"侧边栏模式（无主导航）",-1),b=t("侧边栏精简模式 "),k=t("顶部精简模式 "),v=e("h3",{id:"顶部模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#顶部模式","aria-hidden":"true"},"#"),t(" 顶部模式")],-1),x=["src"],j=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>menuMode<span class="token operator">:</span> <span class="token string">&#39;head&#39;</span>\n</code></pre></div><h3 id="侧边栏模式-含主导航" tabindex="-1"><a class="header-anchor" href="#侧边栏模式-含主导航" aria-hidden="true">#</a> 侧边栏模式（含主导航）</h3>',2),f=["src"],y=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>menuMode<span class="token operator">:</span> <span class="token string">&#39;side&#39;</span>\n</code></pre></div><h3 id="侧边栏模式-无主导航" tabindex="-1"><a class="header-anchor" href="#侧边栏模式-无主导航" aria-hidden="true">#</a> 侧边栏模式（无主导航）</h3>',2),w=["src"],$=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,[t("menuMode"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'single'"),t("\n")])])],-1),B={id:"侧边栏精简模式",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#侧边栏精简模式","aria-hidden":"true"},"#",-1),W=t(" 侧边栏精简模式 "),_=["src"],F=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,[t("menuMode"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'only-side'"),t("\n")])])],-1),L={id:"顶部精简模式",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#顶部精简模式","aria-hidden":"true"},"#",-1),z=t(" 顶部精简模式 "),A=["src"],C=e("div",{class:"language-javascript ext-js"},[e("pre",{class:"language-javascript"},[e("code",null,[t("menuMode"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'only-head'"),t("\n")])])],-1),D={id:"页宽模式",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#页宽模式","aria-hidden":"true"},"#",-1),G=t(" 页宽模式 "),H=e("p",null,"在框架配置里进行设置，可实现 4 种基于页宽(页面宽度)模式：",-1),I=e("ul",null,[e("li",null,"自适应"),e("li",null,"自适应（有最小宽度）"),e("li",null,"定宽居中"),e("li",null,"定宽居中（有最大宽度）")],-1),J=e("h3",{id:"自适应",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自适应","aria-hidden":"true"},"#"),t(" 自适应")],-1),K=["src"],N=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>appWidthMode<span class="token operator">:</span> <span class="token string">&#39;adaption&#39;</span>\n</code></pre></div><h3 id="自适应-有最小宽度" tabindex="-1"><a class="header-anchor" href="#自适应-有最小宽度" aria-hidden="true">#</a> 自适应（有最小宽度）</h3>',2),O=["src"],P=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>appWidthMode<span class="token operator">:</span> <span class="token string">&#39;adaption-min-width&#39;</span>\n</code></pre></div><h3 id="定宽居中" tabindex="-1"><a class="header-anchor" href="#定宽居中" aria-hidden="true">#</a> 定宽居中</h3>',2),Q=["src"],R=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>appWidthMode<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>\n</code></pre></div><h3 id="定宽居中-有最大宽度" tabindex="-1"><a class="header-anchor" href="#定宽居中-有最大宽度" aria-hidden="true">#</a> 定宽居中（有最大宽度）</h3>',2),S=["src"],T=r('<div class="language-javascript ext-js"><pre class="language-javascript"><code>appWidthMode<span class="token operator">:</span> <span class="token string">&#39;center-max-width&#39;</span>\n</code></pre></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>布局相关的部分宽高变量存放在 <code>./src/assets/styles/resources/layout.scss</code> 文件中。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 这是一个复合变量</span>\n<span class="token comment">// 当页宽模式为 adaption-min-width 时，它代表 最小宽度</span>\n<span class="token comment">// 当页宽模式为 center 时，它代表 固定宽度</span>\n<span class="token comment">// 当页宽模式为 center-max-width 时，它代表 最大宽度</span>\n<span class="token property"><span class="token variable">$g-app-width</span></span><span class="token punctuation">:</span> 1400px<span class="token punctuation">;</span>\n\n<span class="token comment">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span>\n<span class="token property"><span class="token variable">$g-header-width</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token comment">// 头部高度</span>\n<span class="token property"><span class="token variable">$g-header-height</span></span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n<span class="token comment">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span>\n<span class="token property"><span class="token variable">$g-breadcrumb-height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token comment">// 标签栏高度</span>\n<span class="token property"><span class="token variable">$g-tabbar-height</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n<span class="token comment">// 侧边栏宽度</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-width</span></span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-width</span></span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h2><p>本框架兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。</p><p>当页面宽度小于 <code>992px</code> 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。</p><div class="custom-container tip"><p class="custom-container-title">建议</p><p>由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。</p><p>依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。</p></div>',8);c.render=function(t,r){const c=a("Badge");return s(),n(l,null,[i,o,d,u,e("ul",null,[h,g,m,e("li",null,[b,p(c,{type:"tip",text:"专业版",vertical:"top"})]),e("li",null,[k,p(c,{type:"tip",text:"专业版",vertical:"top"})])]),v,e("p",null,[e("img",{src:t.$withBase("/menu-mode-head.png")},null,8,x)]),j,e("p",null,[e("img",{src:t.$withBase("/menu-mode-side.png")},null,8,f)]),y,e("p",null,[e("img",{src:t.$withBase("/menu-mode-single.png")},null,8,w)]),$,e("h3",B,[M,W,p(c,{type:"tip",text:"专业版",vertical:"top"})]),e("p",null,[e("img",{src:t.$withBase("/menu-mode-only-side.png")},null,8,_)]),F,e("h3",L,[q,z,p(c,{type:"tip",text:"专业版",vertical:"top"})]),e("p",null,[e("img",{src:t.$withBase("/menu-mode-only-head.png")},null,8,A)]),C,e("h2",D,[E,G,p(c,{type:"tip",text:"专业版",vertical:"top"})]),H,I,J,e("p",null,[e("img",{src:t.$withBase("/layout_1.gif")},null,8,K)]),N,e("p",null,[e("img",{src:t.$withBase("/layout_2.gif")},null,8,O)]),P,e("p",null,[e("img",{src:t.$withBase("/layout_3.gif")},null,8,Q)]),R,e("p",null,[e("img",{src:t.$withBase("/layout_4.gif")},null,8,S)]),T],64)};export{c as default};