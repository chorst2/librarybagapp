
function LibraryBag() {
    let cartArray = [];

    cartArray.addToCart = function(item){
        //add item to cart array
        this.push(item);
    }

    cartArray.checkOutBag = function(){
        //loop through cart array and call checkOut() from LibraryItems.js
        for(var i = 0; i < cartArray.length; i++){
            cartArray[i].checkOut();
        }
        //empty array
        cartArray.splice(0);

    }

    
    cartArray.removeFromCart = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }


    return cartArray;

}

export default LibraryBag;