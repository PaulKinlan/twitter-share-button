class QuickShareButton extends HTMLElement {
  constructor() { super(); }

  get text() {
    return this.getAttribute('text');
  }

  set text(val) {
    if(val) {
      this.setAttribute('text', val);
    } else {
      this.removeAttribute('text');
    }
  }

  get href() {
    return this.getAttribute('href');
  }

  set href(val) {
    if(val) {
      this.setAttribute('href', val);
    } else {
      this.removeAttribute('href');
    }
  }

}

class TwitterShareButton extends QuickShareButton {

  get template() {
    if(this._template) return this._template;
    else {
      this._template = document.createElement('template');
      let styles = document.createElement('style');
      styles.innerHTML = `:host {}`;
      let body = document.createElement('div');
      body.innerHTML = `<button id="share-btn"><slot></slot></button>`;
      this._template.content.appendChild(styles);
      this._template.content.appendChild(body);
      
      return this._template;
    }
  }

  constructor() {
    super();
    
    const root = this.attachShadow({mode:'open'});
    root.appendChild(this.template.content.cloneNode(true));

    root.querySelector('#share-btn').addEventListener('click', e => {
      let parentData = this.parentElement.shareData;
    
      let textValue = (parentData && parentData.text) ? parentData.text : (this.text || document.title);
      let urlValue = (parentData && parentData.url) ? parentData.url : this.href;
      location.href = `https://twitter.com/intent/tweet/?text=${encodeURIComponent(textValue)}&url=${encodeURIComponent(urlValue)}`;
    });
  }
}

customElements.define('twitter-share-button', TwitterShareButton);