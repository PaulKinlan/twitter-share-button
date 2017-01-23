# Twitter Share Button

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="my-element.html">
    <link rel="import" href="../other-element/other-element.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<script src="../twitter-share-button.js"></script>

<!-- Element projection -->
<twitter-share-button>Twitter Button</twitter-share-button>
<twitter-share-button href="https://test.com">Share test.com</twitter-share-button>
<!-- Add an image and share test.com-->
<twitter-share-button href="https://test.com"><img src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_share_black_24px.svg"></twitter-share-button>
<twitter-share-button text="Testing attribute">Attribute Text Test</twitter-share-button>
<twitter-share-button href="https://test.com" text="Testing URL attribute">Attribute and URL Test</twitter-share-button>


```