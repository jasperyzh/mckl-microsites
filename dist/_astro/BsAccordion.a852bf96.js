import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{c as i,F as p,r as b,o as e,a as r,n as _,t as f,b as m}from"./runtime-core.esm-bundler.19ad42fe.js";const u={__name:"BsAccordion",props:{show_first:{type:Boolean,default:!0},accordion_id:{type:String,default:"bs_accordion_1"},accordion_items:{type:Array,default(a){return[{title:"Accordion Item #1",content:`
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`},{title:"Accordion Item #2",content:`
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`},{title:"Accordion Item #3",content:`
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`}]}}},setup(a,{expose:n}){n();const c=a,o=c.show_first,d=c.accordion_id,s={props:c,show_first:o,accordion_id:d};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},y=["id"],g={class:"accordion-header",id:"`${accordion_id}-${index}`"},$=["data-bs-target","aria-controls"],w=["id","aria-labelledby","data-bs-parent"],v={class:"accordion-body"},A=["innerHTML"];function B(a,n,c,o,d,s){return e(),i("div",{class:"accordion",id:o.accordion_id},[(e(!0),i(p,null,b(c.accordion_items,(l,t)=>(e(),i("div",{class:"accordion-item",key:`${o.accordion_id}-${t}`},[r("h2",g,[r("button",{class:_(`accordion-button fw-bold fs-5 m-0 ${t>0&&"collapsed"}`),type:"button","data-bs-toggle":"collapse","data-bs-target":`#${o.accordion_id}-collapse${t}`,"aria-expanded":"true","aria-controls":`${o.accordion_id}-collapse${t}`},f(l.title),11,$)]),r("div",{id:`${o.accordion_id}-collapse${t}`,class:_(`accordion-collapse collapse ${o.show_first&&t==0&&"show"}`),"aria-labelledby":`${o.accordion_id}-${t}`,"data-bs-parent":`#${o.accordion_id}`},[r("div",v,[m(a.$slots,`content-${t}`,{},()=>[r("div",{innerHTML:l.content},null,8,A)])])],10,w)]))),128))],8,y)}const k=h(u,[["render",B]]);export{k as default};