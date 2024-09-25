import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const u=JSON.parse('{"title":"并发任务控制","description":"","frontmatter":{},"headers":[],"relativePath":"interview/并发任务控制.md","filePath":"interview/并发任务控制.md"}'),p={name:"interview/并发任务控制.md"},e=l(`<h1 id="并发任务控制" tabindex="-1">并发任务控制 <a class="header-anchor" href="#并发任务控制" aria-label="Permalink to &quot;并发任务控制&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> timeout</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, time)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> superTask</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SuperTask</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  superTask</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> timeout</span><span style="color:#E1E4E8;">(time))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`任务\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}完成\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 10000ms后输出： 任务1完成</span></span>
<span class="line"><span style="color:#B392F0;">addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 5000ms后输出：任务2完成</span></span>
<span class="line"><span style="color:#B392F0;">addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 8000ms后输出：任务3完成</span></span>
<span class="line"><span style="color:#B392F0;">addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 12000ms后输出：任务4完成</span></span>
<span class="line"><span style="color:#B392F0;">addTask</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 150000ms后输出：任务5完成</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SuperTask</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parallelCount</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.parallelCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parallelCount;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tasks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.runningCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 正在运行的任务数量</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.tasks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        task,</span></span>
<span class="line"><span style="color:#E1E4E8;">        resolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">        reject,</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_run</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  _run</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.runningCount </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.parallelCount </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tasks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">task</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">reject</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tasks.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.runningCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">task</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">finally</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.runningCount</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_run</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,5),o=[e];function r(c,t,E,y,i,F){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
