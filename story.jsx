/**!
 * ISC License (ISC)
 *
 * Copyright (c) 2018, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import escapeStringRegexp from 'escape-string-regexp';

import Filter from './index.js';



const initialItems = [
  "apple",
  "apricot",
  "banana",
  "blackberry",
  "blueberry",
  "boysenberry",
  "cantaloupe",
  "cherry",
  "clementine",
  "fig",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeydew",
  "huckleberry",
  "kiwi",
  "lemon",
  "lime",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "passion fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon"
];



class _TestComponent extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      filterText: undefined
    };
  }



  render() {
    return (
      <div>
        <div>
          <a href="https://github.com/bsara/react-filter/blob/master/story.jsx">View story source</a>
        </div>
        <br/>
        <div>
          <input type="text" placeholder="Filter..." value={this.state.filterText} onChange={(e) => this.setState({ filterText: e.target.value })} />
        </div>
        <hr/>
        <div>
          <Filter items={initialItems} predicateArg={this.state.filterText} predicate={_predicate} render={(filteredItems) => (
            <React.Fragment key="filtered-items-fragment">
              {filteredItems.map((item) => <div key={item}>{item}</div>)}
            </React.Fragment>
          )} />
        </div>
      </div>
    );
  }
}



storiesOf("react-filter", module)
  .add("Default", () => <_TestComponent />);





function _predicate(item, index, filterText) {
  return (filterText == null || filterText === "" || RegExp(escapeStringRegexp(filterText), 'iu').test(item));
}
