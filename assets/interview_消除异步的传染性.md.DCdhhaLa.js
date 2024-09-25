import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const F=JSON.parse('{"title":"消除异步的传染性","description":"","frontmatter":{},"headers":[],"relativePath":"interview/消除异步的传染性.md","filePath":"interview/消除异步的传染性.md"}'),p={name:"interview/消除异步的传染性.md"},e=l(`<h1 id="消除异步的传染性" tabindex="-1">消除异步的传染性 <a class="header-anchor" href="#消除异步的传染性" aria-label="Permalink to &quot;消除异步的传染性&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> getUser</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./1.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> m1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> getUser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> user;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> m2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> m1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> user;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> m3</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> m2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> user;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> m3</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> run</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 1. 改动fetch</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> oldFetch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fetch;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// pending | fulfilled | rejected</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> newFetch</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 是否有缓存</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cache.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;fulfilled&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cache.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (cache.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rejected&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> cache.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> p</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> oldFetch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;fulfilled&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;rejected&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#6A737D;">  // 2. 运行func</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    func</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      err.</span><span style="color:#B392F0;">finally</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.fetch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newFetch;</span></span>
<span class="line"><span style="color:#B392F0;">        func</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.fetch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> oldFetch;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 3. 返回fetch</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.fetch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> oldFetch;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fun</span><span style="color:#E1E4E8;">(main);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,5),o=[e];function c(r,t,E,i,y,b){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
