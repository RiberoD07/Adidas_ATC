function addToCart() {
	size = '10';
	var sizesList=document.getElementsByName("skuAndSize")[0];
	//var retailer = 'Nike';
	/*nike--
	for (var i=0; i<sizesList.length; i++)
	{		if(sizesList.options[i].text == size)
		{
			document.getElementsByName("skuAndSize")[0].selectedIndex = i;
			document.getElementsByClassName("add-to-cart nsg-button nsg-grad--nike-orange")[0].click();
		}
	}*/
	sizesList = document.getElementsByName("pid")[0];
	for (var i=0; i<sizesList.length; i++)
	{
		if(sizesList[i].textContent.trim() == size)
		{
			sizesList.selectedIndex = i;
			document.getElementsByName("add-to-cart-button")[0].click();
		}
	}
	console.log("it worked");
	window.location.href = "https://www.adidas.ca/on/demandware.store/Sites-adidas-CA-Site/en_CA/CODelivery-Start";  // sadly this reloads
	        
}

function fTick()
{
	if(document.getElementsByName("pid")[0] != undefined)
	{
		setTimeout("addToCart()", 600);
		//addToCart();
	}else{
		setTimeout("fTick()", 300);
	}
}
setTimeout("fTick()", 300);

