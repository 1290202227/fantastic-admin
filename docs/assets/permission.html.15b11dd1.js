import{r as n,c as a,a as s,b as t,w as p,F as o,e,d as c,o as l}from"./app.49354eb1.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const k={},i=e('<h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1><p>首先需要在框架配置里开启权限功能。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>enablePermission<span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre></div>',3),r={class:"custom-container tip"},g=s("p",{class:"custom-container-title"},"权限是如何运作的",-1),d=c("首先需要清楚一点，配置的路由模块，即"),m=c("主导航"),h=c("下的所有路由，并不是立即注册到路由上并生效的。"),v=s("p",null,"而是在用户进行登录操作成功后，立马获取用户权限，然后根据用户所拥有的权限，对主导航下的路由模块进行一次数据清洗，把没有权限的路由进行剔除，最终清洗后的路由数据才会被注册到路由上，同时也将用于导航栏的展示。",-1),b=s("p",null,[c("通过这样的处理，可实现导航栏根据权限动态展示的效果，或者也可以称为"),s("strong",null,"动态导航栏"),c("。")],-1),f=e('<h2 id="路由权限" tabindex="-1"><a class="header-anchor" href="#路由权限" aria-hidden="true">#</a> 路由权限</h2><p>在路由的 <code>meta</code> 配置项中，其中有一个 <code>auth</code> 参数，这个就是用来配置路由的权限，一个路由可以配置多个权限，当配置多个权限时，只要满足其中任何一个，则视为用户有访问该路由的权限，如下：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;news.browse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news.edit&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>框架内部鉴权的逻辑是字符串比对，所以建议对权限有个统一的格式，例如为 <code>xxx.yyy</code> ，其中 <code>xxx</code> 表示模块名， <code>yyy</code> 表示操作类型。那么上面那个例子就表示：</p><ul><li><code>news.browse</code> 新闻模块的浏览权限</li><li><code>news.edit</code> 新闻模块的编辑权限</li></ul><p>路由权限是比较暴力的，即没有权限则该路由页面无法访问，并且也不会在导航栏中显示。但在实际业务中，遇到更多的情况通常是，可以访问路由页面，但会根据不同权限，使用页面里的不同功能，这时候就需要用到下面三种鉴权方式。</p><h2 id="鉴权组件" tabindex="-1"><a class="header-anchor" href="#鉴权组件" aria-hidden="true">#</a> 鉴权组件</h2><p>页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 <code>&lt;Auth&gt;</code> 和 <code>&lt;AuthAll&gt;</code> 组件，具体使用如下：</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 单权限验证 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Auth</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#no-auth</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你没有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Auth</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Auth</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#no-auth</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你没有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Auth</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthAll</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#no-auth</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你没有该权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AuthAll</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="鉴权指令" tabindex="-1"><a class="header-anchor" href="#鉴权指令" aria-hidden="true">#</a> 鉴权指令</h2><p>对于单个元素，也提供了 <code>v-auth</code> 和 <code>v-auth-all</code> 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单。</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 单权限验证 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth-all</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="鉴权函数" tabindex="-1"><a class="header-anchor" href="#鉴权函数" aria-hidden="true">#</a> 鉴权函数</h2><p>鉴权组件和鉴权指令控制的是页面上的元素，而鉴权函数则更多是使用在业务流程代码里的权限判断。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 单权限验证，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$auth</span><span class="token punctuation">(</span><span class="token string">&#39;department.create&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$auth</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;department.create&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;department.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$authAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;department.create&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;department.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><p>在 <code>src/store/modules/user.js</code> 文件里 action 下有个 <code>getPermissions</code> 的方法，该方法用于登录成功后获取用户权限，在项目开发中，需要根据实际情况进行修改。框架默认通过 mock 模拟获取用户权限。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 获取我的权限</span>\n<span class="token function">getPermissions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 通过 mock 获取权限</span>\n        api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;member/permission&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            baseURL<span class="token operator">:</span> <span class="token string">&#39;/mock/&#39;</span><span class="token punctuation">,</span>\n            params<span class="token operator">:</span> <span class="token punctuation">{</span>\n                account<span class="token operator">:</span> state<span class="token punctuation">.</span>account\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setPermissions&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>permissions<span class="token punctuation">)</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>permissions<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>在框架演示中，提供了两组权限，你可以在“权限验证”导航里切换帐号查看不同权限下的效果。如果使用的不是 <code>admin</code> 或 <code>test</code> 用户名登录，则在导航栏里看不到“权限验证”导航入口。</p><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><p>由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限。</p><p>当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，框架也可以很方便的实现。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout/index.vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/banner&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;Banner 管理&#39;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerCreate&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/banner/detail.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增 Banner&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/banner/list.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;Banner 列表&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerEdit&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/banner/detail.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;编辑 Banner&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如上所示，假设有 2 种角色，一个是管理员 <code>admin</code> ，一个是编辑员 <code>editor</code> ，如果用户是 <code>admin</code> 权限，则可以操作 Banner 管理下的所有功能，如果是 <code>editor</code> 权限，则只能进行新增 Banner 操作。</p>',24);var x=u(k,[["render",function(e,c){const u=n("RouterLink");return l(),a(o,null,[i,s("div",r,[g,s("p",null,[d,t(u,{to:"/guide/router.html#%E4%B8%BB%E5%AF%BC%E8%88%AA"},{default:p((()=>[m])),_:1}),h]),v,b]),f],64)}]]);export{x as default};
