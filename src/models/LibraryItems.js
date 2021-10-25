function LibraryItem(media, removeMethod){

    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'};

    //unique id for each library item
    media.id = Math.floor(Math.random() * 10e16);

    //decorate existing objects with library item functionality
    media.status = STATUSES.CHECKED_IN;

    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }
    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

    //calls the method given if none given then call an empty function
    media.remove = removeMethod || function(){};


    return media;

}


function Book(title, genre, pages){
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.pages = pages;

}

function Movie(title, genre, runningTime) {
        this.title = title || 'Default Title';
        this.genre = genre || '';
        this.runningTime = runningTime;
}

function Album(title, artist, trackCount){
    this.title = title || 'Default Title';
    this.artist = artist || 'Unknown';
    this.trackCount = trackCount;
}

export {LibraryItem, Book, Movie, Album};