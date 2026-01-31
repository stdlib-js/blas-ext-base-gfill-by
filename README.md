<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gfillBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array according to a provided callback function.



<section class="usage">

## Usage

To use in Observable,

```javascript
gfillBy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gfillBy = require( 'path/to/vendor/umd/blas-ext-base-gfill-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gfillBy;
})();
</script>
```

#### gfillBy( N, x, strideX, clbk\[, thisArg] )

Fills a strided array according to a provided callback function.

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy( x.length, x, 1, fill );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input array.
-   **strideX**: stride length.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The callback function is provided the following arguments:

-   **value**: current array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: the input array.

To set the callback execution context, provide a `thisArg`.

```javascript
function fill( v, i ) {
    this.count += 1;
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var context = {
    'count': 0
};

gfillBy( x.length, x, 1, fill, context );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]

var cnt = context.count;
// returns 8
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy( 4, x, 2, fill );
// x => [ 0.0, 1.0, 3.0, -5.0, 8.0, 0.0, -3.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function fill( v, i ) {
    return v * i;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
gfillBy( 3, x1, 2, fill );
// x0 => <Float64Array>[ 1.0, 0.0, 3.0, -4.0, 5.0, -12.0 ]
```

#### gfillBy.ndarray( N, x, strideX, offsetX, clbk\[, thisArg] )

Fills a strided array according to a provided callback function and using alternative indexing semantics.

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy.ndarray( x.length, x, 1, 0, fill );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gfillBy.ndarray( 3, x, 1, x.length-3, fill );
// x => [ 1.0, -2.0, 3.0, 0.0, 5.0, -12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-complex64`][@stdlib/array/complex64]).
-   When filling a strided array with a scalar constant, prefer using [`dfill`][@stdlib/blas/ext/base/dfill], [`sfill`][@stdlib/blas/ext/base/sfill], and/or [`gfill`][@stdlib/blas/ext/base/gfill], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var Float64Array = require( '@stdlib/array-float64' );
var gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );

var x = new Float64Array( 10 );
console.log( x );

gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gfill-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gfill-by

[test-image]: https://github.com/stdlib-js/blas-ext-base-gfill-by/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gfill-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gfill-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gfill-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gfill-by/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gfill-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gfill-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gfill-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gfill-by/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/umd

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/umd

<!-- <related-links> -->

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
