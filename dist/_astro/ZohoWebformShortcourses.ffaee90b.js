import{v,a as y}from"./runtime-dom.esm-bundler.3045068e.js";/* empty css                       */import{_ as U}from"./_plugin-vue_export-helper.c27b6911.js";import{d as A,e as S,f as C,g as F,c as d,t as W,h as N,a as t,w as g,F as k,r as T,n as O,i as I,o as c,p as P,j as q,k as f}from"./runtime-core.esm-bundler.21720af2.js";const V={__name:"ZohoWebformShortcourses",props:{return_url:{type:String,required:!0},preselect_interested_course:{type:String,required:!0},microsite_source:{type:String,required:!0},programme_interested:{type:Object,default(m){return{LEADCF22:{title:"Short Courses",options:{CICTL:"Cambridge International Certificate in Teaching & Learning",CIDTL:"Cambridge International Diploma in Teaching & Learning","Effective Lesson Design and Planning":"Effective Lesson Design and Planning","Embracing Autism&#x3a; Understanding &amp; Supporting Learners with Autism":"Embracing Autism&#58; Understanding &amp; Supporting Learners with Autism","Essential Strategies to Teaching Learners with Special Needs":"Essential Strategies to Teaching Learners with Special Needs","Formative Assessment &amp; Summative Assessment &#x28;FASA&#x29;&#x3a; Towards Effective Assessment in Teaching and Learning":"Formative Assessment & Summative Assessment (FASA)&#58; Towards Effective Assessment in Teaching and Learning","Teaching an Effective Active Learning Class&#x3a; Active Learning&#x3a; Getting active with 21st Century Learners":"Teaching an Effective Active Learning Class&#58; Active Learning&#58; Getting active with 21st Century Learners"}},LEADCF11:{title:"Free Courses",options:{"Website Design with Google Sites":"Website Design with Google Sites","Embracing Autism":"Embracing Autism","Information Literacy and Online Search Strategies":"Information Literacy and Online Search Strategies","Introduction to Psychology for Social Workers":"Introduction to Psychology for Social Workers","Learning Skills for Lifelong Learning":"Learning Skills for Lifelong Learning","Successful Entry to Top Universities in the World":"Successful Entry to Top Universities in the World"}}}}}},setup(m,{expose:s}){s();const n=m,a=!1,L=!1,b=!0,r=A("null");function u(i){{const l=new FormData(i.target).entries();for(var o of l)console.log(o[0]+": "+o[1])}}S(()=>{r.value.addEventListener("formdata",i=>{const o=i.formData;if(o.set("xnQsjsdp","4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"),o.set("zc_gad",""),o.set("actionType","TGVhZHM="),o.set("xmIwtLD","3df8513a44e8ee0dc6e36209ffd3db240675dcf6887b53b2398a3abd933e9f68"),o.set("Last Name",e.last_name),o.set("Email",e.email),o.set("Mobile",e.mobile),e.programme_interested!=""&&e.programme_interested_LEADCFID==""){for(const l in n.programme_interested.LEADCF22.options)if(l===e.programme_interested){e.programme_interested_LEADCFID="LEADCF22",o.set(e.programme_interested_LEADCFID,e.programme_interested);return}for(const l in n.programme_interested.LEADCF11.options)if(l===e.programme_interested){e.programme_interested_LEADCFID="LEADCF11",o.set(e.programme_interested_LEADCFID,p(e.programme_interested));return}}else o.set(e.programme_interested_LEADCFID,p(e.programme_interested));const D=l=>{for(const h in l.LEADCF22.options)if(h===e.programme_interested)return"https://mckl.edu.my/short-courses/thank-you";for(const h in l.LEADCF11.options)if(h===e.programme_interested)return"https://mckl.edu.my/short-courses/free-courses/thank-you"};o.set("returnURL",D(n.programme_interested)),o.set("LEADCF9",e.microsite_source),o.set("LEADCF17",e.status)})});function p(i){for(const o in n.programme_interested.LEADCF11.options)if(o===i)return"[free-courses] "+i;return i}const e=C({last_name:"",email:"",mobile:"",programme_interested_LEADCFID:"",programme_interested:n.preselect_interested_course,lead_source:"Microsite (MCKL Website)",return_url:n.return_url,microsite_source:n.microsite_source,status:""}),x=F(()=>n.programme_interested);function w(){e.programme_interested=""}function M(i){e.programme_interested_LEADCFID=i.target.querySelector("option:checked").parentElement.id}const E={DEBUG:a,PREFILL_FORM:L,LOG_FORMDATA:b,THE_FORM:r,onsubmit_form:u,check_courses:p,form_data:e,get_programme_interested_options:x,clear_programme_interested:w,onchange_programme_interested:M,props:n,ref:A,computed:F,reactive:C,onMounted:S};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}},_=m=>(P("data-v-2a61335a"),m=m(),q(),m),G={key:0},H={class:"row g-2"},R={class:"col-12 col-md-12"},B=_(()=>t("label",{for:"Last_Name"},[f("Full Name "),t("span",{class:"text-danger"},"*")],-1)),j={class:"col-12 col-md-6"},z=_(()=>t("label",{for:"Email"},[f("Email "),t("span",{class:"text-danger"},"*")],-1)),Z={class:"col-12 col-md-6"},K=_(()=>t("label",{for:"mobile"},[f("Mobile Phone "),t("span",{class:"text-danger"},"*")],-1)),Q={class:"col-12 col-md-6"},J=_(()=>t("label",{for:"status"},[f("Status "),t("span",{class:"text-danger"},"*")],-1)),X=I('<option disabled selected value="" data-v-2a61335a> - Select your current Status - </option><option value="High school student" data-v-2a61335a>High school student</option><option value="College / University student" data-v-2a61335a> College / University student </option><option value="Working professional" data-v-2a61335a>Working professional</option><option value="Teacher / Academician" data-v-2a61335a>Teacher / Academician</option><option value="Other" data-v-2a61335a>Other</option>',6),Y=[X],$={class:"col-12"},ee=_(()=>t("label",{for:"programme_interested"},[f("Interested Course "),t("span",{class:"text-danger"},"*")],-1)),te=_(()=>t("option",{disabled:"",selected:"",value:""}," - Please select your preferences - ",-1)),ae=["label","id"],re=["value","selected","innerHTML"],oe=I('<hr data-v-2a61335a><div class="form-check" data-v-2a61335a><input class="form-check-input" type="checkbox" value="" id="agreement" required data-v-2a61335a><label class="form-check-label" for="agreement" data-v-2a61335a> I have read the College&#39;s <a href="https://mckl.edu.my/legal-policies-and-notices/" target="_blank" data-v-2a61335a>Personal Data Protection Notice</a> and I give consent to the College to process my personal data accordingly. <span class="text-danger" data-v-2a61335a>*</span></label></div><input type="submit" id="formsubmit" class="btn btn-secondary my-2" value="Submit" data-v-2a61335a>',3);function se(m,s,n,a,L,b){return c(),d("form",{action:"https://crm.zoho.com/crm/WebToLeadForm",name:"WebToLeads4875945000000954001",method:"POST",class:O(`container-fluid ${n.microsite_source}`),onSubmit:s[6]||(s[6]=r=>a.onsubmit_form(r)),ref:"THE_FORM"},[a.DEBUG?(c(),d("pre",G," "+W(a.form_data)+" ",1)):N("",!0),t("div",H,[t("div",R,[B,g(t("input",{type:"text",class:"form-control",id:"Last_Name",minlength:"5",required:"",placeholder:"Full Name *","onUpdate:modelValue":s[0]||(s[0]=r=>a.form_data.last_name=r)},null,512),[[v,a.form_data.last_name]])]),t("div",j,[z,g(t("input",{type:"email",class:"form-control",id:"Email",required:"",placeholder:"Email *","onUpdate:modelValue":s[1]||(s[1]=r=>a.form_data.email=r)},null,512),[[v,a.form_data.email]])]),t("div",Z,[K,g(t("input",{type:"text",class:"form-control",id:"mobile",minlength:"8",maxlength:"12",required:"",placeholder:"Mobile phone *","onUpdate:modelValue":s[2]||(s[2]=r=>a.form_data.mobile=r)},null,512),[[v,a.form_data.mobile]])]),t("div",Q,[J,g(t("select",{class:"form-select status",id:"status",required:"","onUpdate:modelValue":s[3]||(s[3]=r=>a.form_data.status=r)},Y,512),[[y,a.form_data.status]])]),t("div",$,[ee,g(t("select",{class:"form-select",id:"programme_interested",required:"","onUpdate:modelValue":s[4]||(s[4]=r=>a.form_data.programme_interested=r),onChange:s[5]||(s[5]=r=>a.onchange_programme_interested(r))},[te,(c(!0),d(k,null,T(a.get_programme_interested_options,(r,u)=>(c(),d("optgroup",{key:u,label:r.title,id:u},[(c(!0),d(k,null,T(a.get_programme_interested_options[u].options,(p,e)=>(c(),d("option",{key:e,value:e,selected:e===a.form_data.programme_interested,innerHTML:p},null,8,re))),128))],8,ae))),128))],544),[[y,a.form_data.programme_interested]])])]),oe],34)}const de=U(V,[["render",se],["__scopeId","data-v-2a61335a"]]);export{de as default};
