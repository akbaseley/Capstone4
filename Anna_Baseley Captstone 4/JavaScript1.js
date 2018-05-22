
var optionList = [];
var priceList = [];
function add(name, price)
{

    optionList.push(name);
    priceList.push(price);

    document.getElementById('ShoppingCart').innerHTML += `<tr><td>${name}</td><td>$${price.toFixed(2)}</td></tr>`;
    addTotal();
}

function addTotal()
{
    total = 0;
    for(var i in priceList)
    {
        total =+ priceList[i];
    }
    document.getElementById('CartTotal').innerHTML = `<tr><td>${"Cart Total: "}</td><td>$${total.toFixed(2)}</td></tr>`;

}