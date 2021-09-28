import{r as s,c as n,a,b as e,F as p,e as o,d as c,o as t}from"./app.5d4d0345.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},l=a("h1",{id:"和服务端交互",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#和服务端交互","aria-hidden":"true"},"#"),o(" 和服务端交互")],-1),d=o("框架使用 "),u={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},b=o("Axios"),k=o(" 做为异步请求工具，并进行了简单的封装。"),h=c('<h2 id="设置-baseurl" tabindex="-1"><a class="header-anchor" href="#设置-baseurl" aria-hidden="true">#</a> 设置 baseURL</h2><p>在根目录 <code>.env.*</code> 文件里的 <code>VUE_APP_API_ROOT</code> 这个参数就是配置 axios 的 <code>baseURL</code> 。</p><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2><p>在 <code>./src/api/index.js</code> 文件里实例化了 axios 对象，并对 <code>request</code> 和 <code>response</code> 设置了拦截器，拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。因为每个公司提供的接口标准不同，所以该文件需要开发者根据实际情况去定制对应的拦截器。</p><p>代码很简单，首先初始化 axios 对象，然后 <code>axios.interceptors.request.use()</code> 和 <code>axios.interceptors.response.use()</code> 就分别是请求和响应的拦截代码了。</p><p>参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作，登录失效则跳转至登录页，接口报错则使用 Element UI 的 Message 组件提示用户。</p><h2 id="多数据源" tabindex="-1"><a class="header-anchor" href="#多数据源" aria-hidden="true">#</a> 多数据源</h2><p>如果项目里需要从多个不同地址的数据源请求数据，你有两种方式可以实现。</p><p>如果只是几个接口需求从其它数据源请求，你可以使用覆盖 <code>baseURL</code> 的方式：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    baseURL<span class="token operator">:</span> <span class="token string">&#39;http://baidu.com/&#39;</span> <span class="token comment">// 直接覆盖 baseURL</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这种方式的前提是，两个数据源的 <code>request</code> 和 <code>response</code> 规则要保持一致，因为只是覆盖 <code>baseURL</code> ，拦截器还是用的同一套规则。</p><p>所以如果两个数据源的请求和响应是完全不同的标准，你需要给第二个数据源单独实例化一个 axios 对象。首先在 <code>.env.*</code> 文件里配置第二个数据源的 <code>baseURL</code> ：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 命名可随意，以 VUE_APP_ 开头即可\nVUE_APP_API_ROOT_2 = 此处填写接口地址\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后把 <code>./src/api/index.js</code> 文件复制一份，例如就叫 <code>./src/api/index2.js</code> ，并且将代码中的 <code>baseURL</code> 替换为 <code>p<wbr>rocess.env.VUE_APP_API_ROOT_2</code> ，最后在 <code>./src/main.js</code> 文件里引入：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> api2 <span class="token keyword">from</span> <span class="token string">&#39;./api/index2&#39;</span>\n<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$api2 <span class="token operator">=</span> api2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后你就可以在页面中通过这种方式分别请求两个数据源的数据了：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 请求默认数据源</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 请求第 2 个数据源</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$api2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><p>生产环境的跨域需要服务端去解决，开发环境的跨域问题可在本地设置代理解决。</p><p>打开 <code>vue.config.js</code> 并将高亮部分代码注释去掉：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>\n        open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        proxy<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                target<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_API_ROOT</span><span class="token punctuation">,</span>\n                changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>同时将 <code>./src/api/index.js</code> 文件里的 <code>baseURL</code> 配置删掉，这时候重新运行框架，请求代理就会生效了。</p><p>假设 <code>VUE_APP_API_ROOT</code> 配置的是 <code>http://baidu.com</code> ，那上述配置的结果就是，在请求 <code>/api/login</code> 时会转发到 <code>http://baidu.com/api/login</code> 。</p>',23),m=o("更多代理设置请阅读《"),g={href:"https://cli.vuejs.org/zh/config/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"},v=o("Vue CLI - devServer.proxy"),x=o("》");var _=i(r,[["render",function(o,c){const i=s("OutboundLink");return t(),n(p,null,[l,a("p",null,[d,a("a",u,[b,e(i)]),k]),h,a("p",null,[m,a("a",g,[v,e(i)]),x])],64)}]]);export{_ as default};
