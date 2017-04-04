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

  createTemplate() {
    const framgent = document.createDocumentFragment();
    let styles = document.createElement('style');
    styles.innerHTML = `:host {}
    #share-btn {
      min-height: 32px;
      min-width: 32px;
    }
    `;
    const button = document.createElement('button');
    button.id = 'share-btn';
    button.innerHTML = `<slot><svg xmlns="http://www.w3.org/2000/svg" viewBox="75 75 240 240"><defs><style>.cls-2{fill:#1da1f2;}</style></defs><path d="M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.5 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.6-53.6 51.3 51.3 0 0 0 16 68.5A51 51 0 0 1 85 170v.5a51.3 51.3 0 0 0 41 50.3 51.2 51.2 0 0 1-23 1 51.4 51.4 0 0 0 48 35.5 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.8 145.2 145.2 0 0 0 78.6 23" class="cls-2"/></svg></slot>`;
    framgent.appendChild(styles);
    framgent.appendChild(button);
    
    return framgent;

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
    root.appendChild(this.createTemplate());

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