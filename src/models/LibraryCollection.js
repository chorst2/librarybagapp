import {LibraryItem} from "./LibraryItems";

function LibraryCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new LibraryItem(
                item,
                //define a function and pass "this" in as a collection
                    ((collection) => function(){
                        //the library item will call this function
                        collection.removeItem(this) //"this" will refer to the libraryItem
                    })(this) //"this" refers to the array/collection

            )
        );

        //allows for chaining
        //this is referring to the array
        return this;
    }

    arr.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        // "this" is referring to the array - this is so people can remove multiples
        return this;
    }



    return arr;
}

export default LibraryCollection;