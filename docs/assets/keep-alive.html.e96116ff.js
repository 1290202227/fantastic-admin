import{r as n,c as s,a,b as t,w as p,F as o,d as e,e as r,o as c}from"./app.49354eb1.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=a("h1",{id:"页面缓存",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#页面缓存","aria-hidden":"true"},"#"),e(" 页面缓存")],-1),k=a("p",null,"首先需要清楚，本框架不管路由配置多少嵌套层级，最终都会被处理成两级结构，这也是经过许多开发者实践后相对认可的方案。其原因只是因为三级及以上路由在处理页面缓存上，无法提供一个万全的方案，总有各式各样的小问题。",-1),g=e("如果想了解框架是怎么处理的，可以看下作者的这篇《"),b={href:"https://hooray.github.io/posts/7ae488b2/",target:"_blank",rel:"noopener noreferrer"},d=e("一劳永逸，解决基于 keep-alive 的多级路由缓存问题"),h=e("》文章。"),v=r('<p>那么在两级路由下，我们要如何实现页面缓存，请继续往下看。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>开启缓存必须保证每个页面组件必须设置 name ，并且确保 name 唯一。</p></div><h2 id="标签栏关闭" tabindex="-1"><a class="header-anchor" href="#标签栏关闭" aria-hidden="true">#</a> 标签栏关闭</h2><p>首先需要在框架配置里设置（基础版无需设置）。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>enableTabbar<span class="token operator">:</span> <span class="token boolean">false</span>\n</code></pre></div><p>接下来我们只需要在需要进行缓存的路由 meta 对象里配置 cache 参数即可。这个参数可接受以下 3 种类型：</p><ul><li><code>boolean</code></li><li><code>string</code></li><li><code>array</code></li></ul><p><code>boolean</code> 很好理解，当设置为 <code>true</code> 时，该页面只要一被访问，就会被缓存，这也是大部分同类框架的方案。例如有一个新闻管理的模块，我们把<strong>新闻列表页</strong>设置为 <code>cache: true</code> 后并访问，然后从<strong>新闻列表页</strong>点击某条记录进入<strong>新闻详情页</strong>，这时候再从<strong>新闻详情页</strong>返回<strong>新闻列表页</strong>时，<strong>新闻列表页</strong>上的数据是不会重新加载，而是保留了当时离开时的状态。</p><p>但这个方案也有一个弊端，就是该页面一旦访问就永久被缓存住了（除非手动刷新或点击框架提供的刷新按钮），如果用户从<strong>新闻列表页</strong>进入的不是<strong>新闻详情页</strong>，而是其它模块的页面，这时候其实是不希望<strong>新闻列表页</strong>被缓存的。这种情况下，框架支持设置 <code>string</code> 和 <code>array</code> 两个类型的参数值。</p><p>首先不管设置 <code>string</code> 还是 <code>array</code> ，你需要设置的值，都是路由的 name 。</p><p>怎么理解呢？还是用上面的例子，如果有两个模块，一个新闻管理，一个用户管理。当从<strong>新闻列表页</strong>进入<strong>新闻详情页</strong>的时候，需要对<strong>新闻列表页</strong>进行缓存，而从<strong>新闻列表页</strong>进入<strong>用户列表页</strong>，则不需要对<strong>新闻列表页</strong>进行缓存，我们就可以对<strong>新闻列表页</strong>的路由设置成：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻列表&#39;</span><span class="token punctuation">,</span>\n                cache<span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻详情&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><p>这表示从<strong>新闻列表页</strong>进入<strong>新闻详情页</strong>时，<strong>新闻列表页</strong>才会被缓存，进入其它任何页面都不会缓存。</p><p>当然也可将 <code>cache</code> 设置成 name 数组。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻列表&#39;</span><span class="token punctuation">,</span>\n                cache<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻详情&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增新闻&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><p>这样就表示从<strong>新闻列表页</strong>进入<strong>新闻详情页</strong>或<strong>新增新闻页</strong>时，<strong>新闻列表页</strong>才会被缓存，进入其它任何页面都不会缓存。</p>',16),m={id:"标签栏开启",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#标签栏开启","aria-hidden":"true"},"#",-1),f=e(" 标签栏开启 "),j={class:"custom-container tip"},E=a("p",{class:"custom-container-title"},"TIP",-1),N=e("请确保已阅读《"),x=e("标签栏 - 标签页合并"),D=e("》。"),B=a("p",null,"当你了解标签页是否合并这两种展现形式后，我们再接着说如何针对性的做页面缓存。",-1),A=a("h3",{id:"标签页不合并",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#标签页不合并","aria-hidden":"true"},"#"),e(" 标签页不合并")],-1),C=a("p",null,[e("这种情况下，访问每个路由都会新建一个标签页，这也就意味着，缓存处理可以相对简单粗暴。因为不确定用户会怎样切换标签页，所以可以直接给需要缓存的路由设置 "),a("code",null,"cache: true"),e(" 即可。")],-1),L=e("当点击关闭标签页时，缓存会自动删除，当然手动调用"),y=e("关闭当前标签页"),M=e("的方法也会删除缓存。"),_=r('<h3 id="标签页合并" tabindex="-1"><a class="header-anchor" href="#标签页合并" aria-hidden="true">#</a> 标签页合并</h3><p>当标签页合并时，我们从<strong>新闻列表页</strong>进入<strong>新增新闻页</strong>后，进行了一些数据填写，这时候再点开其它模块的页面，例如<strong>用户列表页</strong>，此时标签栏里有 2 个标签页，分别是<em>新增新闻</em>和<em>用户列表</em>，这时候从<strong>用户列表页</strong>切换回<strong>新增新闻页</strong>，并且想让它保持住离开时的状态，只能设置 <code>cache: true</code> ，因为从<strong>新闻列表页</strong>跳转到其它任何页面，都需要将它进行缓存住。但这个时候问题来了，如果从<strong>新增新闻页</strong>返回<strong>新闻列表页</strong>时，是需要清除缓存的，所以框架提供了另一个参数 <code>noCache</code> ，来看下面的路由配置。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻列表&#39;</span><span class="token punctuation">,</span>\n                cache<span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新闻详情&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>\n                cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                noCache<span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增新闻&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>\n                cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                noCache<span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div></div><p>表示从<strong>新闻详情页</strong>或<strong>新增新闻页</strong>进入<strong>新闻列表页</strong>时，会删除页面缓存，否则页面始终开启缓存。</p><p>这也说明 <code>noCache</code> 这个参数必须在 <code>cache: true</code> 时才会起作用。</p>',5);var T=l(i,[["render",function(e,r){const l=n("OutboundLink"),i=n("Badge"),T=n("RouterLink");return c(),s(o,null,[u,k,a("p",null,[g,a("a",b,[d,t(l)]),h]),v,a("h2",m,[w,f,t(i,{type:"tip",text:"专业版",vertical:"top"})]),a("div",j,[E,a("p",null,[N,t(T,{to:"/guide/tabbar.html#%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%90%88%E5%B9%B6"},{default:p((()=>[x])),_:1}),D])]),B,A,C,a("p",null,[L,t(T,{to:"/guide/tabbar.html#%E5%85%B3%E9%97%AD%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E9%A1%B5"},{default:p((()=>[y])),_:1}),M]),_],64)}]]);export{T as default};
