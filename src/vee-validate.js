import { extend, localize } from "vee-validate";
import { min, max, required, email, confirmed, length, digits, alpha_spaces, alpha_num, regex, oneOf, between } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", required);
extend("min", min);
extend("max", max);
extend("email", email);
extend("confirmed", confirmed);
extend("length", length);
extend("digits", digits);
extend("alpha_spaces", alpha_spaces);
extend("alpha_num", alpha_num);
extend("regex", regex);
extend("oneOf", oneOf);
extend("between", between);

// Install messages
localize({
  en
});