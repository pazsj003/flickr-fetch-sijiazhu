import * as constants from "./constants"
import fetchJsonp from "fetch-jsonp";


export const TextChanged = (dispatch ,newText) => (

    dispatch({
        type: constants.TEXT_CHANGED,
        text: newText
    })
)



export const TagSearch = (dispatch ,tag) => {

    console.log("tag is "  + tag);
    var endpoint =
        'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

    // let tag= this.state.images.title;
    var search = endpoint + tag;

    const result = fetchJsonp(search, {
        jsonpCallback: 'jsoncallback',
        timeout: 3000
    });

    result
        .then(response => response.json())
        .then(back =>dispatch ({
          type:constants.TAG_SEARCH,
          items:back.items

        }))
        .catch(function(err) {
            console.log(err);
        });

}