import{r as s,o as n,c as e,a,b as t,F as l,e as o,d as r}from"./app.1fbf0d12.js";const c={},p={id:"自定义字体",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#自定义字体","aria-hidden":"true"},"#",-1),d=o(" 自定义字体 "),u=a("blockquote",null,[a("p",null,"用户访问使用了自定义字体的页面时，会自动下载字体文件，字体文件有大有小，所以不建议在非英文环境中使用。")],-1),f=a("p",null,"框架预设了 Digital 7 的两套字体，除此之外，你也可以通过以下方法引入你需要的自定义字体。",-1),h=a("h2",{id:"找字体",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#找字体","aria-hidden":"true"},"#"),o(" 找字体")],-1),g=o("访问 "),b={href:"https://www.dafont.com/",target:"_blank",rel:"noopener noreferrer"},m=o("DaFont"),k=o("，如果有其它字体站也可以，主要是下载 "),w=a("code",null,".ttf",-1),y=o(" 格式的字体文件。"),x=["src"],v=a("h2",{id:"生成字体",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#生成字体","aria-hidden":"true"},"#"),o(" 生成字体")],-1),q=a("blockquote",null,[a("p",null,[a("code",null,".ttf"),o(" 格式的字体文件不是浏览器支持的字体格式，所以需要通过 "),a("code",null,".ttf"),o(" 生成其它格式的字体文件。")])],-1),B=o("访问 "),D={href:"https://www.fontsquirrel.com/tools/webfont-generator",target:"_blank",rel:"noopener noreferrer"},F=o("Font Squirrel"),$=o("，上传 "),_=a("code",null,".ttf",-1),j=o(" 文件，并按照下面设置后，点击下载。"),L=["src"],O=r('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>将上一步下载的压缩包解压并放入 <code>./src/assets/fonts/</code> 目录下，注意按文件夹区分，随后引入文件夹中的 <code>stylesheet.css</code> 即可使用，以 Digital 7 字体为例：</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&#39;../../assets/fonts/digital-7/stylesheet.css&#39;</span><span class="token punctuation">;</span>\n<span class="token selector">.digital-7 </span><span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;digital-7regular&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>字体的 <code>font-family</code> 名称在 <code>stylesheet.css</code> 里查看。</p><p>另外你也可以将 <code>@import &#39;../../assets/fonts/digital-7/stylesheet.css&#39;;</code> 这句代码放到全局引入，这样所有页面就都可以通过设置 <code>font-family: &#39;digital-7regular&#39;;</code> 直接使用了。</p>',5);c.render=function(o,r){const c=s("Badge"),S=s("OutboundLink");return n(),e(l,null,[a("h1",p,[i,d,t(c,{type:"tip",text:"专业版",vertical:"top"})]),u,f,h,a("p",null,[g,a("a",b,[m,t(S)]),k,w,y]),a("p",null,[a("img",{src:o.$withBase("/font1.png")},null,8,x)]),v,q,a("p",null,[B,a("a",D,[F,t(S)]),$,_,j]),a("p",null,[a("img",{src:o.$withBase("/font2.png")},null,8,L)]),O],64)};export{c as default};
