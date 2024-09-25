import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const d=JSON.parse('{"title":"青蛙跳台阶","description":"","frontmatter":{},"headers":[],"relativePath":"interview/青蛙跳台阶.md","filePath":"interview/青蛙跳台阶.md"}'),e={name:"interview/青蛙跳台阶.md"},p=l(`<h1 id="青蛙跳台阶" tabindex="-1">青蛙跳台阶 <a class="header-anchor" href="#青蛙跳台阶" aria-label="Permalink to &quot;青蛙跳台阶&quot;">​</a></h1><ul><li>青蛙可以每次可以跳1、2步</li><li>总共有n个台阶，请问青蛙可以有多少中跳法</li></ul><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * f(n) = 最后一步跳1阶 + 最后2步跳2阶</span></span>
<span class="line"><span style="color:#6A737D;"> * f(n) = f(n - 1) + f(n - 2)</span></span>
<span class="line"><span style="color:#6A737D;"> * 再加上边界条件</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 递归模式</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> steps</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> steps</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> steps</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,4),o=[p];function r(t,c,i,b,E,u){return a(),n("div",null,o)}const _=s(e,[["render",r]]);export{d as __pageData,_ as default};
