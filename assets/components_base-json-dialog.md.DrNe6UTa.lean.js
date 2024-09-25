import{d as e}from"./chunks/dayjs.min.UJQ19aW_.js";import{u as C,s as n}from"./chunks/theme.BXDEut8j.js";import{d as t,L as f,r as g,a5 as F,M as c,X as A,Z as h,a as l,D as E,F as v,_ as x,O as _,aw as D}from"./chunks/framework.BFDeQwB9.js";import"./chunks/commonjsHelpers.Cpj98o6Y.js";const P={},j=t({name:"BaseJsonDialogDemo",__name:"base-json-dialog-demo",props:f({prop1:{}},P),emits:["event1"],setup(r){const s=g(!1),[p,a]=C(async()=>(await n(500),{patientName:"123",bedNumber:"002"}),{autoFetch:!1}),[y,i]=C(async()=>(await n(200),[{label:"001",value:1},{label:"002",value:2},{label:"003",value:3}]),{autoFetch:!1}),B=()=>{a(),i(),s.value=!0},d=async()=>{await n(1e3),console.log("模拟请求成功")},m=()=>{console.log("提交成功，并关闭弹窗")};return(q,o)=>{const u=F("base-json-dialog");return c(),A(v,null,[h("button",{onClick:B},"打开弹窗"),l(u,{visible:s.value,"onUpdate:visible":o[0]||(o[0]=b=>s.value=b),inputs:{patientName:{label:"患者姓名",disabled:!0},bedNumber:{label:"床号",disabled:!0},toBedId:{label:"转入床位*",type:"Select",options:E(y)},date:{label:"换床时间*",type:"DatePicker",enableTimePicker:!0,format:"YYYY-MM-DD HH:mm",value:E(e)().format("YYYY-MM-DD HH:mm:ss"),disableDate:{after:E(e)().format()}}},request:d,"label-align":"top",model:E(p),header:"换床",width:"672",span:4,onSubmit:m},null,8,["visible","inputs","model"])],64)}}}),k=x(j,[["__scopeId","data-v-e6af634b"]]),w=D(`<h1 id="basejsondialog-弹窗" tabindex="-1">BaseJsonDialog 弹窗 <a class="header-anchor" href="#basejsondialog-弹窗" aria-label="Permalink to &quot;BaseJsonDialog 弹窗&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>弹窗需要有展示的表单提交</li></ul><h2 id="默认注入tdesign组件-也可以注入成其他ui组件库" tabindex="-1">默认注入<code>tdesign</code>组件, 也可以注入成其他<code>UI组件库</code> <a class="header-anchor" href="#默认注入tdesign组件-也可以注入成其他ui组件库" aria-label="Permalink to &quot;默认注入\`tdesign\`组件, 也可以注入成其他\`UI组件库\`&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> Component, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Dialog } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;tdesign-vue-next&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> componentMap</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Dialog,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> registerBaseJsonDialogComponent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#FFAB70;">  name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">  component</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Component</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  componentMap[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> component;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>`,6),Y=D('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>...</td><td>继承<code>Dialog</code> 和 <code>BaseJsonForm</code>属性</td><td>-</td><td>-</td><td></td></tr><tr><td>cancelButtonText</td><td>取消文案</td><td><code>string</code></td><td><code>&#39;取消&#39;</code></td><td></td></tr><tr><td>confirmButtonText</td><td>确定文案</td><td><code>string</code></td><td><code>&#39;确定&#39;</code></td><td></td></tr></tbody></table>',2),H=JSON.parse('{"title":"BaseJsonDialog 弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"components/base-json-dialog.md","filePath":"components/base-json-dialog.md"}'),J={name:"components/base-json-dialog.md"},I=t({...J,setup(r){return(s,p)=>{const a=F("demo-preview");return c(),A("div",null,[w,l(a,{title:"基本使用",description:"",code:"%3Cscript%20lang=%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue';%0Aimport%20dayjs%20from%20'dayjs';%0Aimport%20%7B%20useAsyncRef,%20sleep%20%7D%20from%20'../../src/index';%0Aexport%20interface%20BaseJsonDialogDemoProps%20%7B%0A%20%20prop1?:%20string;%0A%7D%0Aexport%20const%20BaseJsonDialogDemoDefault%20=%20%7B%7D;%0Aexport%20interface%20BaseJsonDialogDemoEmits%20%7B%0A%20%20(event:%20'event1'):%20void;%0A%7D%0A%3C/script%3E%0A%3Cscript%20setup%20lang=%22ts%22%3E%0AwithDefaults(defineProps%3CBaseJsonDialogDemoProps%3E(),%20BaseJsonDialogDemoDefault);%0AdefineEmits%3CBaseJsonDialogDemoEmits%3E();%0AdefineOptions(%7B%0A%20%20name:%20'BaseJsonDialogDemo',%0A%7D);%0Aconst%20visible%20=%20ref(false);%0Aconst%20%5Bpatient,%20setPatient%5D%20=%20useAsyncRef(%0A%20%20async%20()%20=%3E%20%7B%0A%20%20%20%20await%20sleep(500)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20patientName:%20'123',%0A%20%20%20%20%20%20bedNumber:%20'002',%0A%20%20%20%20%7D;%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20autoFetch:%20false,%0A%20%20%7D%0A);%0Aconst%20%5Bselect1Options,%20setSelect1Options%5D%20=%20useAsyncRef(%0A%20%20async%20()%20=%3E%20%7B%0A%20%20%20%20await%20sleep(200)%0A%20%20%20%20return%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label:%20'001',%0A%20%20%20%20%20%20%20%20value:%201,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label:%20'002',%0A%20%20%20%20%20%20%20%20value:%202,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label:%20'003',%0A%20%20%20%20%20%20%20%20value:%203,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%5D;%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20autoFetch:%20false,%0A%20%20%7D%0A);%0Aconst%20onClick%20=%20()%20=%3E%20%7B%0A%20%20setPatient();%0A%20%20setSelect1Options();%0A%20%20visible.value%20=%20true;%0A%7D;%0Aconst%20request%20=%20async%20()%20=%3E%20%7B%0A%20%20await%20sleep(1000)%0A%20%20//%20%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%0A%20%20console.log('%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F')%0A%20%20//%20throw%20new%20Error('%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E5%A4%B1%E8%B4%A5')%0A%7D%0Aconst%20onSubmit%20=%20()%20=%3E%20%7B%0A%20%20console.log('%E6%8F%90%E4%BA%A4%E6%88%90%E5%8A%9F%EF%BC%8C%E5%B9%B6%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97')%0A%7D%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cbutton%20@click=%22onClick%22%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3C/button%3E%0A%20%20%3Cbase-json-dialog%0A%20%20%20%20v-model:visible=%22visible%22%0A%20%20%20%20:inputs=%22%7B%0A%20%20%20%20%20%20patientName:%20%7B%0A%20%20%20%20%20%20%20%20label:%20'%E6%82%A3%E8%80%85%E5%A7%93%E5%90%8D',%0A%20%20%20%20%20%20%20%20disabled:%20true,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20bedNumber:%20%7B%0A%20%20%20%20%20%20%20%20label:%20'%E5%BA%8A%E5%8F%B7',%0A%20%20%20%20%20%20%20%20disabled:%20true,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20toBedId:%20%7B%0A%20%20%20%20%20%20%20%20label:%20'%E8%BD%AC%E5%85%A5%E5%BA%8A%E4%BD%8D*',%0A%20%20%20%20%20%20%20%20type:%20'Select',%0A%20%20%20%20%20%20%20%20options:%20select1Options,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20date:%20%7B%0A%20%20%20%20%20%20%20%20label:%20'%E6%8D%A2%E5%BA%8A%E6%97%B6%E9%97%B4*',%0A%20%20%20%20%20%20%20%20type:%20'DatePicker',%0A%20%20%20%20%20%20%20%20enableTimePicker:%20true,%0A%20%20%20%20%20%20%20%20format:%20'YYYY-MM-DD%20HH:mm',%0A%20%20%20%20%20%20%20%20value:%20dayjs().format('YYYY-MM-DD%20HH:mm:ss'),%0A%20%20%20%20%20%20%20%20disableDate:%20%7B%20after:%20dayjs().format()%20%7D,%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D%22%0A%20%20%20%20:request=%22request%22%0A%20%20%20%20label-align=%22top%22%0A%20%20%20%20:model=%22patient%22%0A%20%20%20%20header=%22%E6%8D%A2%E5%BA%8A%22%0A%20%20%20%20width=%22672%22%0A%20%20%20%20:span=%224%22%0A%20%20%20%20@submit=%22onSubmit%22%0A%20%20/%3E%0A%3C/template%3E%0A%0A%3Cstyle%20scoped%20lang=%22scss%22%3E%0A.base-json-dialog-demo%20%7B%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20github-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20dayjs%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'dayjs'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20useAsyncRef%2C%20sleep%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'..%2F..%2Fsrc%2Findex'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseJsonDialogDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E%20%20prop1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3F%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20string%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20BaseJsonDialogDemoDefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20interface%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20BaseJsonDialogDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'event1'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20void%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EwithDefaults%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseJsonDialogDemoProps%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%2C%20BaseJsonDialogDemoDefault)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EBaseJsonDialogDemoEmits%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EdefineOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'BaseJsonDialogDemo'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20visible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Epatient%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3EsetPatient%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%5D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20useAsyncRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20async%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20await%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20sleep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E500%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20patientName%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'123'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20bedNumber%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'002'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20autoFetch%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Eselect1Options%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3EsetSelect1Options%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%5D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20useAsyncRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20async%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20await%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20sleep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E200%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'001'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'002'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'003'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%5D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20autoFetch%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20onClick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20setPatient%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20setSelect1Options%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20visible.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20true%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20request%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20async%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20await%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20sleep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%236A737D%22%3E%20%20%2F%2F%20%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%236A737D%22%3E%20%20%2F%2F%20throw%20new%20Error('%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E5%A4%B1%E8%B4%A5')%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20onSubmit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%8F%90%E4%BA%A4%E6%88%90%E5%8A%9F%EF%BC%8C%E5%B9%B6%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3EonClick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ebase-json-dialog%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20%20%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Einputs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20patientName%3A%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%82%A3%E8%80%85%E5%A7%93%E5%90%8D'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20disabled%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20bedNumber%3A%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E5%BA%8A%E5%8F%B7'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20disabled%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20toBedId%3A%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E8%BD%AC%E5%85%A5%E5%BA%8A%E4%BD%8D*'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'Select'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20options%3A%20select1Options%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20date%3A%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%8D%A2%E5%BA%8A%E6%97%B6%E9%97%B4*'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'DatePicker'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20enableTimePicker%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20format%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'YYYY-MM-DD%20HH%3Amm'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Edayjs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E().%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eformat%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'YYYY-MM-DD%20HH%3Amm%3Ass'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20disableDate%3A%20%7B%20after%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Edayjs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E().%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eformat%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E()%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Erequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Erequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20%20%20label-align%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22top%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Emodel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Epatient%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20%20%20header%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%E6%8D%A2%E5%BA%8A%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20%20%20%20width%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22672%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E4%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Esubmit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3EonSubmit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22scss%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.base-json-dialog-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/Users/a1-6/Projects/github/52css/base-vue/docs/components/base-json-dialog-demo.vue",relativePath:"./base-json-dialog-demo.vue"},{default:_(()=>[l(k)]),_:1}),Y])}}});export{H as __pageData,I as default};
