import{r as n,c as s,a,b as t,F as p,d as e,e as o,o as c}from"./app.918100e1.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const r={},u={id:"国际化",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#国际化","aria-hidden":"true"},"#",-1),k=e(" 国际化 "),d=e("框架使用 "),g={href:"https://vue-i18n.intlify.dev/",target:"_blank",rel:"noopener noreferrer"},h=e("vue-i18n"),b=e(" 实现国际化支持。"),q=a("h2",{id:"vscode-扩展",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vscode-扩展","aria-hidden":"true"},"#"),e(" vscode 扩展")],-1),v=e("如果使用 vscode 进行开发，推荐安装 "),m={href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},y=e("i18n Ally"),f=e(" 这个扩展。"),j=a("p",null,"安装该扩展后，代码里可以实时查看对应语言的内容。",-1),w=["src"],x=o('<h2 id="语言选择器" tabindex="-1"><a class="header-anchor" href="#语言选择器" aria-hidden="true">#</a> 语言选择器</h2><p>在框架配置里设置后，会在顶栏里显示语言选择器。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>enableI18n<span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre></div><p>同时还可在框架配置里设置默认语言，可选设置的值参考 <code>/src/locales/lang/</code> 目录下文件名，留空则会根据浏览器语言自动判断，如果找不到对应的语言则使用 <strong>中文(简体)</strong> 兜底。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>defaultLang<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果不想开启国际化，可参考以下设置，该设置表示关闭语言选择器，并以中文(简体)显示。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>enableI18n<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\ndefaultLang<span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span>\n</code></pre></div></div><h2 id="语言包" tabindex="-1"><a class="header-anchor" href="#语言包" aria-hidden="true">#</a> 语言包</h2>',7),L=e("语言包存放在 "),N=a("code",null,"/src/locales/lang/",-1),z=e(" 目录下，因为 Element Plus 本身也有自己的语言包，所以在做国际化支持的时候，框架的语言包文件命名需要和 Element Plus 保持一致，可"),E={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",target:"_blank",rel:"noopener noreferrer"},_=e("点击这里"),P=e("查看 Element Plus 的语言包文件。"),O=o('<p>假设你已经在 <code>/src/locales/lang/</code> 目录下新增并配置好了一个日文语言包 <code>ja.js</code> ，然后你需要到 <code>/src/locales/index.js</code> 文件里做以下调整。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> elementLocaleZhCN <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class="token keyword">import</span> elementLocaleZhTW <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-tw&#39;</span>\n<span class="token keyword">import</span> elementLocaleEn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class="token comment">// 引用 Element Plus 的日文语言包</span>\n<span class="token keyword">import</span> elementLocaleJa <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/ja&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">getElementLocales</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> locales <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> messages<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        locales<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token operator">:</span>\n                Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>locales<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> elementLocaleZhCN<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;labelName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;中文(简体)&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n                <span class="token keyword">break</span>\n            <span class="token keyword">case</span> <span class="token string">&#39;zh-tw&#39;</span><span class="token operator">:</span>\n                Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>locales<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> elementLocaleZhTW<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;labelName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;中文(繁體)&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n                <span class="token keyword">break</span>\n            <span class="token keyword">case</span> <span class="token string">&#39;en&#39;</span><span class="token operator">:</span>\n                Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>locales<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> elementLocaleEn<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;labelName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n                <span class="token keyword">break</span>\n\t\t\t<span class="token comment">// 在这里增加一个 case 选项，其中 labelName 会在语言选择器里显示</span>\n            <span class="token keyword">case</span> <span class="token string">&#39;ja&#39;</span><span class="token operator">:</span>\n                Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>locales<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> elementLocaleJa<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;labelName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;日本語&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n                <span class="token keyword">break</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> locales\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div></div><p>修改完成后，需要重新启动项目才会生效。</p><h2 id="路由设置" tabindex="-1"><a class="header-anchor" href="#路由设置" aria-hidden="true">#</a> 路由设置</h2><p>以中文(简体)为例，打开 <code>/src/locales/lang/zh-cn.json</code> 文件可以看到路由相关的配置，在 <code>route</code> 对象里可以扩展需要开启国际化支持的路由。</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;dashboard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;控制台&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;i18n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国际化&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;登录&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;personal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;editpassword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改密码&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span> <span class="token string">&quot;个人设置&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果需要新增某个路由的国际化支持，光设置好中文(简体)的还不行，其它语言包文件里也要同步添加。当都设置好后，可在该路由的 <code>meta</code> 对象里设置 <code>i18n</code> 参数，例如：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;国际化&#39;</span><span class="token punctuation">,</span>\n    i18n<span class="token operator">:</span> <span class="token string">&#39;route.i18n&#39;</span><span class="token punctuation">,</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;ri-earth-line&#39;</span><span class="token punctuation">,</span>\n    badge<span class="token operator">:</span> <span class="token string">&#39;NEW&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br></div></div><p>强烈建议开启国际化的时候，<code>title</code> 也还是设置，框架的处理逻辑是：</p><p>先查找当前语言包里的配置，如果没有再查找中文(简体)语言包里的设置，如果还没有，则显示 <code>title</code> 的内容，所以 <code>title</code> 算是个缺省项。</p><h2 id="框架设置" tabindex="-1"><a class="header-anchor" href="#框架设置" aria-hidden="true">#</a> 框架设置</h2><p>以中文(简体)为例，打开 <code>/src/locales/lang/zh-cn.json</code> 文件可以看到框架相关的配置，在 <code>app</code> 对象里的就是框架部分的语言信息，如果需要对框架进行二次开发，请在这里扩展。</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户名&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;captcha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;验证码&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;check&quot;</span><span class="token operator">:</span> <span class="token string">&quot;确 认&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;goLogin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;去登录&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;登 录&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;logout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;退出登录&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;newPassword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;新密码&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;个人设置&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;sendCaptcha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;发送验证码&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="单页组件" tabindex="-1"><a class="header-anchor" href="#单页组件" aria-hidden="true">#</a> 单页组件</h2><p>如果每个页面都要做国际化支持，那语言包文件就会变得无比庞大且难以维护，推荐在每个页面组件里使用 <code>&lt;i18n&gt;</code> 自定义块进行语言维护，可访问 <code>/src/views/feature_example/i18n.vue</code> 查看示例。</p><h2 id="与服务端交互" tabindex="-1"><a class="header-anchor" href="#与服务端交互" aria-hidden="true">#</a> 与服务端交互</h2>',16),C=e("所有的请求均会在请求头里带上 "),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"Accept-Language",-1),Z=e(" ，后端可根据这一状态信息做动态数据国际化处理。");var A=l(r,[["render",function(e,o){const l=n("Badge"),r=n("OutboundLink");return c(),s(p,null,[a("h1",u,[i,k,t(l,{type:"tip",text:"专业版",vertical:"top"})]),a("p",null,[d,a("a",g,[h,t(r)]),b]),q,a("p",null,[v,a("a",m,[y,t(r)]),f]),j,a("p",null,[a("img",{src:e.$withBase("/i18n-ally.png")},null,8,w)]),x,a("p",null,[L,N,z,a("a",E,[_,t(r)]),P]),O,a("p",null,[C,a("a",T,[W,t(r)]),Z])],64)}]]);export{A as default};
