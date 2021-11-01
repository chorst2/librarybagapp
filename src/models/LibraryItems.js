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



function TVShow(trackName, collectionName, previewUrl, artworkUrl60, primaryGenreName, contentAdvisoryRating, longDescription){
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.previewUrl = previewUrl;
    this.artworkUrl60 = artworkUrl60;
    this.primaryGenreName = primaryGenreName;
    this.contentAdvisoryRating = contentAdvisoryRating;
    this.longDescription = longDescription;
}

function Album(artistName, collectionName, artworkUrl60, contentAdvisoryRating, trackCount, primaryGenreName){
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.artworkUrl60 = artworkUrl60;
    this.contentAdvisoryRating = contentAdvisoryRating;
    this.trackCount = trackCount;
    this.primaryGenreName = primaryGenreName;
}

function MusicVideo(artistName, trackName, artworkUrl60, previewUrl){
    this.artistName = artistName;
    this.trackName = trackName;
    this.artworkUrl60 = artworkUrl60;
    this.previewUrl = previewUrl;
}


function Song(artistName, trackName, collectionName, previewUrl, artworkUrl60, contentAdvisoryRating, primaryGenreName){
    this.artistName = artistName;
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.previewUrl = previewUrl;
    this.artworkUrl60 = artworkUrl60;
    this.contentAdvisoryRating = contentAdvisoryRating;
    this.primaryGenreName = primaryGenreName;
}

function Movie(artistName, trackName, artworkUrl60, longDescription, contentAdvisoryRating){
    this.artistName = artistName;
    this.trackName = trackName;
    this.artworkUrl60 = artworkUrl60;
    this.longDescription = longDescription;
    this.contentAdvisoryRating = contentAdvisoryRating;
}

function Book(artworkUrl60, trackName, artistName, description){
    this.artworkUrl60 = artworkUrl60;
    this.trackName = trackName;
    this.artistName = artistName;
    this.description = description;
}

export {LibraryItem, TVShow, Album, MusicVideo, Song, Movie, Book};