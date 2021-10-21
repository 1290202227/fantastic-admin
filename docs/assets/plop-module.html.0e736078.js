import{r as n,c as s,a,b as t,w as p,F as o,d as e,e as c,o as l}from"./app.49354eb1.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const i={},r={id:"标准模块",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#标准模块","aria-hidden":"true"},"#",-1),d=e(" 标准模块 "),g=e("在《"),m=e("代码文件自动生成 - module"),b=e("》里介绍了如何快速生成一个标准模块，这个标准模块是一个最基础的 CURD 模块，它包含列表页和编辑页，同时提供了搜索和删除的功能，并且同时也可以生成对应的 mock 文件，在这基础上可以更方便的进行业务扩展。"),v=c('<p>下面我就实际操作一遍，并介绍一下这个标准模块有哪些特性。</p><h1 id="用法说明" tabindex="-1"><a class="header-anchor" href="#用法说明" aria-hidden="true">#</a> 用法说明</h1><div class="language-text ext-text"><pre class="language-text"><code>? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）\n? 请选择模块创建目录 src/views\n? 请输入模块名 example\n? 请输入模块中文名称 演示\n? 是否生成 Mock Yes\n√  ++ \\src\\views\\example\\list.vue\n√  ++ \\src\\views\\example\\detail.vue\n√  ++ \\src\\views\\example\\components\\DetailForm\\index.vue\n√  ++ \\src\\views\\example\\components\\FormMode\\index.vue\n√  ++ \\src\\mock\\example.js\n</code></pre></div><p>这里我已经通过命令在 <code>./src/views/</code> 目录下创建好了一个 example 文件夹，并且也生成了 mock 数据。接下来需要去配置下路由，这样我们才可以在导航栏里访问到。</p><p>首先在 <code>./src/router/modules/</code> 目录下新建一个与文件夹同名的 <code>example.js</code> 文件，并在里面复制以下代码：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout/index.vue&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/example&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;演示&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleList&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/list.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;列表&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleCreate&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/detail.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;edit/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleEdit&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/detail.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>然后到 <code>./src/router/index.js</code> 文件里加上这个路由配置文件的引用。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Example <span class="token keyword">from</span> <span class="token string">&#39;./modules/example&#39;</span>\n\n<span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;页面&#39;</span><span class="token punctuation">,</span>\n            icon<span class="token operator">:</span> <span class="token string">&#39;ri-pages-line&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token operator">...</span>PagesExample<span class="token punctuation">,</span>\n            Example\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div></div><p>最后，我们还需要替换几处页面中路由的 <code>name</code> 因为需要和我们配置的路由 <code>name</code> 一致，才可以正确跳转页面。</p><p>先打开 <code>list.vue</code> 文件，找到 <code>onCreate()</code> 和 <code>onEdit()</code> 方法并替换：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formMode <span class="token operator">===</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleCreate&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formModeProps<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n        data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formModeProps<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">onEdit</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formMode <span class="token operator">===</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleEdit&#39;</span><span class="token punctuation">,</span>\n            params<span class="token operator">:</span> <span class="token punctuation">{</span>\n                id<span class="token operator">:</span> row<span class="token punctuation">.</span>id\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formModeProps<span class="token punctuation">.</span>id <span class="token operator">=</span> row<span class="token punctuation">.</span>id\n        data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formModeProps<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div></div><p>然后打开 <code>detail.vue</code> 文件，替换以下两处：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-header</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$route.name == <span class="token punctuation">&#39;</span>exampleCreate<span class="token punctuation">&#39;</span> ? <span class="token punctuation">&#39;</span>新增演示<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>编辑演示<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-arrow-left<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">round</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goBack<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>返 回<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-header</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>enableTabbar <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>enableMergeTabbar<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        proxy<span class="token punctuation">.</span>$tabbar<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;exampleList&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        proxy<span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;exampleList&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br></div></div><p>这时候就可以通过导航栏访问到我们的页面了，我们的一个演示模块也就初步创建好了。</p>',15),h=["src"],f=c('<h2 id="特性介绍" tabindex="-1"><a class="header-anchor" href="#特性介绍" aria-hidden="true">#</a> 特性介绍</h2><p>功能部分的介绍主要还是要看代码，先从列表页 <code>list.vue</code> 开始。</p><p>最先看到的是这句文件导入代码，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 <code>./src/util/pagination.js</code> 方便复用。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pagination<span class="token punctuation">,</span> getParams<span class="token punctuation">,</span> onSizeChange<span class="token punctuation">,</span> onCurrentChange<span class="token punctuation">,</span> onSortChange <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/util/pagination.js&#39;</span>\n</code></pre></div><p>接着在 <code>data</code> 里存放的是标准模块提供的一些配置项和必要数据参数字段。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token doc-comment comment">/**\n     * 详情展示模式\n     * router 路由跳转\n     * dialog 对话框\n     * drawer 抽屉\n     */</span>\n    formMode<span class="token operator">:</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 详情</span>\n    formModeProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        id<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 搜索</span>\n    search<span class="token operator">:</span> <span class="token punctuation">{</span>\n        account<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n        mobile<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n        sex<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    searchMore<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 批量操作</span>\n    batch<span class="token operator">:</span> <span class="token punctuation">{</span>\n        enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        selectionDataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 列表数据</span>\n    dataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div></div><p>标准模块提供了 3 种详情展示模式，默认是路由跳转的方式，你可以修改 <code>formMode: &#39;dialog&#39;</code> 开启详情弹窗模式，保存后效果如下：</p>',7),x=["src"],w=c('<p>紧接着的是下面这段代码，它的作用是当列表页开启缓存时，并以路由跳转的方式进入详情页进行新增或编辑操作后，先对缓存的列表页进行一次数据更新，然后再跳转回列表页，这样即可以保证列表页相关搜索、翻页等状态可以被缓存，又能保证数据是最新。具体实现则是通过绑定一个事件总线，并在详情页里调用这个事件。需要注意的是，专业版如果开启标签栏，事件总线的名称得确保唯一。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formMode <span class="token operator">===</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        proxy<span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;get-data-list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formMode <span class="token operator">===</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        proxy<span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;get-data-list&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>再往下就是需要你修改或编写业务代码的部分，这里就不继续展开了。</p><p>详情页的代码就不多介绍了，相对比较简单，可自行阅读理解。其中表单部分单独封装成组件存放在 <code>./src/views/[模块文件夹]/components/DetailForm/index.vue</code> 里了，同样你在 <code>components/</code> 文件夹下还能看到另外一个 <code>FormMode</code> 的文件夹，这样的用意是让表单可以复用，<strong>可以通过路由跳转的形式进入详情页，也可以通过弹窗或抽屉的形式打开详情页</strong>。</p><p>可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？</p><p>这样设计的目的主要有三点：</p><ol><li><strong>合理使用</strong>。关于表单具体使用哪种展示模式比较好，我们的建议是，当表单与当前列表页关联性较强，内容少则使用弹窗，内容多则使用抽屉；而当表单与当前列表页关联性较弱，且内容多，则使用路由跳转，让新页面进行承载。</li><li><strong>方便后期维护</strong>。考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候就要从弹窗或抽屉改成路由跳转，反之也可能是从路由跳转改成弹窗或抽屉，处理起来都很麻烦。所以方便后期维护，这部分是有意而为之，做成了 3 种形式共存，通过配置可一键切换。</li><li><strong>跨模块的组件调用</strong>。例如有两个管理模块，一个用户管理，一个部门管理，当我在填写新增用户表单的时候，表单项里有一项是选择部门，这时候部门可能还没创建，但表单已经填写一半了。如果让用户离开页面去部门管理里创建好部门后，再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的操作按钮，点击后弹出新增部门的弹窗，新增完成后弹窗关闭，让用户可以继续在新增用户的界面做后续操作。</li></ol><hr><p>当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。</p>',9);var y=u(i,[["render",function(e,c){const u=n("Badge"),i=n("RouterLink");return l(),s(o,null,[a("h1",r,[k,d,t(u,{type:"tip",text:"专业版",vertical:"top"})]),a("p",null,[g,t(i,{to:"/guide/plop.html#module"},{default:p((()=>[m])),_:1}),b]),v,a("p",null,[a("img",{src:e.$withBase("/module1.gif")},null,8,h)]),f,a("p",null,[a("img",{src:e.$withBase("/module2.gif")},null,8,x)]),w],64)}]]);export{y as default};
