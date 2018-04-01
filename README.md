# TrackHelpers
Helpers for track.

[![Build Status](https://travis-ci.org/yosami-framework/track-helpers.svg?branch=master)](https://travis-ci.org/yosami-framework/track-helpers)

## Installation

### npm

```shell
npm install track-helpers
```

## Usage

### ScrollHelper

```javascript
const ScrollHelper = require('track-helpers/lib/scroll_helper');

ScrollHelper.getPos();        // =>  Window scroll position.  `ex) {x: 100, y: 200}`
ScrollHelper.getPos(element); // =>  Element scroll position. `ex) {x: 100, y: 200}`

ScrollHelper.scroll({x: 100, y: 100});             // => Window scroll x=100, y=100
ScrollHelper.scroll({x: 100, y: 100}, 250);        // => Window scroll x=100, y=100 with 250ms animation.
ScrollHelper.scroll({x: 100, y: 100}, 0, element); // => Element scroll x=100, y=100

ScrollHelper.scrollTo(element);              // => Window scroll to Element
ScrollHelper.scrollTo(element, 250);         // => Window scroll to Element with 250ms animation.
ScrollHelper.scrollTo(element, 0, {x: -60}); // => Window scroll to Element with offset (x - 60)
```

### HashHelper

```javascript
const HashHelper = require('track-helpers/lib/hash_helper');

// Fash hash function. (non-cryptographic)
HashHelper.fast('ABCDEFGエヴァけもフレ'); // Return hex hash.
```
