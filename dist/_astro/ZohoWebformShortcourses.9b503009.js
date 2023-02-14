import{v as h,a as C}from"./runtime-dom.esm-bundler.3045068e.js";/* empty css                       */import{_ as W}from"./_plugin-vue_export-helper.c27b6911.js";import{d as E,e as S,f as F,g as k,c,t as O,h as q,a as t,w as f,F as A,r as I,n as N,i as T,o as m,p as P,j as V,k as g}from"./runtime-core.esm-bundler.21720af2.js";const w={__name:"ZohoWebformShortcourses",props:{return_url:{type:String,required:!0},preselect_interested_course:{type:String,required:!0},microsite_source:{type:String,required:!0},programme_interested:{type:Object,default(d){return{LEADCF22:{title:"Short Courses",options:{CICTL:"Cambridge International Certificate in Teaching & Learning",CIDTL:"Cambridge International Diploma in Teaching & Learning"}},LEADCF11:{title:"Free Courses",options:{"Website Design with Google Sites":"Website Design with Google Sites","Embracing Autism":"Embracing Autism","Information Literacy and Online Search Strategies":"Information Literacy and Online Search Strategies","Introduction to Psychology for Social Workers":"Introduction to Psychology for Social Workers","Learning Skills for Lifelong Learning":"Learning Skills for Lifelong Learning","Successful Entry to Top Universities in the World":"Successful Entry to Top Universities in the World"}}}}}},setup(d,{expose:s}){s();const n=d,o=!1,v=!1,L=!0,r=E("null");function u(i){{const l=new FormData(i.target).entries();for(var a of l)console.log(a[0]+": "+a[1])}}S(()=>{r.value.addEventListener("formdata",i=>{const a=i.formData;if(a.set("xnQsjsdp","4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"),a.set("zc_gad",""),a.set("actionType","TGVhZHM="),a.set("xmIwtLD","3df8513a44e8ee0dc6e36209ffd3db240675dcf6887b53b2398a3abd933e9f68"),a.set("Last Name",e.last_name),a.set("Email",e.email),a.set("Mobile",e.mobile),e.programme_interested!=""&&e.programme_interested_LEADCFID==""){for(const l in n.programme_interested.LEADCF22.options)if(l===e.programme_interested){e.programme_interested_LEADCFID="LEADCF22",a.set(e.programme_interested_LEADCFID,e.programme_interested);return}for(const l in n.programme_interested.LEADCF11.options)if(l===e.programme_interested){e.programme_interested_LEADCFID="LEADCF11",a.set(e.programme_interested_LEADCFID,p(e.programme_interested));return}}else a.set(e.programme_interested_LEADCFID,p(e.programme_interested));const y=l=>{for(const b in l.LEADCF22.options)if(b===e.programme_interested)return"https://mckl.edu.my/short-courses/thank-you";for(const b in l.LEADCF11.options)if(b===e.programme_interested)return"https://mckl.edu.my/short-courses/free-courses/thank-you"};a.set("returnURL",y(n.programme_interested)),a.set("LEADCF9",e.microsite_source),a.set("LEADCF17",e.status)})});function p(i){for(const a in n.programme_interested.LEADCF11.options)if(a===i)return"[free-courses] "+i;return i}const e=F({last_name:"",email:"",mobile:"",programme_interested_LEADCFID:"",programme_interested:n.preselect_interested_course,lead_source:"Microsite (MCKL Website)",return_url:n.return_url,microsite_source:n.microsite_source,status:""}),M=k(()=>n.programme_interested);function x(){e.programme_interested=""}function U(i){e.programme_interested_LEADCFID=i.target.querySelector("option:checked").parentElement.id}const D={DEBUG:o,PREFILL_FORM:v,LOG_FORMDATA:L,THE_FORM:r,onsubmit_form:u,check_courses:p,form_data:e,get_programme_interested_options:M,clear_programme_interested:x,onchange_programme_interested:U,props:n,ref:E,computed:k,reactive:F,onMounted:S};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}},_=d=>(P("data-v-02c9b54b"),d=d(),V(),d),H={key:0},R={class:"row g-2"},G={class:"col-12 col-md-12"},B=_(()=>t("label",{for:"Last_Name"},[g("Full Name "),t("span",{class:"text-danger"},"*")],-1)),j={class:"col-12 col-md-6"},z=_(()=>t("label",{for:"Email"},[g("Email "),t("span",{class:"text-danger"},"*")],-1)),Z={class:"col-12 col-md-6"},K=_(()=>t("label",{for:"mobile"},[g("Mobile Phone "),t("span",{class:"text-danger"},"*")],-1)),Q={class:"col-12 col-md-6"},J=_(()=>t("label",{for:"status"},[g("Status "),t("span",{class:"text-danger"},"*")],-1)),X=T('<option disabled selected value="" data-v-02c9b54b> - Select your current Status - </option><option value="High school student" data-v-02c9b54b>High school student</option><option value="College / University student" data-v-02c9b54b> College / University student </option><option value="Working professional" data-v-02c9b54b>Working professional</option><option value="Teacher / Academician" data-v-02c9b54b>Teacher / Academician</option><option value="Other" data-v-02c9b54b>Other</option>',6),Y=[X],$={class:"col-12"},ee=_(()=>t("label",{for:"programme_interested"},[g("Interested Course "),t("span",{class:"text-danger"},"*")],-1)),te=_(()=>t("option",{disabled:"",selected:"",value:""}," - Please select your preferences - ",-1)),oe=["label","id"],re=["value","selected","innerHTML"],ae=T('<hr data-v-02c9b54b><div class="form-check" data-v-02c9b54b><input class="form-check-input" type="checkbox" value="" id="agreement" required data-v-02c9b54b><label class="form-check-label" for="agreement" data-v-02c9b54b> I have read the College&#39;s <a href="https://mckl.edu.my/legal-policies-and-notices/" target="_blank" data-v-02c9b54b>Personal Data Protection Notice</a> and I give consent to the College to process my personal data accordingly. <span class="text-danger" data-v-02c9b54b>*</span></label></div><input type="submit" id="formsubmit" class="btn btn-secondary my-2" value="Submit" data-v-02c9b54b>',3);function se(d,s,n,o,v,L){return m(),c("form",{action:"https://crm.zoho.com/crm/WebToLeadForm",name:"WebToLeads4875945000000954001",method:"POST",class:N(`container-fluid ${n.microsite_source}`),onSubmit:s[6]||(s[6]=r=>o.onsubmit_form(r)),ref:"THE_FORM"},[o.DEBUG?(m(),c("pre",H," "+O(o.form_data)+" ",1)):q("",!0),t("div",R,[t("div",G,[B,f(t("input",{type:"text",class:"form-control",id:"Last_Name",minlength:"5",required:"",placeholder:"Full Name *","onUpdate:modelValue":s[0]||(s[0]=r=>o.form_data.last_name=r)},null,512),[[h,o.form_data.last_name]])]),t("div",j,[z,f(t("input",{type:"email",class:"form-control",id:"Email",required:"",placeholder:"Email *","onUpdate:modelValue":s[1]||(s[1]=r=>o.form_data.email=r)},null,512),[[h,o.form_data.email]])]),t("div",Z,[K,f(t("input",{type:"text",class:"form-control",id:"mobile",minlength:"8",maxlength:"12",required:"",placeholder:"Mobile phone *","onUpdate:modelValue":s[2]||(s[2]=r=>o.form_data.mobile=r)},null,512),[[h,o.form_data.mobile]])]),t("div",Q,[J,f(t("select",{class:"form-select status",id:"status",required:"","onUpdate:modelValue":s[3]||(s[3]=r=>o.form_data.status=r)},Y,512),[[C,o.form_data.status]])]),t("div",$,[ee,f(t("select",{class:"form-select",id:"programme_interested",required:"","onUpdate:modelValue":s[4]||(s[4]=r=>o.form_data.programme_interested=r),onChange:s[5]||(s[5]=r=>o.onchange_programme_interested(r))},[te,(m(!0),c(A,null,I(o.get_programme_interested_options,(r,u)=>(m(),c("optgroup",{key:u,label:r.title,id:u},[(m(!0),c(A,null,I(o.get_programme_interested_options[u].options,(p,e)=>(m(),c("option",{key:e,value:e,selected:e===o.form_data.programme_interested,innerHTML:p},null,8,re))),128))],8,oe))),128))],544),[[C,o.form_data.programme_interested]])])]),ae],34)}const ce=W(w,[["render",se],["__scopeId","data-v-02c9b54b"]]);export{ce as default};
