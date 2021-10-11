import{c as n,a as s,F as a,d as p,e,o as t}from"./app.c0d24045.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const c={},o=p('<h1 id="多级页面缓存" tabindex="-1"><a class="header-anchor" href="#多级页面缓存" aria-hidden="true">#</a> 多级页面缓存</h1><p>因为路由直接影响侧边栏导航菜单，所以为了实现多级侧边栏导航菜单，就需要将路由配置成多级嵌套的形式。一旦超过两级，达到三级甚至更多级，就需要增加一个空布局页面（Empty.vue）用来给 component 使用。此时就出现了一个问题，因为 keep-alive 是在 Layout 上处理的，所以超过两级以上的路由需要做页面缓存会出现各种各样奇怪的 bug 。</p><p>在思考并解决这个问题之前，我们先来看下页面大致结构：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+------------------------------+\n| Layout                       |\n|  +------------------------+  |\n|  | Empty                  |  |\n|  |  +------------------+  |  |\n|  |  | Page             |  |  |\n|  |  +------------------+  |  |\n|  +------------------------+  |\n+------------------------------+\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>首先 keep-alive 是在 Layout 上进行处理，如果不缓存 Empty ，则 Empty 下面的页面将无法被缓存，如果缓存 Empty ，又会导致 Empty 里面的所有页面都被缓存，无法按需清除，相信接触过的同学肯定感同身受其中的大坑。</p>',5),r=["src"],u=p('<p>就如上面这张图一样，即便将 tab 标签页关闭后，再次打开缓存还是存在。</p><p>框架的解决思路很简单，既然缓存二级路由是没问题，而超过二级的中间层级页面本身也是没太大意义的，那就将路由直接处理成二级，这样页面显示也就是二级的结构。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+------------------------------+                +------------------------------+\n| Layout                       |                | Layout.vue                   |\n|  +------------------------+  |                |  +------------------------+  |\n|  | Empty                  |  |  +----------&gt;  |  | Page                   |  |\n|  |  +------------------+  |  |                |  |                        |  |\n|  |  | Page             |  |  |                |  |                        |  |\n|  |  +------------------+  |  |                |  |                        |  |\n|  +------------------------+  |                |  +------------------------+  |\n+------------------------------+                +------------------------------+\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这里路由配置还是保持多级嵌套的形式，而这个配置并非最终注册使用的路由，仅仅是提供侧边栏导航菜单使用，同时会再生成一份用于动态注册路由的数据，图例如果没看明白的话，可以看下面两组数据。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 原始数据（用于侧边栏导航菜单）</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;客户管理&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            children<span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        title<span class="token operator">:</span> <span class="token string">&#39;客户列表&#39;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        title<span class="token operator">:</span> <span class="token string">&#39;客户详情&#39;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 处理后数据（用于动态注册路由，框架会自动处理）</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;clients/list&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;客户列表&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;clients/detail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;客户详情&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>通过一个递归函数就可以处理好路由的数据，但这还不够，因为还需要处理面包屑导航。</p><p>原有的面包屑导航是通过 <code>$route.matched</code> 可以获取到嵌套路由每一层级的信息，而当路由被处理成两级后，也就无法通过 <code>$route.matched</code> 进行显示了，所以在处理路由数据的同时，也需要处理面包屑导航的信息。大致最终会处理成这样：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;clients/list&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;客户列表&#39;</span><span class="token punctuation">,</span>\n                breadCrumb<span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;客户管理&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;客户列表&#39;</span> <span class="token punctuation">}</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;clients/detail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;客户详情&#39;</span><span class="token punctuation">,</span>\n                breadCrumb<span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;客户管理&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;客户详情&#39;</span> <span class="token punctuation">}</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>这样一来，通过 <code>$route.meta.breadcrumb</code> 就可以获取任意某个路由的完整面包屑导航信息了。最终效果如下：</p>',9),i=["src"],b=s("p",null,"通过图片可以看到，这种方案也还是有一定的限制，就是路由被处理成二级后，多级嵌套关系不存在了，也就是不能在 Empty 里写任何代码，因为都会被忽略掉，只保留顶级和最深层的底级两个路由。",-1),k=s("p",null,"当然通过实际情况考虑，这种限制并没有大问题，因为在后台系统里，本身模块相对独立，即便侧边栏导航菜单是嵌套层级关系的，在右侧内容展示区域，几乎都是独立模块展示，无需嵌套。",-1),m=s("h2",{id:"总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),e(" 总结")],-1),d=s("p",null,[e("以上是介绍了框架对多级嵌套路由如何做缓存做了一个详尽的解释，在使用上其实并不需要关系内部逻辑，通过修改 settings.js 文件里的 "),s("code",null,"enableFlatRoutes: true"),e(" 就可以开启扁平化路由的功能，三级或超过三级的路由都会处理成二级路由。")],-1),g=s("p",null,"当然不开启这个设置也是可以的，即路由配置的多少嵌套层级，页面也是对应的嵌套层级。",-1);var h=l(c,[["render",function(p,e){return t(),n(a,null,[o,s("p",null,[s("img",{src:p.$withBase("/vue2/keep-alive1.gif")},null,8,r)]),u,s("p",null,[s("img",{src:p.$withBase("/vue2/keep-alive2.gif")},null,8,i)]),b,k,m,d,g],64)}]]);export{h as default};
