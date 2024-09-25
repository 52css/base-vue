import{_ as s,X as a,M as n,aw as e}from"./chunks/framework.BFDeQwB9.js";const E=JSON.parse('{"title":"Mac 如何本地设置签名","description":"","frontmatter":{},"headers":[],"relativePath":"software/Mac如何本地设置签名.md","filePath":"software/Mac如何本地设置签名.md"}'),p={name:"software/Mac如何本地设置签名.md"},l=e(`<h1 id="mac-如何本地设置签名" tabindex="-1">Mac 如何本地设置签名 <a class="header-anchor" href="#mac-如何本地设置签名" aria-label="Permalink to &quot;Mac 如何本地设置签名&quot;">​</a></h1><p>mac 生成 https 本地证书 生成证书 我们将使用 mkcert 这个零配置的命令行工具生成证书。</p><p>首先安装 mkcert。macOS 下可以使用 Homebrew 安装，其他系统请参考 mkcert 的文档：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> mkcert</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> nss</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中，nss 是可选的，如果不使用或者不需要测试 Firefox，那么可以不安装 nss。</p><p>接着我们创建一个目录来存放证书，比如 ~/.cert：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> ~/.cert</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自动生成证书：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">mkcert</span><span style="color:#79B8FF;"> -key-file</span><span style="color:#9ECBFF;"> ~/.cert/key.pem</span><span style="color:#79B8FF;"> -cert-file</span><span style="color:#9ECBFF;"> ~/.cert/cert.pem</span><span style="color:#9ECBFF;"> localhost</span><span style="color:#79B8FF;"> 192.168.100.139</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>让系统信任生成的证书：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">mkcert</span><span style="color:#79B8FF;"> -install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>因为需要在系统中安装本地 root CA，所以运行上述命令会请求 sudo 权限。只有初次生成证书时需要运行这个命令，后续通过 mkcert -key-file 生成的证书会自动被系统信任。</p><p>在你的项目中，配置使用 mkcert 生成的证书文件。例如，在 Vite 的配置中启用 HTTPS：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    https: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;certs/localhost-key.pem&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      cert: fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;certs/localhost.pem&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,14),o=[l];function r(c,t,i,d,b,y){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{E as __pageData,u as default};
