import axios from "axios";

export default axios.create({
  baseURL: "https://harry-potter-api.fiqriachmada.repl.co/characters/",
  headers: {
    "Content-type": "application/json"
  }
});
