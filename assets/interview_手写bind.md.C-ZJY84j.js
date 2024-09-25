import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const F=JSON.parse('{"title":"手写 bind","description":"","frontmatter":{},"headers":[],"relativePath":"interview/手写bind.md","filePath":"interview/手写bind.md"}'),p={name:"interview/手写bind.md"},e=l(`<h1 id="手写-bind" tabindex="-1">手写 bind <a class="header-anchor" href="#手写-bind" aria-label="Permalink to &quot;手写 bind&quot;">​</a></h1><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">Function</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">myBind</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 获取this指向</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> fn</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">restArgs</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">restArgs)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(ctx, [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">restArgs])</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),o=[e];function r(t,c,i,E,y,d){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{F as __pageData,u as default};
