import axios from "axios";

const mainURL = "https://pixabay.com/api/?q=";
const last =
  "&key=16022576-fff7d7449458f2c934f19517f&image_type=photo&orientation=horizontal&per_page=12";

const unite = "&page="

export const fetchImages = (query = "love", page) =>
  axios.get(mainURL + query + unite + page + last);
