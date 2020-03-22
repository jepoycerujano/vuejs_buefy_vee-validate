<template>
  <section>
    <div>
      <H1>
        <strong>Hauler Information Form</strong>
      </H1>
    </div>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
      <b-field grouped>
        <b-switch v-model="isTransType" true-value="Hauler" false-value="Pickup">{{ isTransType }}</b-switch>
      </b-field>
      <!-- business name -->
      <ValidationProvider
        :rules="{ required: true, regex: /^[0-9a-zA-Z\s.]+$/, max: 50 }"
        name="business name"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Business Name"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-input type="text" v-model="bus_name" icon="clipboard-account" :disabled="activeNewBus"></b-input>
        </b-field>
      </ValidationProvider>
      <!-- business tel. no. -->
      <ValidationProvider
        rules="required|digits:8"
        name="telephone number"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Tel. No."
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-input type="text" v-model="bus_tel_num" icon="phone"></b-input>
        </b-field>
      </ValidationProvider>
      <!-- business mob. no. -->
      <ValidationProvider
        rules="required|digits:10"
        name="mobile number"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Mob. No."
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-taginput
            type="number"
            v-model="bus_mob_num"
            ellipsis
            icon="label"
            placeholder="Add a mobile"
          >></b-taginput>
        </b-field>
      </ValidationProvider>
      <!-- business email -->
      <ValidationProvider rules="required|email|max:50" name="email" v-slot="{ errors, valid }">
        <b-field
          label="Email"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-taginput
            type="email"
            v-model="bus_email"
            ellipsis
            icon="label"
            placeholder="Add a email"
          ></b-taginput>
        </b-field>
      </ValidationProvider>
      <!-- business cotract date -->
      <ValidationProvider rules="required" name="contract date" v-slot="{ errors, valid }">
        <b-field
          label="Contract Date"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-datepicker
            placeholder="Click to select..."
            :min-date="minDate"
            :max-date="maxDate"
            v-model="bus_end_contract"
            icon="calendar"
          ></b-datepicker>
        </b-field>
      </ValidationProvider>
      <!-- business owner -->
      <ValidationProvider
        rules="required|max:30|alpha_spaces"
        name="owner"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Owner"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-input type="text" v-model="bus_owner" icon="account"></b-input>
        </b-field>
      </ValidationProvider>
      <!-- business cluster -->
      <ValidationProvider rules="required" name="cluster" v-slot="{ errors, valid }">
        <b-field
          label="Cluster"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          :label-position="labelPosition"
        >
          <b-select v-model="bus_cluster" placeholder="Select cluster" icon="earth">
            <option bus_cluster="Luzon">Luzon</option>
            <option bus_cluster="Visayas">Visayas</option>
            <option bus_cluster="Mindanao">Mindanao</option>
          </b-select>
        </b-field>
      </ValidationProvider>
      <div class="buttons">
        <b-button
          :disabled="invalid"
          :loading="btnLoadingNew"
          class="is-success"
          @click="resetForm()"
          outlined
        >
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit</span>
        </b-button>
        <b-button class="is-danger" @click="resetForm()" outlined>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
          <span>Cancel</span>
        </b-button>
      </div>
      <!-- END Validation -->
    </ValidationObserver>
  </section>
</template>

<script>
const today = new Date();
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    resetForm() {
      this.activeNewBus = false;
      this.bus_name = "";
      this.bus_tel_num = "";
      this.bus_mob_num = [];
      this.bus_email = [];
      this.bus_end_contract = [];
      this.bus_owner = "";
      this.bus_cluster = "";
      this.isSwitchedCustom = "Pickup";
      this.isCardModalActive = true;
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  },
  data() {
    return {
      btnLoadingNew: false,
      activeNewBus: false,
      isTransType: "Pickup",
      labelPosition: "on-border",
      date: new Date(),
      maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      minDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 365
      ),
      isCardModalActive: false,
      bus_name: "",
      bus_tel_num: "",
      bus_mob_num: [],
      bus_email: [],
      bus_end_contract: [],
      bus_owner: "",
      bus_cluster: ""
    };
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 10px;
}

.my-table {
  overflow-y: auto;
}

section {
  padding: 30px;
  width: 600px;
  margin: 20px auto;
  background-color: whitesmoke;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.65);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.65);
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.65);
}
</style>