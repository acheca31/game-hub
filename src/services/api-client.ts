import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f57f3898d954ebda453afac0b23b1ec",
  },
});
