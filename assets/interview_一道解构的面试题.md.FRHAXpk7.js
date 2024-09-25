import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const F=JSON.parse('{"title":"一道解构的面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/一道解构的面试题.md","filePath":"interview/一道解构的面试题.md"}'),p={name:"interview/一道解构的面试题.md"},e=l(`<h1 id="一道解构的面试题" tabindex="-1">一道解构的面试题 <a class="header-anchor" href="#一道解构的面试题" aria-label="Permalink to &quot;一道解构的面试题&quot;">​</a></h1><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 让下面等式成立</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 3, 4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="讲解" tabindex="-1">讲解 <a class="header-anchor" href="#讲解" aria-label="Permalink to &quot;讲解&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 数组解构的本质，调用\`Symbol.iterator\` 得到可迭代对象</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> arr</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> iter</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> arr[Symbol.iterator]()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> b</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b) </span><span style="color:#6A737D;">// 3, 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果需要对象支持，扩充原始方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#79B8FF;">Object</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">[Symbol.iterator] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> arr</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 返回一个迭代器</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> arr[Symbol.iterator]()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 简写成生成器结构</span></span>
<span class="line"><span style="color:#79B8FF;">Object</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">[Symbol.iterator] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> function*</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,5),o=[e];function r(c,t,i,E,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{F as __pageData,m as default};
