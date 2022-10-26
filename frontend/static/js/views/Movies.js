import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Movies Page");
    }    

    async getHtml() {
        return '<p>IT FINALLY WORKS!!!!!</p>';
    }
}