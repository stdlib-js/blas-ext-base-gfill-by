/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var Float64Array = require( '@stdlib/array-float64' );
var gfillBy = require( './../lib' );

var x = new Float64Array( 10 );
console.log( x );

gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );
