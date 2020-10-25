import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID r-9gBBe8fa7fmNiMeVaO2c5u2Koc0Q-lqccOKazY9Gg",
  },
});
