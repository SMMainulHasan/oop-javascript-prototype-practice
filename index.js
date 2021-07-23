// //HTML Element
function HtmlElement(element) {
  this.click = () => {
    console.log("Clicked");
  };
}
HtmlElement.prototype.focus = () => {
  console.log("Focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = (item) => items.push(item);
  this.removeItem = (item) => items.splice(this.items.indexOf(item), 1);

  this.render = () => {
    return `<select>
        ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = () => `<img src="${this.src}" />`;
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const se = new HtmlSelectElement();

//==================Making a Stack ================//
const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(obj) {
    _items.get(this).push(obj);
  }
  pop() {
    const item = _items.get(this);

    if (item.length === 0) throw new Error("Stack is empty");
    return item.pop();
  }
  peek() {
    const item = _items.get(this);

    if (item.length === 0) throw new Error("Stack is empty");
    return item[item.length - 1];
  }
  get count() {
    return _items.get(this).length;
  }
}
