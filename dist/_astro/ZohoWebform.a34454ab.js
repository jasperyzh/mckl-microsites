import{v as b,b as A,a as D,c as E}from"./runtime-dom.esm-bundler.46eaa811.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";import{d as L,e as y,f as M,g as S,c as m,t as U,h as T,a as e,w as l,n as F,F as k,r as P,i as I,o as u,p as V,j as B,k as g}from"./runtime-core.esm-bundler.19ad42fe.js";const q={__name:"ZohoWebform",props:{disable_penang:{type:Boolean,default(c){return!1}},return_url:{type:String,required:!0},microsite_source:{type:String,required:!0},programme_interested:{type:Object,default(c){return{kl:{LEADCF20:{title:"Pre-University",options:{"Cambridge A Level":"Cambridge A Level","Cambridge A Level (German Pathway)":"Cambridge A Level (German Pathway)",AUSMAT:"Australian Matriculation"}},LEADCF19:{title:"Undergraduate Programme",options:{ADTP:"American Degree Transfer Program","DECE (FT)":"Diploma in Early Childhood Education","DSW (PT)":"Diploma in Social Work",DCS:"Diploma in Computer Science - NEW",DIT:"Diploma in Information Technology - NEW",DEC:"Diploma in Digital Business - NEW",DDM:"Diploma in Digital Marketing - NEW",DIFT:"Diploma in Financial Technology - NEW"}},LEADCF21:{title:"Professional Accounting",options:{"ACCA FIA":"ACCA Foundation in Accountancy (FIA)","ACCA (FT)":"ACCA Qualification",SBL:"Short course in Strategic Business Leader (SBL)",SBR:"Short course in Strategic Business Reporting (SBR)",AFM:"Short course in Advanced Financial Management (AFM)",ATX:"Short course in Advanced Taxation (ATX)",AAA:"Short course in Advanced Audit and Assurance (AAA)"}},LEADCF22:{title:"Professional Development",options:{CICTL:"Cambridge International Certificate in Teaching & Learning",CIDTL:"Cambridge International Diploma in Teaching & Learning","Effective Lesson Design and Planning":"Effective Lesson Design and Planning","Embracing Autism&#x3a; Understanding &amp; Supporting Learners with Autism":"Embracing Autism: Understanding & Supporting Learners with Autism","Essential Strategies to Teaching Learners with Special Needs":"Thriving with Attention Deficit Hyperactivity Disorder (ADHD) in the Classroom","Formative Assessment &amp; Summative Assessment &#x28;FASA&#x29;&#x3a; Towards Effective Assessment in Teaching and Learning":"FA-SA: Formative Assessment and Summative Assessment","Teaching an Effective Active Learning Class&#x3a; Active Learning&#x3a; Getting active with 21st Century Learners":"Teaching an Effective Active Learning Class","Micro-credentials in Programming with Python":"Micro-credentials in Jumpstart Programming with Python","Micro-credentials in Fundamentals of Innovation and Entrepreneurship":"Micro-credentials in Fundamentals of Innovation and Entrepreneurship","Micro-credentials in Information System":"Micro-credentials in Information System","Micro-credentials in Creative Expressions through Music and Movement":"Micro-credentials in Creative Expressions through Music and Movement","Micro-credentials in Play in Early Childhood Education":"Micro-credentials in Play in Early Childhood Education","Micro-credentials in Drug and Alcohol Addiction":"Micro-credentials in Drug and Alcohol Addiction","Micro-credentials in Introduction to Professional Social Work":"Micro-credentials in Introduction to Professional Social Work","Micro-credentials in Working with Domestic Violence Concerns":"Micro-credentials in Working with Domestic Violence Concerns","Micro-Credentials in Social Work":"Micro-credentials in Social Work","Micro-Credentials in Early Childhood Education":"Micro-credentials in Early Childhood Education","Micro-Credentials in Digital Business":"Micro-credentials in Digital Business","Micro-credentials in Digital Marketing":"Micro-credentials in Digital Marketing","Micro-credentials in Financial Technology":"Micro-credentials in Financial Technology","Micro-credentials in Computer Science":"Micro-credentials in Computer Science","Micro-credentials in Information Technology":"Micro-credentials in Information Technology"}}},penang:{LEADCF20:{title:"Pre-University",options:{"Cambridge A Level":"Cambridge A Level","Cambridge A Level (German Pathway)":"Cambridge A Level (German Pathway)",AUSMAT:"Australian Matriculation"}},LEADCF19:{title:"Undergraduate Programme",options:{"DECE (FT)":"Diploma in Early Childhood Education",DCS:"Diploma in Computer Science - NEW",DIT:"Diploma in Information Technology - NEW",DEC:"Diploma in Digital Business - NEW",DDM:"Diploma in Digital Marketing - NEW"}},LEADCF22:{title:"Professional Development",options:{CICTL:"Cambridge International Certificate in Teaching & Learning",CIDTL:"Cambridge International Diploma in Teaching & Learning","Effective Lesson Design and Planning":"Effective Lesson Design and Planning","Embracing Autism&#x3a; Understanding &amp; Supporting Learners with Autism":"Embracing Autism: Understanding & Supporting Learners with Autism","Essential Strategies to Teaching Learners with Special Needs":"Thriving with Attention Deficit Hyperactivity Disorder (ADHD) in the Classroom","Formative Assessment &amp; Summative Assessment &#x28;FASA&#x29;&#x3a; Towards Effective Assessment in Teaching and Learning":"FA-SA: Formative Assessment and Summative Assessment","Teaching an Effective Active Learning Class&#x3a; Active Learning&#x3a; Getting active with 21st Century Learners":"Teaching an Effective Active Learning Class","Micro-Credentials in Social Work":"Micro-credentials in Social Work","Micro-Credentials in Early Childhood Education":"Micro-credentials in Early Childhood Education","Micro-Credentials in Digital Business":"Micro-credentials in Digital Business","Micro-credentials in Digital Marketing":"Micro-credentials in Digital Marketing","Micro-credentials in Financial Technology":"Micro-credentials in Financial Technology","Micro-credentials in Computer Science":"Micro-credentials in Computer Science","Micro-credentials in Information Technology":"Micro-credentials in Information Technology"}}}}}}},setup(c,{expose:t}){t();const s=c,n=!1,v=!1,_=L("null");function o(d){d.preventDefault();let a=new FormData(d.target);a.set("xnQsjsdp","4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"),a.set("zc_gad",""),a.set("actionType","TGVhZHM="),a.set("xmIwtLD","3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe"),a.set("returnURL",i.return_url),a.set("Last Name",i.last_name),a.set("Email",i.email),a.set("Mobile",String(i.mobile)),a.set("LEADCF23",i.campus),a.set(i.programme_interested_LEADCFID,i.programme_interested),a.set("LEADCF5",i.latest_academic_qualification),a.set("LEADCF10",i.microsite_interest),a.set("LEADCF11",i.remarks),a.set("LEADCF1",i.lead_source),a.set("LEADCF9",i.microsite_source),a.set("returnURL",i.return_url);var x="https://script.google.com/macros/s/AKfycbwLXW-h7ZYEJPwqLSs_gMY_mrtTRYmNEbgX27WT7jFMOhSHWytgVLvMoHPv6AZgRwGN0w/exec",W=Object.fromEntries(a);fetch(x,{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}).then(function(h){console.log(h)}).catch(function(h){console.error("Error:",h)}),d.target.submit()}y(()=>{_.value.addEventListener("formdata",d=>{const a=d.formData;a.set("xnQsjsdp","4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"),a.set("zc_gad",""),a.set("actionType","TGVhZHM="),a.set("xmIwtLD","3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe"),a.set("returnURL",i.return_url),a.set("Last Name",i.last_name),a.set("Email",i.email),a.set("Mobile",i.mobile),a.set("LEADCF23",i.campus),a.set(i.programme_interested_LEADCFID,i.programme_interested),a.set("LEADCF5",i.latest_academic_qualification),a.set("LEADCF10",i.microsite_interest),a.set("LEADCF11",i.remarks),a.set("LEADCF1",i.lead_source),a.set("LEADCF9",i.microsite_source)})});const i=M({last_name:"",email:"",mobile:"",campus:"KL Campus",programme_interested_LEADCFID:"",programme_interested:"",latest_academic_qualification:"",microsite_interest:[],remarks:"",lead_source:"Microsite (MCKL Website)",return_url:s.return_url,microsite_source:s.microsite_source}),f=S(()=>i.campus=="Penang Pykett Campus"?s.programme_interested.penang:s.programme_interested.kl);function p(){i.programme_interested=""}function w(d){i.programme_interested_LEADCFID=d.target.querySelector("option:checked").parentElement.id}const C={DEBUG:n,LOG_FORMDATA:v,THE_FORM:_,onsubmit_form:o,form_data:i,get_programme_interested_options:f,clear_programme_interested:p,onchange_programme_interested:w,props:s,ref:L,computed:S,reactive:M,onMounted:y};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}},r=c=>(V("data-v-8ae29fbe"),c=c(),B(),c),H={key:0},G={class:"row g-2"},R={class:"col-12 col-md-12"},O=r(()=>e("label",{for:"Last_Name"},[g("Full Name "),e("span",{class:"text-danger"},"*")],-1)),j={class:"col-12 col-md-6"},Z=r(()=>e("label",{for:"Email"},[g("Email "),e("span",{class:"text-danger"},"*")],-1)),K={class:"col-12 col-md-6"},z=r(()=>e("label",{for:"mobile"},[g("Mobile Phone "),e("span",{class:"text-danger"},"*")],-1)),Q={class:"col-12"},X=r(()=>e("label",{class:"d-block"},[g("Campus: "),e("span",{class:"text-danger"},"*")],-1)),J={class:"btn-group w-100",role:"group","aria-label":"Radio toggle button group for Campus selection"},Y=r(()=>e("label",{class:"btn btn-outline-primary btn-sm",for:"campus_kl"},"Kuala Lumpur Campus",-1)),$=["disabled"],ee={class:"col-12"},ie=r(()=>e("label",{for:"programme_interested"},[g("Interested Programme "),e("span",{class:"text-danger"},"*")],-1)),ae=r(()=>e("option",{disabled:"",selected:"",value:""}," - Please select your preferences - ",-1)),te=["label","id"],ne=["value","innerHTML"],oe={class:"col-12"},re={class:"microsite_interest bg-white border mt-2 px-3 py-2 rounded"},se=r(()=>e("label",null,"I'm interested in:",-1)),le={class:"form-check"},ce=r(()=>e("label",{for:"check_virtual",class:"form-check-label"}," Virtual Counselling Session ",-1)),de={class:"form-check"},me=r(()=>e("label",{for:"check_physical",class:"form-check-label"}," Physical Counselling Session ",-1)),ue={key:1,class:"row"},ge={class:"col-12"},pe=r(()=>e("label",{for:"latest_academic_qualification"},[g("Highest Level of Education "),e("span",{class:"text-danger"},"*")],-1)),_e=I('<option disabled selected value="" data-v-8ae29fbe> - Highest Level of Education - </option><option value="spm" data-v-8ae29fbe>SPM</option><option value="igcse" data-v-8ae29fbe>IGCSE</option><option value="pre_university" data-v-8ae29fbe>Pre-University</option><option value="diploma" data-v-8ae29fbe>Diploma</option><option value="other" data-v-8ae29fbe>Other Qualifications</option>',6),fe=[_e],he=I('<hr data-v-8ae29fbe><div class="form-check" data-v-8ae29fbe><input class="form-check-input" type="checkbox" value="" id="agreement" required data-v-8ae29fbe><label class="form-check-label" for="agreement" data-v-8ae29fbe> I have read the College&#39;s <a href="https://mckl.edu.my/legal-policies-and-notices/" target="_blank" data-v-8ae29fbe>Personal Data Protection Notice</a> and I give consent to the College to process my personal data accordingly. <span class="text-danger" data-v-8ae29fbe>*</span></label></div><input type="submit" id="formsubmit" class="btn btn-secondary my-2" value="Submit" data-v-8ae29fbe>',3);function be(c,t,s,n,v,_){return u(),m("form",{action:"https://crm.zoho.com/crm/WebToLeadForm",name:"WebToLeads4875945000004073003",method:"POST",class:F(`container-fluid ${s.microsite_source}`),onSubmit:t[12]||(t[12]=o=>n.onsubmit_form(o)),ref:"THE_FORM"},[n.DEBUG?(u(),m("pre",H," "+U(n.form_data)+" ",1)):T("",!0),e("div",G,[e("div",R,[O,l(e("input",{type:"text",class:"form-control",id:"Last_Name",minlength:"5",required:"",placeholder:"Full Name *","onUpdate:modelValue":t[0]||(t[0]=o=>n.form_data.last_name=o)},null,512),[[b,n.form_data.last_name]])]),e("div",j,[Z,l(e("input",{type:"email",class:"form-control",id:"Email",required:"",placeholder:"Email *","onUpdate:modelValue":t[1]||(t[1]=o=>n.form_data.email=o)},null,512),[[b,n.form_data.email]])]),e("div",K,[z,l(e("input",{type:"text",class:"form-control",id:"mobile",minlength:"8",maxlength:"12",required:"",placeholder:"Mobile phone *","onUpdate:modelValue":t[2]||(t[2]=o=>n.form_data.mobile=o)},null,512),[[b,n.form_data.mobile]])]),e("div",Q,[X,e("div",J,[l(e("input",{type:"radio",class:"btn-check",name:"campus",id:"campus_kl",value:"KL Campus","onUpdate:modelValue":t[3]||(t[3]=o=>n.form_data.campus=o),onChange:t[4]||(t[4]=o=>n.clear_programme_interested()),autocomplete:"off",checked:""},null,544),[[A,n.form_data.campus]]),Y,l(e("input",{type:"radio",class:"btn-check",name:"campus",id:"campus_penang",value:"Penang Pykett Campus","onUpdate:modelValue":t[5]||(t[5]=o=>n.form_data.campus=o),onChange:t[6]||(t[6]=o=>n.clear_programme_interested()),autocomplete:"off",disabled:s.disable_penang},null,40,$),[[A,n.form_data.campus]]),e("label",{class:F(`btn btn-outline-primary btn-sm ${s.disable_penang&&"d-none"}`),for:"campus_penang"},"Pykett Campus, Penang",2)])]),e("div",ee,[ie,l(e("select",{class:"form-select",id:"programme_interested",required:"","onUpdate:modelValue":t[7]||(t[7]=o=>n.form_data.programme_interested=o),onChange:t[8]||(t[8]=o=>n.onchange_programme_interested(o))},[ae,(u(!0),m(k,null,P(n.get_programme_interested_options,(o,i)=>(u(),m("optgroup",{key:i,label:o.title,id:i},[(u(!0),m(k,null,P(n.get_programme_interested_options[i].options,(f,p)=>(u(),m("option",{key:p,value:p,innerHTML:f},null,8,ne))),128))],8,te))),128))],544),[[D,n.form_data.programme_interested]])]),e("div",oe,[e("div",re,[se,e("div",le,[l(e("input",{type:"checkbox",class:"form-check-input",id:"check_virtual",value:"Virtual Counselling Session","onUpdate:modelValue":t[9]||(t[9]=o=>n.form_data.microsite_interest=o)},null,512),[[E,n.form_data.microsite_interest]]),ce]),e("div",de,[l(e("input",{type:"checkbox",class:"form-check-input",id:"check_physical",value:"Physical Counselling Session","onUpdate:modelValue":t[10]||(t[10]=o=>n.form_data.microsite_interest=o)},null,512),[[E,n.form_data.microsite_interest]]),me])])])]),s.microsite_source==="scholarship"?(u(),m("div",ue,[e("div",ge,[pe,l(e("select",{class:"form-select",id:"latest_academic_qualification",name:"LEADCF5",required:"","onUpdate:modelValue":t[11]||(t[11]=o=>n.form_data.latest_academic_qualification=o)},fe,512),[[D,n.form_data.latest_academic_qualification]])])])):T("",!0),he],34)}const Ee=N(q,[["render",be],["__scopeId","data-v-8ae29fbe"]]);export{Ee as default};