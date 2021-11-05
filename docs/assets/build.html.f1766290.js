import{r as a,o as e,c as s,b as n,w as t,a as o,F as p,e as d,d as c}from"./app.08c37072.js";const l={},r=d('<h1 id="构建与预览" tabindex="-1"><a class="header-anchor" href="#构建与预览" aria-hidden="true">#</a> 构建与预览</h1><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><p>项目开发完成之后，可以执行 <code>pnpm build</code> 命令进行构建，构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件。</p><p>如果是需要构建测试环境，则执行 <code>pnpm build:test</code> 命令，对应会在根目录生成 dist-test 文件夹。</p><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><p>生成好的 dist 文件夹一般需要部署至服务器才算部署发布成功，但为了保证构建出来的文件能正常运行，开发者通常希望能在本地先预览一下，可执行 <code>pnpm serve</code> 或 <code>pnpm serve:test</code> 命令预览不同环境构建出的文件夹。</p><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><p>在环境配置文件里设置 <code>VITE_BUILD_COMPRESS</code> 即可在构建时生成 <code>.gz</code> 或 <code>.br</code> 文件。</p>',8),i=o("div",{class:"language-dot ext-dot"},[o("pre",{class:"language-dot"},[o("code",null,[o("span",{class:"token node"},"VITE_BUILD_COMPRESS"),c(),o("span",{class:"token operator"},"="),c(),o("span",{class:"token attr-value"},"gzip"),c("\n")])])],-1),u=o("div",{class:"language-dot ext-dot"},[o("pre",{class:"language-dot"},[o("code",null,[o("span",{class:"token node"},"VITE_BUILD_COMPRESS"),c(),o("span",{class:"token operator"},"="),c(),o("span",{class:"token attr-value"},"brotli"),c("\n")])])],-1),g=o("div",{class:"language-dot ext-dot"},[o("pre",{class:"language-dot"},[o("code",null,[o("span",{class:"token node"},"VITE_BUILD_COMPRESS"),c(),o("span",{class:"token operator"},"="),c(),o("span",{class:"token attr-value"},"gzip"),o("span",{class:"token punctuation"},","),o("span",{class:"token node"},"brotli"),c("\n")])])],-1),h=d('<p>brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突。</p><p>两者均需要 nginx 安装指定模块并开启后才会生效。</p><h2 id="其它设置" tabindex="-1"><a class="header-anchor" href="#其它设置" aria-hidden="true">#</a> 其它设置</h2><p>在环境配置文件里除了可以设置压缩选项，还可设置：</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># 是否在打包时生成 sourcemap</span>\n<span class="token attr-name">VITE_BUILD_SOURCEMAP</span> <span class="token operator">=</span> <span class="token attr-value">true</span>\n<span class="token comment"># 是否在打包时删除 console 代码</span>\n<span class="token attr-name">VITE_BUILD_DROP_CONSOLE</span> <span class="token operator">=</span> <span class="token attr-value">true</span>\n</code></pre></div>',5),k={id:"生成-pwa-应用",tabindex:"-1"},m=o("a",{class:"header-anchor",href:"#生成-pwa-应用","aria-hidden":"true"},"#",-1),v=c(" 生成 PWA 应用 "),_=d('<p>在环境配置文件里开启 PWA 支持</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># 是否在打包时候生成PWA</span>\n<span class="token attr-name">VITE_BUILD_PWA</span> <span class="token operator">=</span> <span class="token attr-value">true</span>\n</code></pre></div><p>在 <code>/src/main.js</code> 开启 pwa 相关文件的引入</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// PWA</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./pwa&#39;</span>\n</code></pre></div><p>最后在 <code>./vite/plugins/pwa.js</code> 文件里修改 manifest 信息，对应的图片目录为 <code>./public/pwa_icons/</code> 。</p>',5);l.render=function(d,c){const l=a("CodeGroupItem"),b=a("CodeGroup"),x=a("Badge");return e(),s(p,null,[r,n(b,null,{default:t((()=>[n(l,{title:"开启 gzip"},{default:t((()=>[i])),_:1}),n(l,{title:"开启 brotli"},{default:t((()=>[u])),_:1}),n(l,{title:"同时开启 gzip 和 brotli"},{default:t((()=>[g])),_:1})])),_:1}),h,o("h3",k,[m,v,n(x,{type:"tip",text:"专业版",vertical:"top"})]),_],64)};export{l as default};
