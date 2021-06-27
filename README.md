<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reviveBasePRNG

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Revive a JSON-serialized pseudorandom number generator (PRNG).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base-reviver
```

</section>

<section class="usage">

## Usage

```javascript
var reviveBasePRNG = require( '@stdlib/random-base-reviver' );
```

#### reviveBasePRNG( key, value )

Revives a JSON-serialized pseudorandom number generator (PRNG).

```javascript
var parseJSON = require( '@stdlib/utils-parse-json' );
var randu = require( '@stdlib/random-base-randu' );

var str = JSON.stringify( randu );

var rand = parseJSON( str, reviveBasePRNG );
// returns <Function>
```

For details on the JSON serialization format, see the `.toJSON()` method for, e.g., [`randu()`][@stdlib/random/base/randu].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var parseJSON = require( '@stdlib/utils-parse-json' );
var reviveBasePRNG = require( '@stdlib/random-base-reviver' );

var rand;
var str;
var r1;
var r2;
var i;

// Progress the PRNG state...
for ( i = 0; i < 100; i++ ) {
    r1 = randu();
}

// Serialize the PRNG as a JSON string:
str = JSON.stringify( randu );

// Revive the JSON-serialized PRNG:
rand = parseJSON( str, reviveBasePRNG );
if ( rand instanceof Error ) {
    console.error( rand.message );
}

// Generate duplicate sequences...
for ( i = 0; i < 100; i++ ) {
    r1 = randu();
    r2 = rand();
    console.log( '%d == %d ? %s', r1, r2, ( r1 === r2 ).toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-reviver.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-reviver

[test-image]: https://github.com/stdlib-js/random-base-reviver/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/random-base-reviver/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-reviver/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-reviver?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-reviver.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-reviver/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-reviver/main/LICENSE

[@stdlib/random/base/randu]: https://github.com/stdlib-js/random-base-randu

</section>

<!-- /.links -->
