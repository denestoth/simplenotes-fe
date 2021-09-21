import axios from "axios";

const TAG_URL = 'http://localhost:8080/tags/';

class TagService {
    
    getTags() {

        const headers = {
            "Content-Type": "application/json"
          };

        try {
            return axios.get(TAG_URL, {headers});
        } catch (error) {
            console.log(error);
        }
    }
}

export default new TagService()