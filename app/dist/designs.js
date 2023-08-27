import { fetchDB } from "./core.js";
import Modal from "./modal.js";
import path from "./paths.js";
async function fn(designs, dir) {
    const modal = new Modal({ o: designs, l: designs.id.length, d: designs });
    modal.constructII(designs, dir);
    modal.showSlides(modal.i);
}
const dir = location.href === `${location.protocol}//${location.host + path.despro}` ? path.despro : path.des;
const designs = await fetchDB(dir === path.despro ? "designs-pro" : "designs");
fn(designs, dir);
//# sourceMappingURL=designs.js.map