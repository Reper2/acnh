import * as T from "../lib/db-typings";
import { fetchDB } from "./core";
import Modal from "./modal";
import path from "./paths";

async function fn(designs: T.Designs, dir: string) {
	const modal = new Modal({ o: designs, l: designs.id.length, d: designs });
	modal.constructII(designs, dir);
	modal.showSlides(modal.i);
}

const dir = location.href === `${location.protocol}//${location.host + path.despro}` ? path.despro : path.des;
const designs = await fetchDB<T.Designs>(dir === path.despro ? "designs-pro" : "designs");
fn(designs, dir);