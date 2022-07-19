import axios from "axios";
axios.defaults.baseURL = "https://starter-upp-django-back-end.herokuapp.com"; // this shoud be equal to env.urls soon
axios.defaults.withCredentials = true;

// Here we define our axios/xml/fetch requests that we bring into our components and App.tsx file.

// This code will have to be adjusted to accomade for the express-session HTTP_ONLY_COOKIE that we are using

class ProjectDataService {
    getAll(token: string) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get("/projects/");
    }

    createCompany(data: string, token: string) {
        return axios.post("/projects/", data, {
            headers: {
                Authorization: "Token " + token,
                "Content-Type": "application/vnd.api+json",
            },
            withCredentials: true,
        });
    }

    updateCompany(id: any, data: any, token: string) {
        axios.defaults.headers.common["Authorization"] = "Token" + token;
        return axios.put("/projects/${id}", data);
    }

    deleteCompany(id: any, token: string) {
        axios.defaults.headers.common["Authorization"] = "Token" + token;
        return axios.delete("/projects/${id}");
    }
}

export default new ProjectDataService();
