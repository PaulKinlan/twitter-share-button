/* Copyright 2017 Google Inc

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

class TwitterShareButton extends HTMLElement {

  static get observedAttributes() { return ['href', 'text']; }

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

  attributeChangedCallback(attr, oldValue, newValue) {
    // Only the watched attributes will get changed.
    if (oldValue != newValue) {
      this[attr] = newValue;
    }
  }

  constructor() {
    super();

    const root = this.attachShadow({mode:'open'});
    root.appendChild(this.template.content.cloneNode(true));

    root.querySelector('#share-btn').addEventListener('click', e => {
      let parentHref = this.parentElement.href;
      let parentText = this.parentElement.text;
    
      let textValue = parentText || this.text || document.title;
      let urlValue = parentHref || this.href || document.location;
      location.href = `https://twitter.com/intent/tweet/?text=${encodeURIComponent(textValue)}&url=${encodeURIComponent(urlValue)}`;
    });
  }
}

customElements.define('twitter-share-button', TwitterShareButton);