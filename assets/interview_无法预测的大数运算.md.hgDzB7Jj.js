import{_ as s,X as a,M as n,aw as l}from"./chunks/framework.BFDeQwB9.js";const E=JSON.parse('{"title":"无法预测的大数运算","description":"","frontmatter":{},"headers":[],"relativePath":"interview/无法预测的大数运算.md","filePath":"interview/无法预测的大数运算.md"}'),e={name:"interview/无法预测的大数运算.md"},p=l(`<h1 id="无法预测的大数运算" tabindex="-1">无法预测的大数运算 <a class="header-anchor" href="#无法预测的大数运算" aria-label="Permalink to &quot;无法预测的大数运算&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#79B8FF;"> START</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> **</span><span style="color:#79B8FF;"> 53</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#79B8FF;"> END</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> START</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> START</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> END</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loop&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面这段代码会输出多少次 loop？</p><ul><li>A. 99 次</li><li>B. 100 次</li><li>C. 报错</li><li>D. 不可预测</li></ul><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 答案：D</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * js存储</span></span>
<span class="line"><span style="color:#6A737D;"> * 符号、指数（1位，二进制只有1）、精度（52位）</span></span>
<span class="line"><span style="color:#6A737D;"> * 最大值, 指数1，精度都是1， 2**53 - 1</span></span>
<span class="line"><span style="color:#6A737D;"> * 超出这个最大值就不确定</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,7),o=[p];function r(c,t,i,d,b,y){return n(),a("div",null,o)}const _=s(e,[["render",r]]);export{E as __pageData,_ as default};
