
/**
 * Fetching data from movie api
 * @param {string} movieName 
 */
export const fetchMovieFromAPI = async (movieName) => {

    try{
        const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=480344f1&r=json`);
        const json = await response.json();
        
        return json;
      
    }catch(error){
        console.log(error);
      }

    }



  