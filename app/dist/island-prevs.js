import { fetchDB } from "./core.js";
import Modal from "./modal.js";
const prevs = await fetchDB("island-prevs");
const modal = new Modal({ o: prevs, l: prevs.id.length, id: "DA-9419-3603-8052" });
modal.constructI(prevs);
modal.showSlides(modal.i);
//# sourceMappingURL=island-prevs.js.map