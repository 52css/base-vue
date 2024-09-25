import{_ as s,X as a,M as n,aw as l}from"./chunks/framework.BFDeQwB9.js";const u=JSON.parse('{"title":"变量交换的骚操作","description":"","frontmatter":{},"headers":[],"relativePath":"interview/变量交换的骚操作.md","filePath":"interview/变量交换的骚操作.md"}'),p={name:"interview/变量交换的骚操作.md"},e=l(`<h1 id="变量交换的骚操作" tabindex="-1">变量交换的骚操作 <a class="header-anchor" href="#变量交换的骚操作" aria-label="Permalink to &quot;变量交换的骚操作&quot;">​</a></h1><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// todo, 完善代码</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 6, 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="正统写法" tabindex="-1">正统写法 <a class="header-anchor" href="#正统写法" aria-label="Permalink to &quot;正统写法&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 6, 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="解构" tabindex="-1">解构 <a class="header-anchor" href="#解构" aria-label="Permalink to &quot;解构&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[a, b] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [b, a];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 6, 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="只能是数字" tabindex="-1">只能是数字 <a class="header-anchor" href="#只能是数字" aria-label="Permalink to &quot;只能是数字&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 6, 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="只能是数字-并且是整数" tabindex="-1">只能是数字, 并且是整数 <a class="header-anchor" href="#只能是数字-并且是整数" aria-label="Permalink to &quot;只能是数字, 并且是整数&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 6, 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,10),o=[e];function r(c,t,i,E,b,y){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
