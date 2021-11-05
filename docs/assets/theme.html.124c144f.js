import{e as s}from"./app.08c37072.js";const n={},a=s('<h1 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h1><h2 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h2><p>基础版主题样式存放在 <code>/src/assets/styles/resources/themes.scss</code> 文件中，均为 scss 变量，修改后即可在页面上查看效果。</p><h2 id="专业版" tabindex="-1"><a class="header-anchor" href="#专业版" aria-hidden="true">#</a> 专业版</h2><p>与基础版不同，专业版默认提供了 6 款主题，在配置文件中就可轻松切换。并且多款主题共存，支持在项目运行时动态切换。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * 主题，默认提供 6 款\n * default 默认\n * vue-cli Vue CLI 风格\n * gitee 码云风格\n * freshness 清新\n * elegant 素雅\n * pure-white 纯白\n */</span>\ntheme<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>\n</code></pre></div><p>如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，在 <code>/src/assets/styles/resources/</code> 目录里， <code>theme-*.scss</code> 即主题样式文件，以默认主题为例：</p><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-default</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token comment">// 主区域背景色</span>\n    <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>\n    <span class="token comment">// 【头部】</span>\n    <span class="token comment">// 头部背景色</span>\n    <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #222b45<span class="token punctuation">,</span>\n    <span class="token comment">// 头部导航文字颜色</span>\n    <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">,</span>\n    <span class="token comment">// 头部导航文字选中颜色</span>\n    <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>\n    <span class="token comment">// 头部导航选中背景色</span>\n    <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #334067<span class="token punctuation">,</span>\n    ...\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>可以看到，默认主题的样式都存放在 <code>$theme-default</code> 这个变量里，所以如果想创建一个新主题，你可以将 <code>theme-default.scss</code> 文件复制一份，例如我们要增加一个红色主题，则需要将文件名改为 <code>theme-red.scss</code> ，然后将文件里的 <code>$theme-default</code> 变量名也修改为 <code>$theme-red</code> ，最后打开 <code>/src/assets/styles/resources/themes.scss</code> 文件，然后增加以下一行代码即可。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$themes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token property">default</span><span class="token punctuation">:</span> <span class="token variable">$theme-default</span><span class="token punctuation">,</span>\n    <span class="token property">vue-cli</span><span class="token punctuation">:</span> <span class="token variable">$theme-vue-cli</span><span class="token punctuation">,</span>\n    <span class="token property">gitee</span><span class="token punctuation">:</span> <span class="token variable">$theme-gitee</span><span class="token punctuation">,</span>\n    <span class="token property">freshness</span><span class="token punctuation">:</span> <span class="token variable">$theme-freshness</span><span class="token punctuation">,</span>\n    <span class="token property">elegant</span><span class="token punctuation">:</span> <span class="token variable">$theme-elegant</span><span class="token punctuation">,</span>\n    <span class="token property">pure-white</span><span class="token punctuation">:</span> <span class="token variable">$theme-pure-white</span><span class="token punctuation">,</span>\n\t<span class="token property">red</span><span class="token punctuation">:</span> <span class="token variable">$theme-red</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最后在框架配置里修改主题为 <code>red</code> 就可以调用这个我们创建的主题了。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>theme<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>\n</code></pre></div>',12);n.render=function(s,n){return a};export{n as default};
