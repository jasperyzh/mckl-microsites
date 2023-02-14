<template>
    <form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads4875945000000954001" method="POST"
        :class="`container-fluid ${microsite_source}`" @submit="onsubmit_form($event)" ref="THE_FORM">

        <pre v-if="DEBUG"> {{ form_data }} </pre>

        <div class="row g-2">
            <!-- Last Name -->
            <!-- Email -->
            <!-- Mobile -->
            <div class="col-12 col-md-12">
                <label for="Last_Name">Full Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="Last_Name" minlength="5" required placeholder="Full Name *"
                    v-model="form_data.last_name" />
            </div>
            <div class="col-12 col-md-6">
                <label for="Email">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="Email" required placeholder="Email *"
                    v-model="form_data.email" />
            </div>
            <div class="col-12 col-md-6">
                <label for="mobile">Mobile Phone <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="mobile" minlength="8" maxlength="12" required
                    placeholder="Mobile phone *" v-model="form_data.mobile" />
            </div>


            <!-- status -->
            <div class="col-12 col-md-6">
                <label for="status">Status <span class="text-danger">*</span></label>
                <select class="form-select status" id="status" required v-model="form_data.status">
                    <option disabled selected value="">
                        - Select your current Status -
                    </option>
                    <option value="High school student">High school student</option>
                    <option value="College / University student">
                        College / University student
                    </option>
                    <option value="Working professional">Working professional</option>
                    <option value="Teacher / Academician">Teacher / Academician</option>
                    <option value="Other">Other</option>
                </select>
            </div>


            <!-- state -->
            <!-- <div class="col-12 col-md-6">
                <label for="status">State / Negeri <span class="text-danger">*</span></label>
                <select class="form-select state" id="state" required v-model="form_data.state">
                    <option disabled selected value="">
                        - Select your State -
                    </option>
                    <option value="Johor">Johor</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Kelantan">Kelantan</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Labuan">Labuan</option>
                    <option value="Melaka">Melaka</option>
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Pahang">Pahang</option>
                    <option value="Penang">Penang</option>
                    <option value="Perak">Perak</option>
                    <option value="Perlis">Perlis</option>
                    <option value="Sabah">Sabah</option>
                    <option value="Sarawak">Sarawak</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Terengganu">Terengganu</option>
                </select>
            </div> -->


            <div class="col-12">
                <label for="programme_interested">Interested Course <span class="text-danger">*</span></label>
                <select class="form-select " id="programme_interested" required v-model="form_data.programme_interested"
                    @change="onchange_programme_interested($event)">
                    <option disabled="" selected value="">
                        - Please select your preferences -
                    </option>

                    <optgroup v-for="(optgroup, optgroup_index) in get_programme_interested_options"
                        :key="optgroup_index" :label="optgroup.title" :id="optgroup_index">

                        <option v-for="(option_name, option_index) in get_programme_interested_options[
    optgroup_index
].options" :key="option_index" :value="option_index" :selected="option_index === form_data.programme_interested"
                            v-html="option_name"></option>
                    </optgroup>
                </select>
            </div>

        </div>

        <hr>

        <!-- agreement -->
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="agreement" required />
            <label class="form-check-label" for="agreement">
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

const DEBUG = false;
const PREFILL_FORM = false;
const LOG_FORMDATA = true;

const THE_FORM = ref('null')

function onsubmit_form(e) {
    if (DEBUG) e.preventDefault();

    // check formdata
    if (LOG_FORMDATA) {
        const formData = new FormData(e.target);
        const entries = formData.entries();
        for (var input of entries) {
            console.log(input[0] + ': ' + input[1]);
        }
    }
}

onMounted(() => {

    // console.log()

    THE_FORM.value.addEventListener('formdata', (e) => {
        // modifies the form data
        const formData = e.formData;

        // zoho_default
        formData.set('xnQsjsdp', "4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb");
        formData.set('zc_gad', "");
        formData.set('actionType', "TGVhZHM=");
        formData.set('xmIwtLD', "3df8513a44e8ee0dc6e36209ffd3db240675dcf6887b53b2398a3abd933e9f68");

        formData.set('Last Name', form_data.last_name);
        formData.set('Email', form_data.email);
        formData.set('Mobile', form_data.mobile);

        // formData.set('LEADCF23', form_data.campus);

        // preselected checker: CPD or REMARKS
        if (form_data.programme_interested != "" && form_data.programme_interested_LEADCFID == "") {

            // LEADCF22 || LEADCF11
            for (const key in
                props.programme_interested.LEADCF22.options) {
                if (key === form_data.programme_interested) {
                    form_data.programme_interested_LEADCFID = "LEADCF22";

                    formData.set(form_data.programme_interested_LEADCFID, form_data.programme_interested);
                    return;
                }
            }
            for (const key in
                props.programme_interested.LEADCF11.options) {
                if (key === form_data.programme_interested) {
                    form_data.programme_interested_LEADCFID = "LEADCF11";

                    // DEBT! need a function to return "[free-courses] ";
                    formData.set(form_data.programme_interested_LEADCFID, check_courses(form_data.programme_interested));
                    return;
                }
            }
        } else {
            formData.set(form_data.programme_interested_LEADCFID, check_courses(form_data.programme_interested));
        }

        // returnURL check here
        const check_returnURL = (courses) => {
            for (const key in courses.LEADCF22.options) {
                if (key === form_data.programme_interested) {
                    return "https://mckl.edu.my/short-courses/thank-you";
                }
            }
            for (const key in courses.LEADCF11.options) {
                if (key === form_data.programme_interested) {
                    return "https://mckl.edu.my/short-courses/free-courses/thank-you";
                }
            }
        }
        formData.set('returnURL', check_returnURL(props.programme_interested));

        formData.set('LEADCF9', form_data.microsite_source);
        // formData.set('LEADCF16', form_data.state);
        formData.set('LEADCF17', form_data.status);
    })
})

function check_courses(course) {
    for (const key in props.programme_interested.LEADCF11.options) {
        if (key === course) {
            return "[free-courses] " + course;
        }
    }
    return course;
}

const form_data = reactive({
    last_name: "",
    email: "",
    mobile: "",
    // campus: "KL Campus",
    programme_interested_LEADCFID: "",
    programme_interested: props.preselect_interested_course,
    // latest_academic_qualification: "",
    // microsite_interest: [],
    // remarks: "",
    lead_source: "Microsite (MCKL Website)",
    return_url: props.return_url,
    microsite_source: props.microsite_source,
    status: "",
    // state: ""
})

if (PREFILL_FORM) {
    let ran_num = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    form_data.last_name = "testform" + ran_num;
    form_data.email = "testform" + ran_num + "@email.com";
    form_data.mobile = "0135552" + ran_num;
}


const get_programme_interested_options = computed(() => {
    return props.programme_interested
    /* if (form_data.campus == "Penang Pykett Campus") {
        return props.programme_interested["penang"]
    } else {
        return props.programme_interested["kl"]
    } */
})

function clear_programme_interested() {
    form_data.programme_interested = "";
}

function onchange_programme_interested(e) {
    form_data.programme_interested_LEADCFID = e.target.querySelector('option:checked').parentElement.id;
};

const props = defineProps({
    return_url: {
        type: String,
        required: true
    },
    preselect_interested_course: {
        type: String,
        required: true
    },
    microsite_source: {
        type: String,
        required: true
    },
    programme_interested: {
        type: Object,
        default(rawProps) {
            return {
                // 230102 - Centre for Professional development (CPD)
                LEADCF22: {
                    title: "Short Courses",
                    options: {
                        CICTL:
                            "Cambridge International Certificate in Teaching & Learning",
                        CIDTL: "Cambridge International Diploma in Teaching & Learning",
                        // "Teaching & Learning and Education Related Short Courses & Workshop":
                        //     "Teaching & Learning Short Courses & Workshops",
                        // ICDL: "ICDL - The Digital Skills Standard"
                    },
                },
                // 230102 - free courses goes under "remarks"
                LEADCF11: {
                    title: "Free Courses",
                    options: {
                        "Website Design with Google Sites": "Website Design with Google Sites",
                        "Embracing Autism": "Embracing Autism",
                        "Information Literacy and Online Search Strategies": "Information Literacy and Online Search Strategies",
                        "Introduction to Psychology for Social Workers": "Introduction to Psychology for Social Workers",
                        "Learning Skills for Lifelong Learning": "Learning Skills for Lifelong Learning",
                        "Successful Entry to Top Universities in the World": "Successful Entry to Top Universities in the World",
                    },
                },
            };
        },
    },
});
</script>

<style lang="scss" scoped>
label {
    font-size: 0.925rem;
    margin-top: .5rem;
    margin-bottom: .25rem;
}

label.form-check-label {
    margin-top: initial;
}

#pdpn_agreement+.form-check-label {
    margin: 0;
    font-size: 0.825rem;
}

.campus.form-check-input+.form-check-label {
    color: $primary;
}

.campus.form-check-input:checked+.form-check-label {
    font-weight: bold;
}
</style>