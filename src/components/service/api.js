import axios from "axios";
import { paramsForNotify } from "components/App";
import { Notify } from "notiflix";

const KEY = "39286260-36ff99979e0a23a42f4451b46";
const URL = "https://pixabay.com/api/";

export async function fetchPhoto(search, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;
    const response = await axios.get(url);
    return response.data;       
};

export function onFetchError() {
    Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
};