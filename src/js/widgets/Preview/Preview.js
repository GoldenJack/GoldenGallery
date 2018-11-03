export default class Preview {
    constructor(el, className='preview'){
        this.el = document.querySelector(el);
        this.className = className;
        this.images = this._imagesArray();

        this._bindEventListener();
    }

    _imagesArray() {
        return this.el.querySelectorAll(this.className);
    }



    _bindEventListener() {
        
    }
}