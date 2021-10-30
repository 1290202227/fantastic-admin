import{r as a,o as s,c as n,a as e,b as t,F as i,d as o,e as p}from"./app.a079641d.js";const c={},d={id:"高级-position-fixed",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#高级-position-fixed","aria-hidden":"true"},"#",-1),r=o(" 高级 position:fixed "),u=p('<p>我们都知道 <code>position:fixed</code> 是相对于浏览器窗口进行定位的，那在本框架中，要如何实现 <code>&lt;FixedActionBar /&gt;</code> 组件这种不管在任何布局场景下，始终固定在右侧内容区域内底部呢？</p><p>专业版已将这块处理封装成一个 HTML 的 data 属性了，就是 <code>data-fixed-calc-width</code> 。如果你有同样的需求，只需在最外层原本要设置 <code>position:fixed</code> 的 DOM 上增加 <code>data-fixed-calc-width</code> 即可。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-fixed-calc-width</span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3);c.render=function(o,p){const c=a("Badge");return s(),n(i,null,[e("h1",d,[l,r,t(c,{type:"tip",text:"专业版",vertical:"top"})]),u],64)};export{c as default};
