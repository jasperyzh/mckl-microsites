<template>
    <form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads4875945000004073003" method="POST"
        class="container-fluid" @submit="test_submit($event)" ref="THE_FORM">

        <!--  name="WebToLeads4875945000004073003" method="POST"
name="xnQsjsdp"
name="zc_gad"
name="actionType"
name="xmIwtLD"
name="returnURL"
name="Last Name"
name="Email"
name="mobile"
name="LEADCF23"
name="LEADCF23"
name="programme_interested"
name="opt_id"
name="LEADCF5"
name="LEADCF10"
name="LEADCF10"
name="LEADCF1"
name="LEADCF9"
name="LEADCF11" -->

        <pre>
        {{
                form_data
        }}
        </pre>
        <!-- // xnQsjsdp
        // zc_gad
        // xmIwtLD
        // actionType
        // returnURL -->

        <!-- const -->
        <input type="hidden" name="xnQsjsdp" value="4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />

        <!-- var -->
        <input type="hidden" name="xmIwtLD" value="3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe" />
        <input type="hidden" name="returnURL" :value="return_url" />

        <!-- user:required -->
        <!--// Last Name: {}"
            // Email: {}
            // Mobile: {} -->
        <div class="row g-2 row-cols-1 row-cols-md-3 row-cols-lg-1">
            <div class="col col-lg-12">
                <label for="Last_Name">Full Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="Last_Name" name="Last Name" minlength="5" required
                    placeholder="Full Name *" v-model="form_data.last_name" />
            </div>
            <div class="col col-lg-6">
                <label for="Email">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="Email" name="Email" required placeholder="Email *"
                    v-model="form_data.email" />
            </div>
            <div class="col col-lg-6">
                <label for="mobile">Mobile Phone <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="mobile" name="mobile" minlength="8" maxlength="12" required
                    placeholder="Mobile phone *" v-model="form_data.mobile" />
            </div>
        </div>
        <div class="row g-2">

            <div class="col-12">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="campus_kl" v-model="form_data.campus">
                    <label class="form-check-label" for="campus_kl">Kuala Lumpur Campus</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="campus_penang" v-model="form_data.campus">
                    <label class="form-check-label" for="campus_penang">Pykett, Penang Campus</label>
                </div>
            </div>
            <!-- <div class="col-12">
                <label for="campus">Campus <span class="text-danger">*</span></label>
                <select v-if="campus" class="form-select" id="campus" name="LEADCF23" required
                    v-model="form_data.campus" @change="clear_programme_interested()">
                    <option v-for="(item, index) in campus" :key="index" :value="index">
                        {{ item }}
                    </option>
                </select>
                <input v-else type="hidden" id="campus" name="LEADCF23" value="KL Campus" />
            </div> -->

            <!-- programme_interested -->
            <div class="col-12">
                <label for="programme_interested">Interested Programme <span class="text-danger">*</span></label>
                <select class="form-select" id="programme_interested" required v-model="form_data.programme_interested"
                    @change="form_data.programme_interested_LEADCFID = $event.target.querySelector('option:checked').parentElement.id">
                    <option disabled="" selected value="">
                        - Please select your preferences -
                    </option>

                    <optgroup v-for="(optgroup, optgroup_index) in get_programme_interested" :key="optgroup_index"
                        :label="optgroup.title" :id="optgroup_index">
                        <option v-for="(option_name, option_index) in get_programme_interested[
                            optgroup_index
                        ].options" :key="option_index" :value="option_index" v-html="option_name"></option>
                    </optgroup>
                    <option value="none">Not Sure</option>
                </select>
                <!-- <input v-for="(opt, opt_id) in programme_interested" type="hidden" :key="opt_id" :id="opt_id"
                    :name="opt_id" :placeholder="opt.title" ref="output_programme_interested" /> -->
            </div>


            <!-- // LEADCF5: {} //Latest Academic Qualification -->
            <div class="col-12">
                <label for="latest_academic_qualification">Highest Level of Education <span
                        class="text-danger">*</span></label>
                <select v-if="latest_academic_qualification" class="form-select" id="latest_academic_qualification"
                    name="LEADCF5" required v-model="form_data.latest_academic_qualification">
                    <option disabled="" selected="" value="">- Highest Level of Education -</option>
                    <option v-for="(item, index) in latest_academic_qualification" :key="index" :value="index">
                        {{ item }}
                    </option>
                </select>
            </div>

            <!-- // LEADCF10: {} //microsite_interest -->
            <div class="col-12" id="microsite_interest">
                <label>I'm interested in:</label>
                <div class="form-check">
                    <input type="checkbox" name="LEADCF10" value="Personalised counselling with Senior Academicians"
                        id="check_counselling" class="form-check-input" v-model="form_data.microsite_interest" />
                    <label for="check_counselling" class="form-check-label">
                        Personalised counselling with Senior Academicians
                    </label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="LEADCF10" value="Scholarships" id="check_scholarship"
                        class="form-check-input" v-model="form_data.microsite_interest" />
                    <label for="check_scholarship" class="form-check-label">
                        Scholarships
                    </label>
                </div>
            </div>

        </div>

        <!-- // LEADCF1: {} //Lead Source. -->
        <!-- <input type="hidden" id="lead_source" name="LEADCF1" value="Microsite (MCKL Website)" /> -->

        <!-- // LEADCF9: {} //Microsites Source -->
        <!-- <input type="hidden" id="microsite_source" name="LEADCF9" :value="microsite_source" /> -->

        <!-- // LEADCF11: {} //Remarks -->
        <!-- <input type="hidden" id="remarks" name="LEADCF11" value="" /> -->

        <hr>

        <!-- agreement/tnc -->
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="pdpn_agreement" required />
            <label class="form-check-label" for="pdpn_agreement">
                I have read the College's
                <a href="https://mckl.edu.my/legal-policies-and-notices/" target="_blank">Personal Data
                    Protection Notice</a>
                and I give consent to the College to process my personal data
                accordingly. <span class="text-danger">*</span>
            </label>
        </div>

        <!-- submit -->
        <input type="submit" id="formsubmit" class="btn btn-secondary my-2" value="Submit" />
    </form>
</template>
  
<script setup>

import { ref, computed, reactive, onMounted } from "vue";
import "bootstrap/scss/bootstrap.scss";

const THE_FORM = ref('null')

function test_submit(e) {
    // e.preventDefault();

    // check formdata
    const formData = new FormData(e.target);
    const entries = formData.entries();
    for (var input of entries) {
        console.log(input[0] + ': ' + input[1]);
    }
}
onMounted(() => {
    THE_FORM.value.addEventListener('formdata', (e) => {
        console.log(e);
        console.log('formdata fired');

        // modifies the form data
        const formData = e.formData;

        formData.set('Last Name', form_data.last_name);
        formData.set('Email', form_data.email);
        formData.set('mobile', form_data.mobile);

        formData.set('LEADCF23', form_data.campus);
        formData.set(form_data.programme_interested_LEADCFID, form_data.programme_interested);
        formData.set('LEADCF5', form_data.latest_academic_qualification);
        formData.set('LEADCF10', form_data.microsite_interest);

        formData.set('LEADCF1', "Microsite (MCKL Website)");
        formData.set('returnURL', form_data.return_url);
        formData.set('LEADCF9', form_data.microsite_source);

        /*   const entries = formData.entries();
          for (var input of entries) {
              console.log(input[0] + ': ' + input[1]);
          } */
    })
})

const form_data = reactive({
    last_name: "testform",
    email: "testform@email.com",
    mobile: "0135552222",
    campus: "KL Campus",
    programme_interested: "",
    programme_interested_LEADCFID: "",
    latest_academic_qualification: "spm",
    microsite_interest: [],
    return_url: props.return_url,
    microsite_source: props.microsite_source
})

// const campus = "";
// const latest_academic_qualification = "";
const latest_academic_qualification = {
    "spm": "SPM",
    "igcse": "IGCSE",
    "pre_university": "Pre-University",
    "diploma": "Diploma",
    "other": "Other Qualifications",
};

const campus = {
    "KL Campus": "Kuala Lumpur Campus",
    "Penang Pykett Campus": "Pykett, Penang Campus"
}

// @change="onchange_programme_interested($event)"

/* function onchange_programme_interested(event) {
    // get optgroup's id
    let input_target_id =
        event.target.querySelector("option:checked").parentElement.id;

    // fill in the hidden field ($refs are arrays of v-for elements)
    this.$refs.output_programme_interested.forEach((item) => {
        // check optgroup_id with selected_id
        item.value = item.id == input_target_id ? event.target.value : "";
    });
}; */
const get_programme_interested = computed(() => {
    if (form_data.campus == "Penang Pykett Campus") {
        return props.programme_interested["penang"]
    } else {
        return props.programme_interested["kl"]
    }
})

function clear_programme_interested() {
    form_data.programme_interested = "";
}

/* const form_data = {
    fullname: "fullname here",
    kast
} */

const props = defineProps({
    return_url: {
        type: String,
        required: true
    },
    microsite_source: {
        type: String,
        required: true
    },

    // LEADCF7: {} //Preparatory Programmes
    // LEADCF20: {} //Pre-University
    // LEADCF19: {} //Diploma/Degree
    // LEADCF21: {} //Professional Accounting Programme
    // LEADCF22: {} //Centre for Professional Development
    programme_interested: {
        type: Object,
        default(rawProps) {
            return {
                "kl": {
                    // 220620 - options pulled from zoho-webform
                    LEADCF7: {
                        title: "Preparatory Programmes",
                        options: {
                            "PREPCAL (OCTOBER)": "PREPCAL (OCTOBER)",
                            // "PREPAUSMAT (MAY)": "PREPAUSMAT (MAY)",
                            // "FLY Bootcamp": "FLY Bootcamp",
                        },
                    },
                    LEADCF20: {
                        title: "Pre-U / Foundation",
                        options: {
                            "Cambridge A Level": "Cambridge A Level",
                            "Cambridge A Level (German Pathway)":
                                "Cambridge A Level (German Pathway)",
                            AUSMAT: "Australian Matriculation",
                        },
                    },
                    LEADCF19: {
                        title: "Diploma & Degree",
                        options: {
                            ADTP: "American Degree Transfer Program",
                            "DECE (PT)": "Diploma in Early Childhood Education",
                            // "DECE (FT)": "",
                            "DSW (PT)": "Diploma in Social Work - NEW",
                            // "DSW (FT)": "",
                            DCS: "Diploma in Computer Science - NEW",
                            DIT: "Diploma in Information Technology - NEW",
                            DEC: "Diploma in E-Commerce - NEW",
                            DDM: "Diploma in Digital Marketing - NEW",
                            DIFT: "Diploma in Financial Technology - NEW",
                            // DDB: "Diploma in Digital Business - NEW",
                        },
                    },
                    LEADCF21: {
                        title: "Professional Accounting",
                        options: {
                            "ACCA FIA": "ACCA Foundation in Accountancy",
                            "ACCA (FT)": "Association of Chartered Certified Accountants",
                            // "ACCA (FT)": "",
                        },
                    },
                    LEADCF22: {
                        title: "Professional Development",
                        options: {
                            CICTL:
                                "Cambridge International Certificate in Teaching & Learning",
                            CIDTL: "Cambridge International Diploma in Teaching & Learning",
                            "International Certification of Digital Literacy":
                                "International Certification of Digital Literacy",
                            "Micro-Credentials in Social Work":
                                "Micro-Credentials in Social Work",
                            "Micro-Credentials in Early Childhood Education":
                                "Micro-Credentials in Early Childhood Education",
                            "Micro-credentials in Computer Science":
                                "Micro-credentials in Computer Science",
                            "Micro-credentials in Information Technology":
                                "Micro-credentials in Information Technology",
                            // "Micro-credentials in E-Commerce":
                            //   "Micro-credentials in E-Commerce",
                            // "Micro-credentials in Digital Marketing":
                            //   "Micro-credentials in Digital Marketing",
                            "Educational Management and Leadership for Private Education":
                                "Educational Management and Leadership for Private Education",
                            "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop":
                                "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop",
                            "Micro-Cred Computing &amp; Business":
                                "Micro-Cred Computing &amp; Business",
                            "AWS Academy": "AWS Academy",
                            // ICDL: "ICDL - The Digital Skills Standard", // International Certification of Digital Literacy
                            // "FLY Programme": "FLY Programme",
                        },
                    },
                },
                "penang": {
                    LEADCF7: {
                        title: "Preparatory Programmes",
                        options: {
                            "PREPCAL (OCTOBER)": "PREPCAL (OCTOBER)",
                        },
                    },
                    LEADCF20: {
                        title: "Pre-U / Foundation",
                        options: {
                            "Cambridge A Level": "Cambridge A Level",
                            "Cambridge A Level (German Pathway)":
                                "Cambridge A Level (German Pathway)",
                            AUSMAT: "Australian Matriculation",
                        },
                    },
                    LEADCF21: {
                        title: "Professional Accounting",
                        options: {
                            "ACCA FIA": "ACCA Foundation in Accountancy",
                            "ACCA (FT)": "Association of Chartered Certified Accountants",
                        },
                    },

                }
            };
        },
    },
});
</script>

<style lang="scss" scoped>
label {
    font-size: 0.925rem;
    margin-top: .25rem;
}

label.form-check-label {
    margin-top: initial;
}

#pdpn_agreement+.form-check-label {
    margin: 0;
    font-size: 0.825rem;
}
</style>