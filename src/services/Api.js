import axios from "axios";

const mainURL = "https://pixabay.com/api/?q=";
const last =
  "&page=1&key=16022576-fff7d7449458f2c934f19517f&image_type=photo&orientation=horizontal&per_page=12";

export const fetchImages = (query = "love") =>
  axios.get(mainURL + query + last);
