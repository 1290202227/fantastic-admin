import{r as t,o as e,c as o,a as n,b as c,F as l,d as r,e as s}from"./app.1bcee62d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k={id:"\u6807\u51C6\u6A21\u5757",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#\u6807\u51C6\u6A21\u5757","aria-hidden":"true"},"#",-1),m=r(" \u6807\u51C6\u6A21\u5757 "),d=s(`<h2 id="\u7528\u6CD5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5\u8BF4\u660E" aria-hidden="true">#</a> \u7528\u6CD5\u8BF4\u660E</h2><p>\u5728\u300A<a href="plop">\u5FEB\u901F\u751F\u6210\u6587\u4EF6</a>\u300B\u91CC\u8BF4\u5230\uFF0C\u901A\u8FC7 <code>yarn new</code> \u6307\u4EE4\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u6807\u51C6\u6A21\u5757\uFF0C\u90A3\u6807\u51C6\u6A21\u5757\u662F\u4EC0\u4E48\u6837\u4E00\u4E2A\u6807\u51C6\u5462\uFF1F\u90A3\u5C31\u5B9E\u9645\u751F\u6210\u4E00\u4E2A\u6A21\u5757\u6765\u770B\u4E00\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>? \u8BF7\u9009\u62E9\u9700\u8981\u521B\u5EFA\u7684\u6A21\u5F0F\uFF1A module - \u521B\u5EFA\u6807\u51C6\u6A21\u5757\uFF08\u5305\u542B\u5217\u8868\u9875&amp;\u8BE6\u60C5\u9875\uFF09
? \u8BF7\u9009\u62E9\u6A21\u5757\u521B\u5EFA\u76EE\u5F55 src/views
? \u8BF7\u8F93\u5165\u6A21\u5757\u540D test
? \u8BF7\u8F93\u5165\u6A21\u5757\u4E2D\u6587\u540D\u79F0 \u6D4B\u8BD5\u6A21\u5757
\u221A  ++ \\src\\views\\test\\list.vue
\u221A  ++ \\src\\views\\test\\detail.vue
\u221A  ++ \\src\\views\\test\\components\\DetailForm\\index.vue
\u221A  ++ \\src\\views\\test\\components\\FormDialog\\index.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u901A\u8FC7\u4E00\u6B65\u6B65\u7684\u63D0\u793A\u8BBE\u7F6E\uFF0C\u73B0\u5728\u5DF2\u7ECF\u521B\u5EFA\u597D\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u6A21\u5757\uFF0C\u5148\u53BB\u8DEF\u7531\u91CC\u914D\u7F6E\u4E00\u4E0B\uFF0C\u770B\u770B\u5B9E\u9645\u9875\u9762\u4E0A\u5C55\u793A\u6548\u679C\u5982\u4F55\u3002</p><p>\u9996\u5148\u5728 <code>/src/router/modules/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A <code>test.js</code> \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/test/list&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u6D4B\u8BD5\u6A21\u5757&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;testList&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span> <span class="token string">&#39;@/views/test/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u5217\u8868&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span> <span class="token string">&#39;@/views/test/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/test/list&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u7136\u540E\u5230 <code>/src/router/index.js</code> \u6587\u4EF6\u91CC\u52A0\u4E0A\u8FD9\u4E2A\u8DEF\u7531\u914D\u7F6E\u6587\u4EF6\u7684\u5F15\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">&#39;./modules/test&#39;</span>

<span class="token keyword">let</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A&#39;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;sidebar-default&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span>
            Test
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8FD9\u6837\u5C31\u80FD\u8BBF\u95EE\u5230\u6211\u4EEC\u7684\u9875\u9762\u4E86\uFF0C\u4F46\u662F\u8FD9\u65F6\u5019\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u662F\u4F1A\u8DF3\u8F6C\u5230 404 \u9875\u9762\u7684\uFF0C\u90A3\u662F\u56E0\u4E3A\u5728 <code>list.vue</code> \u6587\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u8BE6\u60C5\u9875\u8DEF\u7531\u7684 <code>name</code> \u66FF\u6362\u6389\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">onEdit</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">,</span>
            params<span class="token operator">:</span> <span class="token punctuation">{</span>
                id<span class="token operator">:</span> row<span class="token punctuation">.</span>id
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>id <span class="token operator">=</span> row<span class="token punctuation">.</span>id
        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,10),g=["src"],v=s(`<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u7684\u4E00\u4E2A\u6D4B\u8BD5\u6A21\u5757\u5C31\u521D\u6B65\u521B\u5EFA\u597D\u4E86\u3002</p><h2 id="\u529F\u80FD\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u4ECB\u7ECD" aria-hidden="true">#</a> \u529F\u80FD\u4ECB\u7ECD</h2><p>\u529F\u80FD\u90E8\u5206\u7684\u4ECB\u7ECD\u4E3B\u8981\u8FD8\u662F\u8981\u770B\u4EE3\u7801\uFF0C\u5148\u4ECE\u5217\u8868\u9875 <code>list.vue</code> \u5F00\u59CB\u3002</p><p>\u6700\u5148\u770B\u5230\u7684\u662F\u8FD9\u6BB5 <code>mixins</code> \u6DF7\u5165\uFF0C\u56E0\u4E3A\u51E0\u4E4E\u6BCF\u4E2A\u5217\u8868\u9875\u90FD\u9700\u8981\u7FFB\u9875\u529F\u80FD\uFF0C\u6240\u4EE5\u628A\u7FFB\u9875\u76F8\u5173\u7684\u4E1C\u897F\u90FD\u5B58\u653E\u5728 <code>/src/mixins/pagination.js</code> \u65B9\u4FBF\u590D\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> paginationMixin <span class="token keyword">from</span> <span class="token string">&#39;@/mixins/pagination&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    mixins<span class="token operator">:</span> <span class="token punctuation">[</span>paginationMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u63A5\u7740\u5728 <code>data</code> \u5BF9\u8C61\u91CC\u5B58\u653E\u7684\u662F\u6807\u51C6\u6A21\u5757\u63D0\u4F9B\u7684\u4E00\u4E9B\u914D\u7F6E\u9879\u548C\u5FC5\u8981\u6570\u636E\u53C2\u6570\u5B57\u6BB5\uFF0C\u4F8B\u5982\u4F60\u53EF\u4EE5\u5F00\u542F\u8BE6\u60C5\u5F39\u6846\u6A21\u5F0F\uFF0C\u6216\u8005\u5F00\u542F\u6279\u91CF\u64CD\u4F5C\u680F\uFF0C\u8FD9\u4E9B\u90FD\u5728 <code>data</code> \u5BF9\u8C61\u91CC\u8BBE\u7F6E\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u662F\u5426\u5F00\u542F\u8BE6\u60C5\u5F39\u6846\u6A21\u5F0F</span>
        dialogMode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BE6\u60C5\u5F39\u6846</span>
        detailFormDialog<span class="token operator">:</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            id<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u641C\u7D22</span>
        search<span class="token operator">:</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6279\u91CF\u64CD\u4F5C</span>
        batch<span class="token operator">:</span> <span class="token punctuation">{</span>
            enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            selectionDataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5217\u8868\u6570\u636E</span>
        dataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,7),h=["src"],f=s(`<p>\u518D\u5F80\u4E0B\u5C31\u662F\u9875\u9762\u7F13\u5B58\u76F8\u5173\u7684\u4EE3\u7801\u4E86\uFF0C\u8BB0\u5F97\u4FEE\u6539\u9AD8\u4EAE\u90E8\u5206\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FDB\u5165\u9875\u9762\u65F6\uFF0C\u5148\u5C06\u5F53\u524D\u9875\u9762\u7684 name \u4FE1\u606F\u5B58\u5165 keep-alive \u5168\u5C40\u72B6\u6001</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vm<span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/add&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;TestList&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u56E0\u4E3A\u5E76\u4E0D\u662F\u6240\u6709\u7684\u8DEF\u7531\u8DF3\u8F6C\u90FD\u9700\u8981\u5C06\u5F53\u524D\u9875\u9762\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F8B\u5982\u6700\u5E38\u89C1\u7684\u60C5\u51B5\uFF0C\u4ECE\u5217\u8868\u9875\u8FDB\u5165\u8BE6\u60C5\u9875\uFF0C\u5219\u9700\u8981\u5C06\u5217\u8868\u9875\u7F13\u5B58\uFF0C\u800C\u4ECE\u5217\u8868\u9875\u8DF3\u8F6C\u5230\u5176\u5B83\u9875\u9762\uFF0C\u5219\u4E0D\u9700\u8981\u5C06\u5217\u8868\u9875\u7F13\u5B58</span>
        <span class="token comment">// \u6240\u4EE5\u4E0B\u9762\u7684\u4EE3\u7801\u610F\u601D\u5C31\u662F\uFF0C\u5982\u679C\u76EE\u6807\u8DEF\u7531\u7684 name \u4E0D\u5728\u6307\u5B9A\u7684\u6570\u7EC4\u5185\uFF0C\u5219\u5C06\u5F53\u524D\u9875\u9762\u7684 name \u4ECE keep-alive \u4E2D\u5220\u9664</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6CE8\u610F\uFF1A\u4E0A\u9762\u6821\u9A8C\u7684\u662F\u8DEF\u7531\u7684 name \uFF0C\u4E0B\u9762\u8BB0\u5F55\u7684\u662F\u5F53\u524D\u9875\u9762\u7684 name</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/remove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;TestList&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u518D\u5F80\u4E0B\u5C31\u662F\u9700\u8981\u4F60\u81EA\u5DF1\u7F16\u5199\u4E1A\u52A1\u4EE3\u7801\u7684\u90E8\u5206\u4E86\u3002</p><p>\u8BE6\u60C5\u9875\u4EE3\u7801\u5C31\u4E0D\u8D34\u4E86\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u7B80\u5355\uFF0C\u56E0\u4E3A\u628A\u8868\u5355\u90E8\u5206\u5355\u72EC\u5C01\u88C5\u6210\u7EC4\u4EF6\u5B58\u653E\u5728 <code>/src/views/[\u6A21\u5757\u6587\u4EF6\u5939]/components/DetailForm/index.vue</code> \u91CC\u4E86\uFF0C\u540C\u6837\u4F60\u5728 <code>components/</code> \u6587\u4EF6\u5939\u4E0B\u8FD8\u80FD\u770B\u5230\u53E6\u5916\u4E00\u4E2A <code>FormDialog</code> \u7684\u6587\u4EF6\u5939\uFF0C\u8FD9\u6837\u7684\u7528\u610F\u5176\u5B9E\u5F88\u660E\u663E\u4E86\uFF0C\u76EE\u7684\u5C31\u662F\u8BA9\u8868\u5355\u53EF\u4EE5\u590D\u7528\uFF0C<strong>\u53EF\u4EE5\u901A\u8FC7\u4F20\u7EDF\u8DEF\u7531\u8DF3\u8F6C\u7684\u5F62\u5F0F\u8FDB\u5165\u8BE6\u60C5\u9875\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5F39\u6846\u7684\u5F62\u5F0F\u6253\u5F00\u8BE6\u60C5\u9875</strong>\u3002</p><p>\u53EF\u80FD\u6709\u4EBA\u4F1A\u6709\u7591\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u5728\u751F\u6210\u6587\u4EF6\u7684\u65F6\u5019\u76F4\u63A5\u8BA9\u6211\u9009\u62E9\u7528\u54EA\u79CD\u5F62\u5F0F\uFF0C\u8FD9\u6837\u751F\u6210\u51FA\u6765\u5C31\u662F\u54EA\u79CD\uFF0C\u800C\u662F\u5728\u751F\u6210\u597D\u7684\u4EE3\u7801\u6587\u4EF6\u91CC\u518D\u8FDB\u884C\u914D\u7F6E\uFF1F</p><p>\u8FD9\u6837\u8BBE\u8BA1\u7684\u76EE\u7684\u4E3B\u8981\u6709\u4E24\u70B9\uFF1A</p><ol><li><strong>\u65B9\u4FBF\u540E\u671F\u7EF4\u62A4</strong>\u3002\u5173\u4E8E\u8BE6\u60C5\u9875\u5230\u5E95\u662F\u7528\u5F39\u6846\u8FD8\u662F\u8DEF\u7531\u8DF3\u8F6C\u7684\u5F62\u5F0F\uFF0C\u6211\u4EEC\u7684\u539F\u5219\u662F\uFF0C\u8868\u5355\u586B\u5199\u9879\u5982\u679C\u6BD4\u8F83\u5C11\uFF0C\u7528\u5F39\u6846\u5F62\u5F0F\uFF0C\u53CD\u4E4B\u7528\u8DEF\u7531\u8DF3\u8F6C\u5F62\u5F0F\uFF0C\u4F46\u8003\u8651\u5230\u9700\u6C42\u4F1A\u53D8\uFF0C\u53EF\u80FD\u4E00\u5F00\u59CB\u662F\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u8868\u5355\uFF0C\u540E\u671F\u9700\u6C42\u4E00\u70B9\u70B9\u589E\u52A0\uFF0C\u53D8\u6210\u4E86\u4E00\u4E2A\u5E9E\u5927\u7684\u8868\u5355\uFF0C\u8FD9\u65F6\u5019\u8981\u4ECE\u5F39\u6846\u6539\u6210\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u6216\u8005\u4ECE\u8DEF\u7531\u8DF3\u8F6C\u6539\u6210\u5F39\u6846\uFF0C\u90FD\u5F88\u9EBB\u70E6\u3002\u6240\u4EE5\u65B9\u4FBF\u540E\u671F\u7EF4\u62A4\uFF0C\u8FD9\u90E8\u5206\u8FD8\u662F\u505A\u6210\u4E86\u4E24\u79CD\u5F62\u5F0F\u5171\u5B58\uFF0C\u901A\u8FC7\u914D\u7F6E\u4E00\u952E\u5207\u6362\u3002</li><li><strong>\u8DE8\u6A21\u5757\u7684\u7EC4\u4EF6\u8C03\u7528</strong>\u3002\u4F8B\u5982\u6709\u4E24\u4E2A\u6A21\u5757\uFF0C\u4E00\u4E2A\u7528\u6237\u6A21\u5757\uFF0C\u4E00\u4E2A\u90E8\u95E8\u6A21\u5757\uFF0C\u7528\u6237\u8BE6\u60C5\u91CC\u6709\u4E00\u9879\u662F\u9009\u62E9\u90E8\u95E8\uFF0C\u4F46\u662F\u65B0\u589E\u7528\u6237\u7684\u65F6\u5019\u90E8\u95E8\u53EF\u80FD\u8FD8\u6CA1\u521B\u5EFA\uFF0C\u8FD9\u65F6\u5019\u8868\u5355\u5DF2\u7ECF\u586B\u5199\u4E00\u534A\u4E86\uFF0C\u5982\u679C\u8BA9\u7528\u6237\u79BB\u5F00\u9875\u9762\u53BB\u90E8\u95E8\u6A21\u5757\u91CC\u521B\u5EFA\u597D\u518D\u56DE\u6765\u65B0\u5EFA\u7528\u6237\uFF0C\u5148\u4E0D\u8BF4\u6570\u636E\u5982\u4F55\u7F13\u5B58\u7684\u95EE\u9898\uFF0C\u5149\u662F\u64CD\u4F5C\u6D41\u88AB\u6253\u65AD\uFF0C\u9875\u9762\u8DF3\u6765\u8DF3\u53BB\u5C31\u5F88\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u4E86\u3002\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u5728\u9009\u62E9\u90E8\u95E8\u540E\u9762\u653E\u4E00\u4E2A\u65B0\u589E\u90E8\u95E8\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA\u65B0\u589E\u90E8\u95E8\u7684\u5F39\u6846\uFF0C\u65B0\u589E\u5B8C\u6210\u540E\u5F39\u6846\u5173\u95ED\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u5728\u65B0\u589E\u7528\u6237\u754C\u9762\u505A\u540E\u7EED\u64CD\u4F5C\u3002</li></ol><hr><p>\u5F53\u7136\u6807\u51C6\u6A21\u5757\u4E5F\u53EA\u662F\u6846\u67B6\u63D0\u4F9B\u7684\u4E00\u4E2A\u6807\u51C6\uFF0C\u4F60\u53EF\u4EE5\u6CBF\u7528\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u6307\u5B9A\u4E00\u5957\u6807\u51C6\uFF0C\u6BD5\u7ADF\u6700\u7EC8\u76EE\u7684\u90FD\u662F\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u540C\u65F6\u4E5F\u786E\u4FDD\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\u7684\u65F6\u5019\u6709\u4E2A\u7EDF\u4E00\u6807\u51C6\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6BCF\u4E2A\u4EBA\u505A\u51FA\u6765\u7684\u6A21\u5757\u98CE\u683C\u90FD\u4E0D\u4E00\u6837\u3002</p>`,9);function w(a,y){const p=t("Badge");return e(),o(l,null,[n("h1",k,[b,m,c(p,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),d,n("p",null,[n("img",{src:a.$withBase("/vue2/module1.gif")},null,8,g)]),v,n("p",null,[n("img",{src:a.$withBase("/vue2/module2.gif")},null,8,h)]),f],64)}var j=i(u,[["render",w]]);export{j as default};
