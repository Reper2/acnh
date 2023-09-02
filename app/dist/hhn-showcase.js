import { fetchDB } from "./core.js";
import Modal from "./modal.js";
const props = await fetchDB("hhn-props");
const modal = new Modal({ o: props, l: props.id.length, id: "RA-7852-3149-7307" });
modal.constructI(props);
modal.showSlides(modal.i);
//# sourceMappingURL=hhn-showcase.js.map