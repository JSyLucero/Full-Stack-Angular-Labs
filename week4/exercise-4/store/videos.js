const favoriteDirector = { name: "James Camerson", genre: "Science Fiction", nationality: "English" };

// returns the favorite book
function favoriteVideo() {  
    return { title: "Terminator", author: "James Cameron" };
}

// returns a list of good books
function getVideoRecommendations() {  
    return [
        {id: 1, title: "Terminator", author: "James Cameron"},
        {id: 2, title: "Aliens", author: "Jamers Cameron"}
    ];
}

// exports the variables and functions above so that other modules can use them
module.exports = {
    favoriteDirector: favoriteDirector,  
    favoriteVideo: favoriteVideo,
    getVideoRecommendations: getVideoRecommendations
}