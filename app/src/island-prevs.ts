import * as T from "../lib/db-typings";
import { fetchDB } from "./core";
import Modal from "./modal";

const prevs = await fetchDB<T.Modal>("island-prevs");
const modal = new Modal({ o: prevs, l: prevs.id.length, id: "DA-9419-3603-8052"});
modal.constructI(prevs);
modal.showSlides(modal.i);