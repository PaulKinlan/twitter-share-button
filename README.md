# Twitter Share Button

The Twitter Share Button web component provides a simple and customizable
interface for sharing URLs directly to Twitter.

* Automatically uses the URL, title and description of the page when present
* Allows you to override the URL and text to share to Twitter.
* Allows you to configure the display with your own text and icons.
* When combined with `<share-button>` element, it will automatically bind to the
  data from it's host component and be embedded in the share control.

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button></twitter-share-button>
```

## Customize the UI

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button>Twitter Button</twitter-share-button>
```

## Add an image

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button href="https://test.com"><img src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_share_black_24px.svg"></twitter-share-button>
```

## Customize the URL to share
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button href="https://test.com"></twitter-share-button>
```

## Customize the text to share

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button text="Testing attribute">Attribute Text Test</twitter-share-button>
```


## The full 9 yards
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="twitter-share-button.html">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="twitter-share-button.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<twitter-share-button href="https://test.com" text="Testing URL attribute">Attribute and URL Test</twitter-share-button>
```