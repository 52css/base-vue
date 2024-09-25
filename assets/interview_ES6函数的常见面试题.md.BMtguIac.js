import{_ as s,X as a,M as n,aw as e}from"./chunks/framework.BFDeQwB9.js";const u=JSON.parse('{"title":"ES6函数的常见面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/ES6函数的常见面试题.md","filePath":"interview/ES6函数的常见面试题.md"}'),l={name:"interview/ES6函数的常见面试题.md"},p=e(`<h1 id="es6函数的常见面试题" tabindex="-1">ES6函数的常见面试题 <a class="header-anchor" href="#es6函数的常见面试题" aria-label="Permalink to &quot;ES6函数的常见面试题&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> obj</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Share&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  sayHi1</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  sayHi2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    (() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })(); </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">sayHi1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">sayHi2</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 第一个箭头函数没有this，取父，就是window</span></span>
<span class="line"><span style="color:#6A737D;">// 第二个去谁调用sayHi2, 就是 obj， 返回 =&gt; \`Share\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,5),o=[p];function r(c,t,i,E,b,d){return n(),a("div",null,o)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
