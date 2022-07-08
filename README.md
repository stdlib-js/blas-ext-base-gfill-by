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

# gfillBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array according to a provided callback function.



<section class="usage">

## Usage

```javascript
import gfillBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@esm/index.mjs';
```

#### gfillBy( N, x, stride, clbk\[, thisArg] )

Fills a strided array `x` according to a provided callback function.

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
-   **stride**: index increment.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided four arguments:

-   **value**: array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: input array/collection.

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

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to fill every other element

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var N = floor( x.length / 2 );

gfillBy( N, x, 2, fill );
// x => [ 0.0, 1.0, 3.0, -5.0, 8.0, 0.0, -3.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

function fill( v, i ) {
    return v * i;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Fill every other element...
gfillBy( N, x1, 2, fill );
// x0 => <Float64Array>[ 1.0, 0.0, 3.0, -4.0, 5.0, -12.0 ]
```

#### gfillBy.ndarray( N, x, stride, offset, clbk\[, thisArg] )

Fills a strided array `x` according to a provided callback function and using alternative indexing semantics.

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy.ndarray( x.length, x, 1, 0, fill );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

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
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
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
<script type="module">

import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import gfillBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@esm/index.mjs';

function fill() {
    var rand = round( randu()*100.0 );
    var sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    return sign * rand;
}

var x = new Float64Array( 10 );
console.log( x );

gfillBy( x.length, x, 1, fill );
console.log( x );

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

-   <span class="package-name">[`@stdlib/blas/ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gfill-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gfill-by

[test-image]: https://github.com/stdlib-js/blas-ext-base-gfill-by/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gfill-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gfill-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gfill-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gfill-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gfill-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gfill-by/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/esm

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/esm

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/esm

<!-- <related-links> -->

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
