$(function() {
	chrome.extension.sendMessage({
		method: 'get'
	},
function fillInfo() {
console.log("filling info");
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_firstName").value = "First Name";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_lastName").value = "Last Name";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_address1").value = "Street Address";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_city").value = "St.Catharines";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_countyProvince").value = "ON";//ontario
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_zip").value = "A1B 2C3";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_email_emailAddress").value = "test@test.com";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_ageConfirmation").checked=true;
//window.location.href = "https://www.paypal.com/cgi-bin/webscr?useraction=continue&cmd=_express-checkout&token=EC-4H541641KH798620S#/checkout/login";
document.getElementById("dwfrm_delivery_singleshipping_shippingAddress_addressFields_phone").value = "2899903435";
console.log("info has been filled");
setTimeout(document.getElementById("clickcollect-cp-pickup").click(),2000);
document.getElementbyId("clickcollect-cp-pickup").click(); //test
console.log("clicked");
});
//fillInfo();
setInterval(fillInfo, 1000);
});
