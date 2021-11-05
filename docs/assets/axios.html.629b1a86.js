import{r as n,o as s,c as a,a as t,b as p,w as o,F as e,d as c,e as l}from"./app.08c37072.js";const i={},u=t("h1",{id:"与服务端交互",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#与服务端交互","aria-hidden":"true"},"#"),c(" 与服务端交互")],-1),r=c("框架使用 "),k={href:"https://axios-http.com/",target:"_blank",rel:"noopener noreferrer"},d=c("Axios"),g=c(" 做为异步请求工具，并进行了简单的封装。"),h=l('<h2 id="接口请求" tabindex="-1"><a class="header-anchor" href="#接口请求" aria-hidden="true">#</a> 接口请求</h2><h3 id="设置-baseurl" tabindex="-1"><a class="header-anchor" href="#设置-baseurl" aria-hidden="true">#</a> 设置 baseURL</h3><p>在根目录 <code>.env.*</code> 文件里的 <code>VITE_APP_API_BASEURL</code> 这个参数就是配置 axios 的 <code>baseURL</code> 。</p><p>例如项目的真实接口请求地址为：</p><ul><li><code>http://api.test.com/news/list</code></li><li><code>http://api.test.com/news/create</code></li><li><code>http://api.test.com/shop/info</code></li></ul><p>则可设置为 <code>VITE_APP_API_BASEURL = http://api.test.com/</code> 。</p><h3 id="请求调用" tabindex="-1"><a class="header-anchor" href="#请求调用" aria-hidden="true">#</a> 请求调用</h3><p>常用的 get 和 post 请求可使用以下的方法：</p>',8),m=t("div",{class:"language-javascript ext-js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),c("$api"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"get"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'news/list'"),t("span",{class:"token punctuation"},","),c(),t("span",{class:"token punctuation"},"{"),c("\n    params"),t("span",{class:"token operator"},":"),c(),t("span",{class:"token punctuation"},"{"),c("\n        page"),t("span",{class:"token operator"},":"),c(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),c("\n        size"),t("span",{class:"token operator"},":"),c(),t("span",{class:"token number"},"10"),c("\n    "),t("span",{class:"token punctuation"},"}"),c("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"then"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"res"),c(),t("span",{class:"token operator"},"=>"),c(),t("span",{class:"token punctuation"},"{"),c("\n    "),t("span",{class:"token comment"},"// 后续业务代码"),c("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),c("\n")])])],-1),v=t("div",{class:"language-javascript ext-js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),c("$api"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"post"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'news/create'"),t("span",{class:"token punctuation"},","),c(),t("span",{class:"token punctuation"},"{"),c("\n    title"),t("span",{class:"token operator"},":"),c(),t("span",{class:"token string"},"'新闻标题'"),t("span",{class:"token punctuation"},","),c("\n    content"),t("span",{class:"token operator"},":"),c(),t("span",{class:"token string"},"'新闻内容'"),c("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"then"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"res"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),c("\n    "),t("span",{class:"token comment"},"// 后续业务代码"),c("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),c("\n")])])],-1),b=l('<h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3><p>在 <code>/src/api/index.js</code> 文件里实例化了 axios 对象，并对 <code>request</code> 和 <code>response</code> 设置了拦截器，拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。但因为每个公司提供的接口标准不同，所以该文件拦截器部分的代码，需要开发者根据实际情况去修改调整。</p><p>代码很简单，首先初始化 axios 对象，然后 <code>axios.interceptors.request.use()</code> 和 <code>axios.interceptors.response.use()</code> 就分别是请求和响应的拦截代码了。</p><p>参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作。</p><h2 id="跨域处理" tabindex="-1"><a class="header-anchor" href="#跨域处理" aria-hidden="true">#</a> 跨域处理</h2><p>生产环境的跨域需要服务端去解决，开发环境的跨域问题可在本地设置代理解决。如果本地开发环境请求接口提示跨域，可以设置 <code>.env.development</code> 文件里 <code>VITE_OPEN_PROXY = true</code> 开启代理。</p>',6),f=t("div",{class:"language-javascript ext-js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),c("$api"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"get"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'news/list'"),t("span",{class:"token punctuation"},")"),c("  "),t("span",{class:"token comment"},"// http://localhost:3000/proxy/news/list"),c("\n")])])],-1),x=t("div",{class:"language-javascript ext-js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),c("$api"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"post"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'news/add'"),t("span",{class:"token punctuation"},")"),c("  "),t("span",{class:"token comment"},"// http://localhost:3000/proxy/news/add"),c("\n")])])],-1),_=l('<p>开启代理后，原有请求都会被指向到本地 <code>http://localhost:3000/proxy</code> ，因为 <code>/proxy</code> 匹配到了 vite.config.js 里代理部分的设置，所以实际是请求依旧是 <code>VITE_APP_API_BASEURL</code> 所设置的地址。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js 中 proxy 配置，该配置即用于代理 API 请求</span>\nserver<span class="token operator">:</span> <span class="token punctuation">{</span>\n    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&#39;/proxy&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="多数据源" tabindex="-1"><a class="header-anchor" href="#多数据源" aria-hidden="true">#</a> 多数据源</h2><p>如果项目里需要从多个不同地址的数据源请求数据，你有两种方式可以实现。</p><p>如果只是几个接口需求从其它数据源请求，你可以使用覆盖 <code>baseURL</code> 的方式：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    baseURL<span class="token operator">:</span> <span class="token string">&#39;http://baidu.com/&#39;</span> <span class="token comment">// 直接覆盖 baseURL</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>这种方式的前提是，两个数据源的 <code>request</code> 和 <code>response</code> 规则要保持一致，因为只是覆盖 <code>baseURL</code> ，拦截器还是用的同一套规则。</p><p>所以如果两个数据源的请求和响应是完全不同的标准，你需要给第二个数据源单独实例化一个 axios 对象。首先在 <code>.env.*</code> 文件里配置第二个数据源的 <code>baseURL</code> ：</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># 命名可随意，以 VITE_APP_ 开头即可</span>\n<span class="token attr-name">VITE_APP_API_BASEURL_2</span> <span class="token operator">=</span> <span class="token attr-value">此处填写接口地址</span>\n</code></pre></div><p>然后把 <code>/src/api/index.js</code> 文件复制一份，例如就叫 <code>/src/api/index2.js</code> ，并且将代码中使用到 <code>VITE_APP_API_BASEURL</code> 也替换为 <code>VITE_APP_API_BASEURL_2</code> ，最后在 <code>/src/util/global.properties.js</code> 文件里引入：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> api2 <span class="token keyword">from</span> <span class="token string">&#39;@/api/index2&#39;</span>\n\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$api2 <span class="token operator">=</span> api2\n</code></pre></div><p>然后你就可以在页面中通过这种方式分别请求两个数据源的数据了：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 请求默认数据源</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 请求第 2 个数据源</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$api2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>需注意，如果第二个数据源也需要开启跨域处理的话，需要在 <code>/src/api/index2.js</code> 里定一个新的 proxy 路径，例如 <code>/proxy2/</code> ：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">===</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;/proxy2/&#39;</span> <span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL_2</span><span class="token punctuation">,</span>\n    timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>\n    responseType<span class="token operator">:</span> <span class="token string">&#39;json&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div></div><p>同时在 vite.config.js 里增加一段新的 proxy 配置：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js 中 proxy 配置，该配置即用于代理 API 请求</span>\nserver<span class="token operator">:</span> <span class="token punctuation">{</span>\n    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&#39;/proxy&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">&#39;/proxy2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL_2</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy2</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h2><p>Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。</p>',19),j={class:"custom-container tip"},w=t("p",{class:"custom-container-title"},"TIP",-1),P=c("模板使用 "),y={href:"https://github.com/anncwb/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},E=c("vite-plugin-mock"),A=c(" 提供开发和生产模拟服务。"),I=c("Mock 数据编写规则请阅读 "),R={href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"},L=c("Mockjs"),U=c(" 官方文档。"),T=l('<h3 id="开发环境-mock" tabindex="-1"><a class="header-anchor" href="#开发环境-mock" aria-hidden="true">#</a> 开发环境 mock</h3><p>mock 文件存放在 <code>/src/mock/</code> 下，建议按照不同模块区分文件夹。文件新增或修改后会自动更新，不需要手动重启，可以在代码控制台查看日志信息。</p><p>以下为示例代码：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        url<span class="token operator">:</span> <span class="token string">&#39;/mock/news/list&#39;</span><span class="token punctuation">,</span>\n        method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                error<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n                status<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                data<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token string">&#39;list|5-10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            <span class="token string">&#39;title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;@ctitle&#39;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>参数获取：</p><ul><li>GET：<code>({ query }) =&gt; { }</code></li><li>POST：<code>({ body }) =&gt; { }</code></li></ul><p>为了让 mock 接口与真实接口共存，即项目开发中，部分请求 mock 接口，部分请求真实接口。需要在配置 mock 接口的时候，给 <code>url</code> 参数统一设置 <code>/mock/</code> 前缀，并在调用接口的时候，使用 <code>baseURL</code> 强制修改此次请求的地址。</p><p>如下所示，其中 <code>news/list</code> 会请求本地的 mock 接口，而 <code>news/add</code> 依旧请求真实接口，即使开启跨域代理也不影响。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;news/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tbaseURL<span class="token operator">:</span> <span class="token string">&#39;/mock/&#39;</span><span class="token punctuation">,</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n        page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        size<span class="token operator">:</span> <span class="token number">10</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 后续业务代码</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;news/create&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;新闻标题&#39;</span><span class="token punctuation">,</span>\n    content<span class="token operator">:</span> <span class="token string">&#39;新闻内容&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 后续业务代码</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><h3 id="生产环境-mock" tabindex="-1"><a class="header-anchor" href="#生产环境-mock" aria-hidden="true">#</a> 生产环境 mock</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>生产环境一般都是调用真实接口，如果需要使用 mock 也只适用于一些简单的示例网站及预览网站。</p></div><p>模板默认已经配置好生产环境 mock ，如果不想在生产环境使用 mock ，可在接口调用处删除 baseURL 设置，或直接删除 mock 接口文件。</p><p>开发环境与生产环境使用 mock 差异不大，比较大的区别是生产环境里调用 mock 接口，在控制台内看不到接口请求日志。</p>',13),V=c("更多介绍请移步 "),O={href:"https://github.com/anncwb/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},S=c("vite-plugin-mock");i.render=function(c,l){const i=n("OutboundLink"),B=n("CodeGroupItem"),$=n("CodeGroup");return s(),a(e,null,[u,t("p",null,[r,t("a",k,[d,p(i)]),g]),h,p($,null,{default:o((()=>[p(B,{title:"get"},{default:o((()=>[m])),_:1}),p(B,{title:"post"},{default:o((()=>[v])),_:1})])),_:1}),b,p($,null,{default:o((()=>[p(B,{title:"get"},{default:o((()=>[f])),_:1}),p(B,{title:"post"},{default:o((()=>[x])),_:1})])),_:1}),_,t("div",j,[w,t("p",null,[P,t("a",y,[E,p(i)]),A]),t("p",null,[I,t("a",R,[L,p(i)]),U])]),T,t("p",null,[V,t("a",O,[S,p(i)])])],64)};export{i as default};
