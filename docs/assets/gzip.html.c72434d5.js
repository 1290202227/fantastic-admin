import{r as e,o as n,c as a,a as s,b as i,F as t,e as r,d as p}from"./app.08c37072.js";const c={},o=r('<h1 id="gzip-支持" tabindex="-1"><a class="header-anchor" href="#gzip-支持" aria-hidden="true">#</a> gzip 支持</h1><p>除了使用 CDN 来提高加载访问速度外，如果后端服务器支持，还可以开启 gzip 进行文件压缩，这是一种更显著的减小文件体积的处理办法，通常可以减小 60% 以上的体积。</p><p>开启方式也很简单，只需在 <code>.env.*</code> 配置文件里修改为：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_GZIP = ON\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>开启后再进行项目打包时，会同时生成 <code>.gz</code> 文件。</p>',5),d=p("最后记得开启服务端对 gzip 的支持，以 nginx 为例，需要在配置里加上 "),l=s("code",null,"gzip_static on;",-1),g=p(" 这行配置，如果 nginx 中的 http_gzip_static_module 模块不存在，则还需要进行添加，可参考《"),u={href:"https://www.cnblogs.com/caicaizi/p/10241700.html",target:"_blank",rel:"noopener noreferrer"},h=p("yum安装下的nginx，如何添加模块，和添加第三方模块"),m=p("》");c.render=function(r,p){const c=e("OutboundLink");return n(),a(t,null,[o,s("p",null,[d,l,g,s("a",u,[h,i(c)]),m])],64)};export{c as default};
