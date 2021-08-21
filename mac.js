const macMamory8Gb = document.getElementById('memory8Gb');
const macMemory16Gb = document.getElementById('memory16Gb');
const memoryPrice = document.getElementById('extra-memory-cost');
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price')
// memorysection
macMamory8Gb.addEventListener('click', function(){
    memoryPrice.innerText = "0";
    updateTotal();
})

macMemory16Gb.addEventListener('click', function(){
    memoryPrice.innerText = "180";
    updateTotal();

})
function memoryPrice(type){

}

const macStorage256Gb = document.getElementById('storage256Gb');
const macStorage512Gb = document.getElementById('storage512Gb');
const macStorage1Tb = document.getElementById('storage1Tb');
const storagePrice = document.getElementById('extra-storage-cost');
// storage section
macStorage256Gb.addEventListener('click', function(){
      storagePrice.innerText = "0";
      updateTotal();
})
macStorage512Gb.addEventListener('click', function(){
      storagePrice.innerText = "100";
      updateTotal();
})
macStorage1Tb.addEventListener('click', function(){
      storagePrice.innerText = "180";
      updateTotal();
})
// delivery section
const macFreeDelivery = document.getElementById('free-Delivery');
const macPaidDelivery = document.getElementById('paid-Delivery');
const deliveryPrice = document.getElementById('delivery-cost');
macFreeDelivery.addEventListener('click', function(){
    deliveryPrice.innerText = "0";
    updateTotal();
})
macPaidDelivery.addEventListener('click', function(){
    deliveryPrice.innerText = "20";
    updateTotal();
})

// total price
function updateTotal(){
    const fixPrice = parseInt(bestPrice.innerText);
    const  memoryProductPrice = parseInt(memoryPrice.innerText);
    const storageProductPrice = parseInt(storagePrice.innerText);
    const deliveryCost = parseInt(deliveryPrice.innerText);
    
    const newTotal = fixPrice + memoryProductPrice + storageProductPrice + deliveryCost;
    totalPrice.innerText = newTotal;
}

// promo code adding
const promoApply = document.getElementById('apply-promo');
const total = document.getElementById('with-promo-total');
const totalCost = document.getElementById('total-price')
promoApply.addEventListener('click', function(){
const reedemCode = document.getElementById('code').value
if(reedemCode == "Stivekaku"){
    
 total.innerText = totalPrice.innerText - parseInt(totalPrice.innerText) * 0.2;
}
else{
    alert('Get the code')
}
})