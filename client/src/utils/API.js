import axios from "axios";

export default {
    search: function(search) {
        return axios.post("/articles", search);
    },
    populate: function() {
        return axios.get("/articles");
    },
    save: function(id) {
        return axios.post("/articles/" + id);
    },
    delete: function(id) {
        return axios.delete("/articles/" + id);
    }
};
