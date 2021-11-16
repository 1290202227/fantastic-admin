import{r as n,o as s,c as a,a as p,b as t,F as e,d as c,e as o}from"./app.15b28e1c.js";const l={},u=p("h1",{id:"二级页面缓存",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#二级页面缓存","aria-hidden":"true"},"#"),c(" 二级页面缓存")],-1),i=p("p",null,[c("由于专业版提供了标签栏功能，而标签栏开启和关闭是两种不同的缓存处理逻辑，避免两种逻辑冲突，在框架开发前需要确定标签栏是否开启或关闭。基础版只需阅读"),p("strong",null,"标签栏关闭"),c("部分。")],-1),r=p("h2",{id:"标签栏关闭",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#标签栏关闭","aria-hidden":"true"},"#"),c(" 标签栏关闭")],-1),k={class:"custom-container tip"},m=p("p",{class:"custom-container-title"},"说明",-1),b=p("p",null,"页面缓存只支持跳转至平级或下级路由，跳转上级路由则无法缓存，以下介绍建议结合代码与演示加深理解。",-1),d=c("页面缓存是通过 Vue 内置的 "),g={href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"},f=p("code",null,"<keep-alive />",-1),v=c(" 组件的 "),h=p("code",null,"include",-1),L=c(" 特性实现，如果想深入了解框架实现方式，请先确保自己了解 "),x=p("code",null,"<keep-alive />",-1),D=c(" 组件。"),j=o('<p>多级页面缓存最常见的一个使用场景就是列表页和详情页，例如一个新闻模块，我在列表页修改了搜索条件，然后又翻了几页，最后点击进入某篇新闻的详情页，进行编辑操作后，返回列表页，这时候列表页已经是初始状态了，如果我还想继续之前的操作，就得重新修改搜索条件，然后翻页到之前的页数，这样的设计明显是不合理的。</p><p>框架在这块已经做好了基础功能封装，你只需要知道如何调用，就可以实现页面缓存的需求了。我们来看下实际应用代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        vm<span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/add&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ListPageName&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存</span>\n    <span class="token comment">// 所以下面的代码意思就是，如果目标路由的 name 不是 detailRouterName 或 otherDetailRouterName ，则将当前页面的 name 从 keep-alive 中删除</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;detailRouterName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;otherDetailRouterName&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/remove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ListPageName&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>通过上面的例子，我们可以知道，页面缓存的核心实现都离不开路由的 name ，所以在配置路由的时候，必须给每个路由设置上 name 属性，并确保 name 唯一。</p><p>解决了缓存的问题，另一个需求就产生了，就是页面虽然缓存了，那页面上的数据要怎么更新了，比如在详情页编辑了新闻，返回列表页的时候，如何更新列表页的数据。</p><p>要解决这个问题，就得引入事件总线的概念了，事件总线就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，组件可以上下平行地通知其他组件。框架已经封装好了事件总线，看下如何使用吧。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 列表页</span>\n<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token comment">// 将 getDataList() 方法绑定到事件总线上</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// 页面销毁时解绑事件总线上的 getDataList() 方法</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 详情页</span>\n<span class="token comment">// 在需要更新列表的地方，通过事件总线更新列表页数据</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="标签栏开启" tabindex="-1"><a class="header-anchor" href="#标签栏开启" aria-hidden="true">#</a> 标签栏开启</h2><p>当开启标签栏功能后，每一个打开的标签页都会进行缓存，前提是页面组件必须设置过 <code>name</code> ，是组件的 <code>name</code> ，不是路由的 <code>name</code> 。</p><p>缓存太多页面会造成浏览器性能不必要的开销，所以如果部分页面无需缓存，将页面组件的 <code>name</code> 删除即可。</p>',10);l.render=function(c,o){const l=n("OutboundLink");return s(),a(e,null,[u,i,r,p("div",k,[m,b,p("p",null,[d,p("a",g,[f,t(l)]),v,h,L,x,D])]),j],64)};export{l as default};
