
function $(dom) {
  return document.querySelector(dom);
}

let app = {
  init() {
    this.bindEvent();
  },
  bindEvent() {
    this.toggleNav();
  },
  toggleNav() {
    let domList = $('.nav-list');
    let domLi = domList.children;
    Array.from(domLi).forEach(li => {
      li.addEventListener('click', function () {
        Array.from(domLi).forEach(item => {
          item.className = '';
        })
        this.className = 'active';
      })
    })
  }
};

app.init();