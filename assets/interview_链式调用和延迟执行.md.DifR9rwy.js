import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const u=JSON.parse('{"title":"链式调用和延迟执行","description":"","frontmatter":{},"headers":[],"relativePath":"interview/链式调用和延迟执行.md","filePath":"interview/链式调用和延迟执行.md"}'),p={name:"interview/链式调用和延迟执行.md"},e=l(`<h1 id="链式调用和延迟执行" tabindex="-1">链式调用和延迟执行 <a class="header-anchor" href="#链式调用和延迟执行" aria-label="Permalink to &quot;链式调用和延迟执行&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 实现</span></span>
<span class="line"><span style="color:#B392F0;">arrange</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;William&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">wait</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">do</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;commit&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">waitFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 等待3s</span></span>
<span class="line"><span style="color:#6A737D;">// &gt; William is notified</span></span>
<span class="line"><span style="color:#6A737D;">// 等待5s</span></span>
<span class="line"><span style="color:#6A737D;">// &gt; Start to commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> arrange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> tasks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  tasks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}  is notified\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> wait</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tasks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, time </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> doSomething</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">action</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tasks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;"> \`Start to \${</span><span style="color:#E1E4E8;">action</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> waitFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tasks.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, time </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> task) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#B392F0;"> task</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wait,</span></span>
<span class="line"><span style="color:#E1E4E8;">    do: doSomething,</span></span>
<span class="line"><span style="color:#E1E4E8;">    waitFirst,</span></span>
<span class="line"><span style="color:#E1E4E8;">    execute,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,5),o=[e];function r(c,t,E,i,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
