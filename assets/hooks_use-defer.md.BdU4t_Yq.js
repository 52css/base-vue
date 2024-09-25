import{_ as e,X as a,M as t,aw as s}from"./chunks/framework.BFDeQwB9.js";const E=JSON.parse('{"title":"useDefer 控制响应才处理","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/use-defer.md","filePath":"hooks/use-defer.md"}'),n={name:"hooks/use-defer.md"},l=s(`<h1 id="usedefer-控制响应才处理" tabindex="-1">useDefer 控制响应才处理 <a class="header-anchor" href="#usedefer-控制响应才处理" aria-label="Permalink to &quot;useDefer 控制响应才处理&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>面对 for 循环高频组件</li></ul><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> defer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useDefer</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#B392F0;"> v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item, itemIndex) in 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;defer(itemIndex)&quot;</span><span style="color:#E1E4E8;">&gt;做其他事情&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>maxCount</td><td>最大控制数量</td><td><code>number</code></td><td>&#39;100&#39;</td><td></td></tr></tbody></table><h2 id="调用示例" tabindex="-1">调用示例 <a class="header-anchor" href="#调用示例" aria-label="Permalink to &quot;调用示例&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>number</td><td>控制数量</td><td><code>number</code></td><td>-</td><td></td></tr></tbody></table>`,10),o=[l];function r(d,p,c,i,h,u){return t(),a("div",null,o)}const m=e(n,[["render",r]]);export{E as __pageData,m as default};
