import{d as e,L as i,a5 as t,M as o,N as C,O as n,A as c,_ as m,X as d,a as s,aw as E}from"./chunks/framework.BFDeQwB9.js";const u={},F=e({name:"BaseWatermarkDemo",__name:"base-watermark-demo",props:i({prop1:{}},u),emits:["event1"],setup(l){return(p,r)=>{const a=t("base-watermark");return o(),C(a,{class:"base-watermark-demo","h-300px":"",text:"Base Vue"},{default:n(()=>[c(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam suscipit id consequuntur explicabo veniam voluptatibus consequatur. Unde architecto, minima labore illo non eius voluptatem dolor quia magni nemo, dolores obcaecati at nostrum sed facilis? Iure esse enim tempore voluptatum quam repellendus, voluptate ab perferendis labore totam ipsa consequuntur deserunt fuga laudantium officia distinctio aperiam! Dolores facilis quia eligendi beatae cupiditate mollitia libero, consequatur alias expedita dolor doloribus aspernatur distinctio ea, debitis quod ipsam delectus nemo incidunt qui natus dicta. Ad labore eaque nostrum, repudiandae aliquam reiciendis quis, hic in aperiam, necessitatibus optio. At pariatur aperiam totam a minima sequi? ")]),_:1})}}}),D=m(F,[["__scopeId","data-v-257bbc1a"]]),A=E('<h1 id="basewatermark-水印" tabindex="-1">BaseWatermark 水印 <a class="header-anchor" href="#basewatermark-水印" aria-label="Permalink to &quot;BaseWatermark 水印&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="给别人演示-demo-增加水印防止被盗" tabindex="-1">给别人演示 demo，增加水印防止被盗 <a class="header-anchor" href="#给别人演示-demo-增加水印防止被盗" aria-label="Permalink to &quot;给别人演示 demo，增加水印防止被盗&quot;">​</a></h3><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>',4),y=E('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>fontSize</td><td>字体大小</td><td><code>number</code></td><td><code>16</code></td><td></td></tr><tr><td>gap</td><td>间隙</td><td><code>number</code></td><td><code>100</code></td><td></td></tr><tr><td>text</td><td>显示文本</td><td><code>string</code></td><td><code>&#39;watermark&#39;</code></td><td></td></tr></tbody></table>',2),h=JSON.parse('{"title":"BaseWatermark 水印","description":"","frontmatter":{},"headers":[],"relativePath":"components/base-watermark.md","filePath":"components/base-watermark.md"}'),b={name:"components/base-watermark.md"},f=e({...b,setup(l){return(p,r)=>{const a=t("demo-preview");return o(),d("div",null,[A,s(a,{title:"基本使用",description:"",code:"%3Cscript%20lang=%22ts%22%3E%0Aexport%20interface%20BaseWatermarkDemoProps%20%7B%0A%20%20prop1?:%20string%0A%7D%0Aexport%20const%20BaseWatermarkDemoDefault%20=%20%7B%7D%0Aexport%20interface%20BaseWatermarkDemoEmits%20%7B%0A%20%20(event:%20'event1'):%20void%0A%7D%0A%3C/script%3E%0A%3Cscript%20setup%20lang=%22ts%22%3E%0AwithDefaults(defineProps%3CBaseWatermarkDemoProps%3E(),%20BaseWatermarkDemoDefault)%0AdefineEmits%3CBaseWatermarkDemoEmits%3E()%0AdefineOptions(%7B%0A%20%20name:%20'BaseWatermarkDemo',%0A%7D)%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cbase-watermark%20class=%22base-watermark-demo%22%20h-300px%20text=%22Base%20Vue%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Officiis%20ullam%20suscipit%20id%20consequuntur%20explicabo%20veniam%20voluptatibus%20consequatur.%20Unde%20architecto,%20minima%20labore%20illo%20non%20eius%20voluptatem%20dolor%20quia%20magni%20nemo,%20dolores%20obcaecati%20at%20nostrum%20sed%20facilis?%20Iure%20esse%20enim%20tempore%20voluptatum%20quam%20repellendus,%20voluptate%20ab%20perferendis%20labore%20totam%20ipsa%20consequuntur%20deserunt%20fuga%20laudantium%20officia%20distinctio%20aperiam!%20Dolores%20facilis%20quia%20eligendi%20beatae%20cupiditate%20mollitia%20libero,%20consequatur%20alias%20expedita%20dolor%20doloribus%20aspernatur%20distinctio%20ea,%20debitis%20quod%20ipsam%20delectus%20nemo%20incidunt%20qui%20natus%20dicta.%20Ad%20labore%20eaque%20nostrum,%20repudiandae%20aliquam%20reiciendis%20quis,%20hic%20in%20aperiam,%20necessitatibus%20optio.%20At%20pariatur%20aperiam%20totam%20a%20minima%20sequi?%0A%20%20%3C/base-watermark%3E%0A%3C/template%3E%0A%0A%3Cstyle%20scoped%20lang=%22scss%22%3E%0A.base-watermark-demo%20%7B%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20github-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseWatermarkDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E%20%20prop1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3F%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20string%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20BaseWatermarkDemoDefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseWatermarkDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'event1'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20void%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EwithDefaults%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseWatermarkDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%2C%20BaseWatermarkDemoDefault)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseWatermarkDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'BaseWatermarkDemo'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-watermark%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22base-watermark-demo%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20h-300px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22Base%20Vue%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Officiis%20ullam%20suscipit%20id%20consequuntur%20explicabo%20veniam%20voluptatibus%20consequatur.%20Unde%20architecto%2C%20minima%20labore%20illo%20non%20eius%20voluptatem%20dolor%20quia%20magni%20nemo%2C%20dolores%20obcaecati%20at%20nostrum%20sed%20facilis%3F%20Iure%20esse%20enim%20tempore%20voluptatum%20quam%20repellendus%2C%20voluptate%20ab%20perferendis%20labore%20totam%20ipsa%20consequuntur%20deserunt%20fuga%20laudantium%20officia%20distinctio%20aperiam!%20Dolores%20facilis%20quia%20eligendi%20beatae%20cupiditate%20mollitia%20libero%2C%20consequatur%20alias%20expedita%20dolor%20doloribus%20aspernatur%20distinctio%20ea%2C%20debitis%20quod%20ipsam%20delectus%20nemo%20incidunt%20qui%20natus%20dicta.%20Ad%20labore%20eaque%20nostrum%2C%20repudiandae%20aliquam%20reiciendis%20quis%2C%20hic%20in%20aperiam%2C%20necessitatibus%20optio.%20At%20pariatur%20aperiam%20totam%20a%20minima%20sequi%3F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-watermark%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22scss%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.base-watermark-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/Users/a1-6/Projects/github/52css/base-vue/docs/components/base-watermark-demo.vue",relativePath:"./base-watermark-demo.vue"},{default:n(()=>[s(D)]),_:1}),y])}}});export{h as __pageData,f as default};
