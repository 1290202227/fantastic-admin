import{r as n,c as s,a,b as p,F as e,d as t,e as c,o}from"./app.918100e1.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const u={},r=a("h1",{id:"全局资源",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#全局资源","aria-hidden":"true"},"#"),t(" 全局资源")],-1),i=a("h2",{id:"图标",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#图标","aria-hidden":"true"},"#"),t(" 图标")],-1),k=t("现在越来越多项目开始使用 SVG 图标做为精灵图的替代品，本框架也提供了 SVG 图标支持，方便使用。推荐去"),d={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},b=t("阿里巴巴矢量图标库"),m=t("下载高质量 SVG 图标。"),g=c('<p>要使用 SVG 图标也很简单，首先将 svg 文件放到 <code>/src/assets/icons/</code> 目录下，然后在页面中就可以通过 <code>&lt;svg-icon /&gt;</code> 组件使用了，name 就是 svg 文件名，如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),h={class:"custom-container tip"},x=a("p",{class:"custom-container-title"},"更多",-1),v=t("专业版支持调用 "),f={href:"https://element.eleme.cn/#/zh-CN/component/icon",target:"_blank",rel:"noopener noreferrer"},y=t("Element Icon"),S=t(" 和 "),w={href:"https://remixicon.com/",target:"_blank",rel:"noopener noreferrer"},q=t("RemixIcon"),T=t(" ，例如："),V=c('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-edit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ri-home-line<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),_=c('<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p>框架用到的图片资源都放在 <code>/src/assets/images/</code> 目录下，可自行新建文件夹方便进行管理。</p><h2 id="精灵图" tabindex="-1"><a class="header-anchor" href="#精灵图" aria-hidden="true">#</a> 精灵图</h2><p>精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>在 HTTP/1.1 下，因<strong>队头阻塞</strong>的问题，如果在一个页面里需要展示多张小图，建议使用精灵图</p><p>但 HTTP/2 的<strong>多路复用</strong>特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图</p></div><p>精灵图原始图片的存放位置位于 <code>/src/assets/sprites/</code> 目录下，注意按文件夹区分。</p><p>项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 <code>.scss</code> 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。</p><p>可通过 <code>@include</code> 直接使用精灵图，无需手动引入 <code>.scss</code> 文件：</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 方法 1</span>\n<span class="token comment">// @include [文件夹名称]-sprite([文件名称]);</span>\n<span class="token selector">.icon </span><span class="token punctuation">{</span>\n    <span class="token keyword">@include</span> <span class="token function">example-sprite</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 方法 2</span>\n<span class="token comment">// @include all-[文件夹名称]-sprites;</span>\n<span class="token keyword">@include</span> all-example-sprites<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最终输出如下（参考）：</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 方法 1 */</span>\n<span class="token selector">.icon</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token property">background-position</span><span class="token punctuation">:</span> 0px 0px<span class="token punctuation">;</span>\n    <span class="token property">background-size</span><span class="token punctuation">:</span> 210px 210px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* 方法 2 */</span>\n<span class="token selector">.example-address-sprites</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n    <span class="token property">background-size</span><span class="token punctuation">:</span> 210px 210px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-feedback-sprites</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token property">background-position</span><span class="token punctuation">:</span> -110px 0<span class="token punctuation">;</span>\n    <span class="token property">background-size</span><span class="token punctuation">:</span> 210px 210px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-payment-sprites</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 -110px<span class="token punctuation">;</span>\n    <span class="token property">background-size</span><span class="token punctuation">:</span> 210px 210px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>如果是小型项目，静态图标不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>文件命名仅支持字母与数字，所有特殊符号均会被转化为 <code>-</code> ，如：</p><ul><li><code>test_123</code> =&gt; <code>test-123</code></li><li><code>test@2x</code> =&gt; <code>test-2x</code></li><li><code>test - 123</code> =&gt; <code>test-123</code></li><li><code>test$%123</code> =&gt; <code>test-123</code></li></ul><p>使用过程中如果发现无法正常展示图片，可检查生成的 <code>.scss</code> 文件，确定在代码中使用的文件名。</p></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>样式存放目录为 <code>/src/assets/styles/</code> ，因为 Vue 的文件特性，单页的样式都写在单个 <code>.vue</code> 文件里，所以我们建议该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>/src/assets/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><p>同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西</p></div>',18);var z=l(u,[["render",function(t,c){const l=n("OutboundLink");return o(),s(e,null,[r,i,a("p",null,[k,a("a",d,[b,p(l)]),m]),g,a("div",h,[x,a("p",null,[v,a("a",f,[y,p(l)]),S,a("a",w,[q,p(l)]),T]),V]),_],64)}]]);export{z as default};
