import{e as n}from"./app.56d16476.js";const s={},a=n('<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><p>Vuex 同样实现了自动注册，开发只需关注 <code>/src/store/modules/</code> 文件夹里的文件即可，同样也按模块区分文件。注意，需要开启命名空间，文件名即模块名。</p><p>例如新建一个 <code>example.js</code> 的文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    state<span class="token punctuation">,</span>\n    actions<span class="token punctuation">,</span>\n    getters<span class="token punctuation">,</span>\n    mutations\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>使用方法：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>example<span class="token punctuation">.</span>xxx<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&#39;example/xxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;example/xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;example/xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',6);s.render=function(n,s){return a};export{s as default};