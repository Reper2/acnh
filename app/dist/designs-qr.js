import { fetchDB } from "./core.js";
import Modal from "./modal.js";
import path from "./paths.js";
const designs = await fetchDB("designs-qr");
const modal = new Modal({ o: designs, l: designs.id.length });
modal.constructIII(designs, path.desqr);
modal.showSlides(modal.i);
//# sourceMappingURL=designs-qr.js.map