// function getFullName(this: { name: string, age?: number }) {
//     return `${this.name} - ${this.age}`
// }
//
// let account = {
//     getFullName
// }
//
// account.getFullName();
type CB = (this: UIElement, e: Event) => void

class UIElement {
    addClickListener(_onclick: CB): void {

    }
}

class Handler {
    info: string;

    onClickBad(this: this, _e: Event): this {
        this.info = `e.message`;
        return this;
    }
}

let h = new Handler();
let el = new UIElement();
el.addClickListener(h.onClickBad.bind(h))
