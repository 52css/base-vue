import{_ as s,X as n,M as a,aw as l}from"./chunks/framework.BFDeQwB9.js";const F=JSON.parse('{"title":"最优解问题的典型思路","description":"","frontmatter":{},"headers":[],"relativePath":"interview/最优解问题的典型思路.md","filePath":"interview/最优解问题的典型思路.md"}'),p={name:"interview/最优解问题的典型思路.md"},e=l(`<h1 id="最优解问题的典型思路" tabindex="-1">最优解问题的典型思路 <a class="header-anchor" href="#最优解问题的典型思路" aria-label="Permalink to &quot;最优解问题的典型思路&quot;">​</a></h1><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 不能取相邻的2个数， nums = [1, 2, 3, 1]</span></span>
<span class="line"><span style="color:#6A737D;"> * 最大值 = 1 + 3 = 4</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * dp[i] = Math.max(</span></span>
<span class="line"><span style="color:#6A737D;"> *  nums[i] + dp[i - 2],</span></span>
<span class="line"><span style="color:#6A737D;"> *  dp[i - 1]</span></span>
<span class="line"><span style="color:#6A737D;"> * )</span></span>
<span class="line"><span style="color:#6A737D;"> * i = 0 =&gt; dpi[0] = nums[0]</span></span>
<span class="line"><span style="color:#6A737D;"> * i = 1 =&gt; Math.max(nums[0], nums[1])</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#B392F0;"> rob</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (nums.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (nums.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> nums[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (nums.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(nums[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], nums[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dp</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [nums[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(nums[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], nums[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dp[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(nums[i] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">], dp[i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dp[nums.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,5),o=[e];function r(c,t,i,E,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{F as __pageData,m as default};
