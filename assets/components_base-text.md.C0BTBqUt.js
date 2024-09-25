import{d as f,L as B,r as A,a5 as y,M as i,X as c,Z as s,v as D,ax as d,A as a,a as E,O as n,F as u,S as x,a8 as b,a9 as h,_ as g,aw as m}from"./chunks/framework.BFDeQwB9.js";const F=e=>(b("data-v-a37a9970"),e=e(),h(),e),v=F(()=>s("h3",null,"只有一行居中对其 + 多行局左对其",-1)),q=F(()=>s("h3",null,"多行省略号",-1)),_=F(()=>s("h3",null,"资源省略号",-1)),L={"w-200px":""},T={},P=f({name:"BaseTextDemo",__name:"base-text-demo",props:B({prop1:{}},T),emits:["event1"],setup(e){const l=A(!0),t=A(!1);return(r,p)=>{const o=y("base-text");return i(),c(u,null,[v,s("label",null,[D(s("input",{"onUpdate:modelValue":p[0]||(p[0]=C=>t.value=C),type:"checkbox"},null,512),[[d,t.value]]),a(" 多行 ")]),s("label",null,[D(s("input",{"onUpdate:modelValue":p[1]||(p[1]=C=>l.value=C),type:"checkbox"},null,512),[[d,l.value]]),a(" 居中 ")]),E(o,{align:l.value?"center":"left"},{default:n(()=>[a(" 只有一行 "),t.value?(i(),c(u,{key:0},[a(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit officiis! ")],64)):x("",!0)]),_:1},8,["align"]),q,E(o,{maxline:3},{default:n(()=>[a(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi minus tempora fugiat deserunt nulla cumque blanditiis cupiditate architecto sunt autem debitis nesciunt assumenda sapiente maxime, quis velit sit officiis! ")]),_:1}),_,s("div",L,[E(o,{maxline:1,suffix:".jpg"},{default:n(()=>[a(" fsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdf ")]),_:1}),E(o,{maxline:1,suffix:".jpg"},{default:n(()=>[a(" abc ")]),_:1})])],64)}}}),k=g(P,[["__scopeId","data-v-a37a9970"]]),w=m('<h1 id="basetext-文字展示" tabindex="-1">BaseText 文字展示 <a class="header-anchor" href="#basetext-文字展示" aria-label="Permalink to &quot;BaseText 文字展示&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="表格单元格" tabindex="-1">表格单元格 <a class="header-anchor" href="#表格单元格" aria-label="Permalink to &quot;表格单元格&quot;">​</a></h3><ul><li>一行居中</li><li>多行局左对其</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>',5),j=m('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>align</td><td>对其</td><td><code>&#39;left&#39;</code> | <code>&#39;center&#39;</code></td><td><code>left</code></td><td></td></tr><tr><td>maxline</td><td>最多显示多少行，超出显示省略号</td><td><code>number</code></td><td>-</td><td></td></tr><tr><td>suffix</td><td>后缀，常用资源省略号</td><td><code>string</code></td><td>-</td><td></td></tr></tbody></table>',2),I=JSON.parse('{"title":"BaseText 文字展示","description":"","frontmatter":{},"headers":[],"relativePath":"components/base-text.md","filePath":"components/base-text.md"}'),N={name:"components/base-text.md"},S=f({...N,setup(e){return(l,t)=>{const r=y("demo-preview");return i(),c("div",null,[w,E(r,{title:"基本使用",description:"",code:"%3Cscript%20lang=%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue';%0Aexport%20interface%20BaseTextDemoProps%20%7B%0A%20%20prop1?:%20string;%0A%7D%0Aexport%20const%20BaseTextDemoDefault%20=%20%7B%7D;%0Aexport%20interface%20BaseTextDemoEmits%20%7B%0A%20%20(event:%20'event1'):%20void;%0A%7D%0A%3C/script%3E%0A%3Cscript%20setup%20lang=%22ts%22%3E%0AwithDefaults(defineProps%3CBaseTextDemoProps%3E(),%20BaseTextDemoDefault);%0AdefineEmits%3CBaseTextDemoEmits%3E();%0AdefineOptions(%7B%0A%20%20name:%20'BaseTextDemo',%0A%7D);%0Aconst%20align%20=%20ref(true);%0Aconst%20toggle%20=%20ref(false);%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Ch3%3E%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%E5%B1%85%E4%B8%AD%E5%AF%B9%E5%85%B6%20+%20%E5%A4%9A%E8%A1%8C%E5%B1%80%E5%B7%A6%E5%AF%B9%E5%85%B6%3C/h3%3E%0A%20%20%3Clabel%3E%20%3Cinput%20v-model=%22toggle%22%20type=%22checkbox%22%20/%3E%20%E5%A4%9A%E8%A1%8C%20%3C/label%3E%0A%20%20%3Clabel%3E%20%3Cinput%20v-model=%22align%22%20type=%22checkbox%22%20/%3E%20%E5%B1%85%E4%B8%AD%20%3C/label%3E%0A%20%20%3Cbase-text%20:align=%22align%20?%20'center'%20:%20'left'%22%3E%0A%20%20%20%20%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%0A%20%20%20%20%3Ctemplate%20v-if=%22toggle%22%3E%0A%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur,%20adipisicing%20elit.%20Laborum%20quasi%0A%20%20%20%20%20%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%0A%20%20%20%20%20%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime,%20quis%0A%20%20%20%20%20%20velit%20sit%20officiis!Lorem%20ipsum%20dolor%20sit%20amet%20consectetur,%20adipisicing%0A%20%20%20%20%20%20elit.%20Laborum%20quasi%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%0A%20%20%20%20%20%20cupiditate%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%0A%20%20%20%20%20%20maxime,%20quis%20velit%20sit%20officiis!%0A%20%20%20%20%3C/template%3E%0A%20%20%3C/base-text%3E%0A%20%20%3Ch3%3E%E5%A4%9A%E8%A1%8C%E7%9C%81%E7%95%A5%E5%8F%B7%3C/h3%3E%0A%20%20%3Cbase-text%20:maxline=%223%22%3E%0A%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur,%20adipisicing%20elit.%20Laborum%20quasi%0A%20%20%20%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%20architecto%0A%20%20%20%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime,%20quis%20velit%20sit%0A%20%20%20%20officiis!Lorem%20ipsum%20dolor%20sit%20amet%20consectetur,%20adipisicing%20elit.%20Laborum%0A%20%20%20%20quasi%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%0A%20%20%20%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime,%20quis%20velit%0A%20%20%20%20sit%20officiis!%0A%20%20%3C/base-text%3E%0A%20%20%3Ch3%3E%E8%B5%84%E6%BA%90%E7%9C%81%E7%95%A5%E5%8F%B7%3C/h3%3E%0A%20%20%3Cdiv%20w-200px%3E%0A%20%20%20%20%3Cbase-text%20:maxline=%221%22%20suffix=%22.jpg%22%3E%0A%20%20%20%20%20%20fsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdf%0A%20%20%20%20%3C/base-text%3E%0A%20%20%20%20%3Cbase-text%20:maxline=%221%22%20suffix=%22.jpg%22%3E%0A%20%20%20%20%20%20abc%0A%20%20%20%20%3C/base-text%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%0A%3Cstyle%20scoped%20lang=%22scss%22%3E%0A.base-text-demo%20%7B%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20github-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseTextDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E%20%20prop1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3F%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20string%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20BaseTextDemoDefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseTextDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'event1'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20void%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EwithDefaults%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseTextDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%2C%20BaseTextDemoDefault)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseTextDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'BaseTextDemo'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20align%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20toggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%E5%B1%85%E4%B8%AD%E5%AF%B9%E5%85%B6%20%2B%20%E5%A4%9A%E8%A1%8C%E5%B1%80%E5%B7%A6%E5%AF%B9%E5%85%B6%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22checkbox%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%2F%3E%20%E5%A4%9A%E8%A1%8C%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Ealign%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22checkbox%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%2F%3E%20%E5%B1%85%E4%B8%AD%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Ealign%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Ealign%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'center'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'left'%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20v-if%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%2C%20adipisicing%20elit.%20Laborum%20quasi%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime%2C%20quis%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20velit%20sit%20officiis!Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%2C%20adipisicing%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20elit.%20Laborum%20quasi%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20cupiditate%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20maxime%2C%20quis%20velit%20sit%20officiis!%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%E5%A4%9A%E8%A1%8C%E7%9C%81%E7%95%A5%E5%8F%B7%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Emaxline%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%2C%20adipisicing%20elit.%20Laborum%20quasi%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%20architecto%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime%2C%20quis%20velit%20sit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20officiis!Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%2C%20adipisicing%20elit.%20Laborum%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20quasi%20minus%20tempora%20fugiat%20deserunt%20nulla%20cumque%20blanditiis%20cupiditate%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20architecto%20sunt%20autem%20debitis%20nesciunt%20assumenda%20sapiente%20maxime%2C%20quis%20velit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20sit%20officiis!%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%E8%B5%84%E6%BA%90%E7%9C%81%E7%95%A5%E5%8F%B7%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Eh3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20w-200px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Emaxline%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20suffix%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22.jpg%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20fsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdffsadfasdfafasdfasdfasdfasdfasdfasdfafasdf%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Emaxline%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20suffix%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22.jpg%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20abc%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-text%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22scss%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.base-text-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/Users/a1-6/Projects/github/52css/base-vue/docs/components/base-text-demo.vue",relativePath:"./base-text-demo.vue"},{default:n(()=>[E(k)]),_:1}),j])}}});export{I as __pageData,S as default};
