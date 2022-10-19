function enterMessage(idn, errid, errmessage) {
  if (document.getElementById(idn).value.length == 0) {
    document.getElementById(errid).innerHTML = errmessage;
  }
}
function hideMessage(idn, errid, errmessage) {
  if (document.getElementById(idn).value.length > 0) {
    document.getElementById(errid).innerHTML = errmessage;
  }
}
