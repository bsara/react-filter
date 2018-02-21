# @bsara/react-filter [![NPM Package](https://img.shields.io/npm/v/@bsara/react-filter.svg?style=flat-square)][npm]

![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)

> A simple React component used for array filtering.

> **NOTE:** This component uses a for-loop for filtering rather than the native
> `Array`'s `filter` function. This means that filtering will be more performant *([see
> jsperf test for details](https://jsperf.com/javascript-filter-vs-loop#results))*.

[Storybook](https://bsara.github.io/react-filter)

[Changelog](https://github.com/bsara/react-filter/blob/master/CHANGELOG.md)



## Install

```bash
$ npm i --save @bsara/react-filter
```


## Usage

```jsx
import React from 'react';
import Filter from '@bsara/react-filter';



export default function MyComponent(props) {
  return (
    {/* ... */}

      <Filter items={props.items} predicate={_predicate} render={(filteredItems) => (
        // Render filtered items...
      )} />

    {/* ... */}
  );
}


function _predicate(item, index, predicateArg) {
  // Determine if item should be included in filtered list...
}
```


## Props

- **items** `?Array`

  Array of items to be filtered and passed to `render` prop.

- **render(filteredItems)** `!Function` - **REQUIRED**

  Render function called after `items` filtering is complete.

- **predicate(item, itemIndex[, predicateArg])** `!Function` - **REQUIRED**

  Function to be called for each item in `items`. Return `true` to include `item` in the
  resulting filtered items list. Return `false` to exclude `item` from the resulting
  filtered items list.

- **predicateArg** `?*`

  Parameter to be passed as an extra argument in `predicate` function. This prop is not
  required and is provided solely for convenience.


<br/>
<br/>


# License

ISC License (ISC)

Copyright (c) 2018, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[license]: https://github.com/bsara/react-filter/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/@bsara/react-filter         "NPM Package: react-filter"
