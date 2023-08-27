import * as T from "../lib/db-typings";
import { fetchDB } from "./core";
import Modal from "./modal";
import path from "./paths";

const designs = await fetchDB<T.Modal>("designs-qr");
const modal = new Modal({ o: designs, l: designs.id.length });
modal.constructIII(designs, path.desqr);
modal.showSlides(modal.i);