import { SavUtils, copyLink, coreData } from "./core.js";
const app = document.getElementById("app");
const errStr = "Optional parameters a_name, id and d are undefined. Please provide values for either a_name and id or d.";
const row = {
    _: document.createElement("div"),
    col: {
        _: [],
        hashlink: [],
        img: []
    }
};
const modal = {
    _: document.createElement("div"),
    closeBtn: document.createElement("span"),
    content: {
        _: document.createElement("div"),
        slide: {
            _: [],
            hashlink: [],
            numtxt: [],
            img: []
        },
        arrowBtn: [],
        capCtr: {
            _: document.createElement("div"),
            capTxt: document.createElement("h2")
        }
    }
};
const sav = new SavUtils();
const useOriginalName = sav.getParam("ogname");
const ogname0 = document.getElementById("ogname0");
const ogname1 = document.getElementById("ogname1");
export default class Modal {
    o;
    l;
    i;
    d;
    id;
    constructor({ o, l, id, d }) {
        this.o = o;
        this.l = l;
        this.i = 0;
        this.d = d;
        this.id = id;
        for (let i = 0; i < l; i++) {
            row.col._.push(document.createElement("div"));
            row.col.hashlink.push(document.createElement("a"));
            row.col.img.push(document.createElement("img"));
            modal.content.slide._.push(document.createElement("div"));
            modal.content.slide.hashlink.push(document.createElement("a"));
            modal.content.slide.numtxt.push(document.createElement("div"));
            modal.content.slide.img.push(document.createElement("img"));
        }
        for (let i = 0; i < 2; i++) {
            modal.content.arrowBtn.push(document.createElement("a"));
        }
        for (let i = 0; i < l; i++) {
            row.col._[i].className = "column";
            row.col.hashlink[i].onclick = () => { this.open(); this.setSlide(i); };
            row.col.hashlink[i].href = modal.content.slide.hashlink[i].href = `#${o.id[i]}`;
            modal.content.slide._[i].id = o.id[i];
            row.col.img[i].style.width = modal.content.slide.img[i].style.width = "100%";
            row.col.img[i].className = "hover-shadow";
            modal.content.slide._[i].className = "slides";
            modal.content.slide.numtxt[i].className = "numbertext";
            modal.content.slide.numtxt[i].innerHTML = `${i + 1} / ${l}`;
            modal.content.slide.hashlink[i].onclick = () => copyLink(location.href);
        }
        row._.className = "row";
        modal._.id = modal._.className = "modal";
        modal.content._.className = "modal-content";
        modal.closeBtn.className = "close cursor";
        modal.closeBtn.innerHTML = "×";
        modal.closeBtn.onclick = () => this.close();
        modal.content.arrowBtn[0].className = "prev";
        modal.content.arrowBtn[0].innerHTML = "❮";
        modal.content.arrowBtn[0].title = "Previous Slide (◁)";
        modal.content.arrowBtn[0].onclick = () => this.plusSlides(-1);
        modal.content.arrowBtn[1].onclick = () => this.plusSlides(1);
        modal.content.arrowBtn[1].title = "Next Slide (▷)";
        modal.content.arrowBtn[1].innerHTML = "❯";
        modal.content.arrowBtn[1].className = "next";
        modal.content.capCtr._.className = "caption-container";
        modal.content.capCtr.capTxt.id = "caption";
        $(() => {
            for (let i = 0; i < l; i++) {
                row.col.hashlink[i].appendChild(row.col.img[i]);
                row.col._[i].appendChild(row.col.hashlink[i]);
                row._.appendChild(row.col._[i]);
            }
            modal._.appendChild(modal.closeBtn);
            for (let i = 0; i < l; i++) {
                modal.content.slide.hashlink[i].appendChild(modal.content.slide.numtxt[i]);
                modal.content.slide.hashlink[i].appendChild(modal.content.slide.img[i]);
                modal.content.slide._[i].appendChild(modal.content.slide.hashlink[i]);
                modal.content._.appendChild(modal.content.slide._[i]);
            }
            for (let i = 0; i < 2; i++) {
                modal.content._.appendChild(modal.content.arrowBtn[i]);
            }
            modal.content.capCtr._.appendChild(modal.content.capCtr.capTxt);
            modal.content._.appendChild(modal.content.capCtr._);
            modal._.appendChild(modal.content._);
            app.appendChild(row._);
            app.appendChild(modal._);
            for (let i = 0; i < this.l; i++) {
                if (location.hash === `#${o.id[i]}`) {
                    this.open();
                    this.setSlide(i);
                }
            }
        });
    }
    open() {
        modal._.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    close() {
        modal._.style.display = "none";
        location.href = "#";
        document.body.style.overflow = "auto";
    }
    showSlides(n) {
        if (n > row.col._.length) {
            this.i = 0;
        }
        if (n < 0) {
            this.i = modal.content.slide._.length;
        }
        for (const i of modal.content.slide._) {
            i.style.display = "none";
            i.title = "Ctrl+C to copy link to this slide so you can share with your friends!";
        }
        modal.content.slide._[this.i].style.display = "block";
        this.updateCaption();
    }
    updateCaption() {
        if (this.d !== undefined) {
            this.showDesigns();
        }
        else if (this.id && this.o.name !== undefined) {
            modal.content.capCtr.capTxt.innerHTML = `${this.o.name[this.i]} - ${this.id}`;
        }
        else if (this.o.name !== undefined) {
            modal.content.capCtr.capTxt.innerHTML = this.o.name[this.i];
        }
        else {
            console.error(errStr);
        }
    }
    showDesigns() {
        if (this.d !== undefined) {
            if (useOriginalName == "1") {
                modal.content.capCtr.capTxt.innerHTML = `${this.d.name2[this.i]} - MO-${this.d.id[this.i]}`;
                [ogname0.checked, ogname1.checked] = [false, true];
                console.log("Using original names:", ogname1.checked);
            }
            else {
                modal.content.capCtr.capTxt.innerHTML = `${this.d.name[this.i]} - MO-${this.d.id[this.i]}`;
                [ogname0.checked, ogname1.checked] = [true, false];
                console.log("Using original names:", ogname1.checked);
            }
        }
        else {
            console.error(errStr);
        }
    }
    plusSlides(n) {
        this.showSlides(this.i += n);
        location.hash = this.o.id[this.i];
    }
    setSlide(n) {
        this.showSlides(this.i = n);
        location.hash = this.o.id[this.i];
    }
    constructI(obj) {
        for (let i = 0; i < this.l; i++) {
            row.col.img[i].src = modal.content.slide.img[i].src = `${coreData._pre + obj.img[i]}-${coreData._gameid + coreData._ext}`;
        }
        this.showSlides(this.i);
        console.group("Created Modal Construct I with parameters:");
        console.log("l:", this.l, "obj:", obj);
        console.groupEnd();
    }
    constructII(obj, dir) {
        for (let i = 0; i < this.l; i++) {
            row.col.img[i].src = modal.content.slide.img[i].src = `${dir}MO-${obj.id[i]}.jpg`;
        }
        this.showSlides(this.i);
        console.group("Created Modal Construct II with parameters:");
        console.log("l:", this.l, "obj:", obj, "dir:", dir);
        console.groupEnd();
    }
    constructIII(obj, dir) {
        for (let i = 0; i < this.l; i++) {
            row.col.img[i].src = modal.content.slide.img[i].src = `${dir + obj.img[i]}.png`;
        }
        this.showSlides(this.i);
        console.group("Created Modal Construct III with parameters:");
        console.log("l:", this.l, "obj:", obj, "dir:", dir);
        console.groupEnd();
    }
}
//# sourceMappingURL=modal.js.map