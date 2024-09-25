import{I as y,c as i,d as B}from"./chunks/theme.BXDEut8j.js";import{d as t,L as m,r as u,M as c,X as F,a,O as p,D as o,A as d,$ as f,F as h,a8 as x,a9 as _,Z as b,_ as v,aw as r,a5 as P}from"./chunks/framework.BFDeQwB9.js";const g=s=>(x("data-v-14528eac"),s=s(),_(),s),w=g(()=>b("div",{class:"use-computed-ref-demo"},"use-computed-ref-demo",-1)),U={},T=t({name:"UseComputedDemo",__name:"use-computed-demo",props:m({prop1:{}},U),emits:["event1"],setup(s){const l=[{colKey:"name",title:"蔬菜"},{colKey:"price",title:"单价"},{colKey:"count",title:"数量"},{colKey:"total",title:"总价"}],C=u([{name:"香蕉",price:2.98,count:3},{name:"西瓜",price:3.98,count:1},{name:"苹果",price:9.98,count:5}]),D=B(n=>(console.log("computed"),+(n.price*n.count).toFixed(2)));return(n,q)=>(c(),F(h,null,[w,a(o(i),{columns:l,data:C.value},{count:p(({row:E})=>[a(o(y),{modelValue:E.count,"onUpdate:modelValue":A=>E.count=A},null,8,["modelValue","onUpdate:modelValue"])]),total:p(({row:E})=>[d(f(o(D)(E)),1)]),_:1},8,["data"])],64))}}),k=v(T,[["__scopeId","data-v-14528eac"]]),I=r('<h1 id="usecomputed-带参数的计算属性" tabindex="-1">useComputed 带参数的计算属性 <a class="header-anchor" href="#usecomputed-带参数的计算属性" aria-label="Permalink to &quot;useComputed 带参数的计算属性&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>表格中需要单行计算<code>耗时</code>的总价</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>',4),K=r('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>fn</td><td>传递参数</td><td><code>(...args: any) =&gt; any</code></td><td>-</td><td></td></tr></tbody></table>',2),O=JSON.parse('{"title":"useComputed 带参数的计算属性","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/use-computed.md","filePath":"hooks/use-computed.md"}'),N={name:"hooks/use-computed.md"},$=t({...N,setup(s){return(l,C)=>{const e=P("demo-preview");return c(),F("div",null,[I,a(e,{title:"基本使用",description:"",code:"%3Cscript%20lang=%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue';%0Aimport%20%7B%20Table%20as%20TTable,%20InputNumber%20as%20TInputNumber%20%7D%20from%20'tdesign-vue-next';%0Aimport%20%7B%20useComputed%20%7D%20from%20'../../src';%0A%0Aexport%20interface%20UseComputedDemoProps%20%7B%0A%20%20prop1?:%20string;%0A%7D%0Aexport%20const%20UseComputedDemoDefault%20=%20%7B%7D;%0Aexport%20interface%20UseComputedDemoEmits%20%7B%0A%20%20(event:%20'event1'):%20void;%0A%7D%0A%3C/script%3E%0A%3Cscript%20setup%20lang=%22ts%22%3E%0AwithDefaults(defineProps%3CUseComputedDemoProps%3E(),%20UseComputedDemoDefault);%0AdefineEmits%3CUseComputedDemoEmits%3E();%0AdefineOptions(%7B%0A%20%20name:%20'UseComputedDemo',%0A%7D);%0Aconst%20columns%20=%20%5B%0A%20%20%7B%20colKey:%20'name',%20title:%20'%E8%94%AC%E8%8F%9C'%20%7D,%0A%20%20%7B%20colKey:%20'price',%20title:%20'%E5%8D%95%E4%BB%B7'%20%7D,%0A%20%20%7B%20colKey:%20'count',%20title:%20'%E6%95%B0%E9%87%8F'%20%7D,%0A%20%20%7B%20colKey:%20'total',%20title:%20'%E6%80%BB%E4%BB%B7'%20%7D,%0A%5D;%0Aconst%20data%20=%20ref(%5B%0A%20%20%7B%0A%20%20%20%20name:%20'%E9%A6%99%E8%95%89',%0A%20%20%20%20price:%202.98,%0A%20%20%20%20count:%203,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name:%20'%E8%A5%BF%E7%93%9C',%0A%20%20%20%20price:%203.98,%0A%20%20%20%20count:%201,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name:%20'%E8%8B%B9%E6%9E%9C',%0A%20%20%20%20price:%209.98,%0A%20%20%20%20count:%205,%0A%20%20%7D,%0A%5D);%0Aconst%20totalPrice%20=%20row%20=%3E%20%7B%0A%20%20console.log('computed')%0A%20%20return%20+(row.price%20*%20row.count).toFixed(2);%0A%7D;%0Aconst%20getTotalPrice%20=%20useComputed(totalPrice)%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class=%22use-computed-ref-demo%22%3Euse-computed-ref-demo%3C/div%3E%0A%20%20%3Ct-table%20:columns=%22columns%22%20:data=%22data%22%3E%0A%20%20%20%20%3Ctemplate%20#count=%22%7Brow%7D%22%3E%0A%20%20%20%20%20%20%3Ct-input-number%20v-model=%22row.count%22%20/%3E%0A%20%20%20%20%3C/template%3E%0A%20%20%20%20%3Ctemplate%20#total=%22%7Brow%7D%22%3E%0A%20%20%20%20%20%20%7B%7B%20getTotalPrice(row)%20%7D%7D%0A%20%20%20%20%3C/template%3E%0A%20%20%3C/t-table%3E%0A%3C/template%3E%0A%0A%3Cstyle%20scoped%20lang=%22scss%22%3E%0A.use-computed-ref-demo%20%7B%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20github-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20Table%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eas%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20TTable%2C%20InputNumber%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eas%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20TInputNumber%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'tdesign-vue-next'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20useComputed%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'..%2F..%2Fsrc'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20UseComputedDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E%20%20prop1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3F%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20string%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20UseComputedDemoDefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20UseComputedDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'event1'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20void%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EwithDefaults%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EUseComputedDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%2C%20UseComputedDemoDefault)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EUseComputedDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'UseComputedDemo'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20columns%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%20colKey%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'name'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20title%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E8%94%AC%E8%8F%9C'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%20colKey%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'price'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20title%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E5%8D%95%E4%BB%B7'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%20colKey%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'count'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20title%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%95%B0%E9%87%8F'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%20colKey%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'total'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20title%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%80%BB%E4%BB%B7'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%5D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20data%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E9%A6%99%E8%95%89'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20price%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E2.98%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20count%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E8%A5%BF%E7%93%9C'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20price%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E3.98%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20count%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E8%8B%B9%E6%9E%9C'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20price%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E9.98%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20count%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20totalPrice%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E%20row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'computed'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%2B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(row.price%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E*%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20row.count).%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EtoFixed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20getTotalPrice%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20useComputed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(totalPrice)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22use-computed-ref-demo%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3Euse-computed-ref-demo%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Et-table%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Ecolumns%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Ecolumns%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7Brow%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Et-input-number%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Erow.count%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Etotal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7Brow%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EgetTotalPrice%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(row)%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Et-table%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22scss%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.use-computed-ref-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/Users/a1-6/Projects/github/52css/base-vue/docs/hooks/use-computed-demo.vue",relativePath:"./use-computed-demo.vue"},{default:p(()=>[a(k)]),_:1}),K])}}});export{O as __pageData,$ as default};
