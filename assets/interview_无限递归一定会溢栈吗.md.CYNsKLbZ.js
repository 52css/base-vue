import{_ as s,X as a,M as n,aw as e}from"./chunks/framework.BFDeQwB9.js";const h=JSON.parse('{"title":"无限递归一定会溢栈吗","description":"","frontmatter":{},"headers":[],"relativePath":"interview/无限递归一定会溢栈吗.md","filePath":"interview/无限递归一定会溢栈吗.md"}'),l={name:"interview/无限递归一定会溢栈吗.md"},o=e(`<h1 id="无限递归一定会溢栈吗" tabindex="-1">无限递归一定会溢栈吗 <a class="header-anchor" href="#无限递归一定会溢栈吗" aria-label="Permalink to &quot;无限递归一定会溢栈吗&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout</span><span style="color:#E1E4E8;">(foo, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 1. 主线程调用foo，通知记时线程等xx秒执foo，主线程结束</span></span>
<span class="line"><span style="color:#6A737D;"> * 2. 记时线程等xx秒，把foo加入到主进程，重复1</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,5),p=[o];function t(r,c,i,d,_,u){return n(),a("div",null,p)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
