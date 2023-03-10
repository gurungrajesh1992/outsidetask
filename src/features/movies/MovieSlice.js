import { createSlice } from "@reduxjs/toolkit";

import interstaller from "../../images/interstaller.jpg";
import magadheera from "../../images/Magadheera.jpg";
import coco from "../../images/coco.jpg";

const initialState = {
  lists: [
    {
      id: 1,
      title: "Interstellar",
      image: interstaller,
      content:
        "This is content Interstellar.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      director_id: 1,
      category_id: 1,
    },
    {
      id: "2",
      title: "Coco",
      image: coco,
      content:
        "This is content Coco.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      director_id: 2,
      category_id: 2,
    },
    {
      id: "3",
      title: "Magadhira",
      image: magadheera,
      content:
        "This is content Magadhira.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      director_id: 3,
      category_id: 3,
    },
  ],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};



export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const selectAlllists = (state) => state.movies.lists;

export default MovieSlice.reducer;
