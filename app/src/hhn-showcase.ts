import * as T from "../lib/db-typings";
import { fetchDB } from "./core";
import Modal from "./modal";

const props = await fetchDB<T.Modal>("hhn-props");
const modal = new Modal({ o: props, l: props.id.length, id: "RA-7852-3149-7307" });
modal.constructI(props);
modal.showSlides(modal.i);