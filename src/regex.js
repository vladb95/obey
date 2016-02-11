export default {
  float: /^[0-9]*[.][0-9]+$/,
  number: /^[0-9]+$/,
  alphanum: /^[a-zA-Z0-9]+$/,
  email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  phone: /^((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*$/,
  url: /^((http|https|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  ssn: /^([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})+$/,
  ip: /^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/,
  zip: /^([0-9]{5}(?:-[0-9]{4})?)*$/
}
