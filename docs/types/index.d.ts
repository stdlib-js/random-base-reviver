/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Revives a JSON-serialized pseudorandom number generator.
*
* @param key - key
* @param value - value
* @returns value or PRNG
*
* @example
* var parseJSON = require( '@stdlib/utils-parse-json' );
* var mt19937 = require( '@stdlib/random-base-mt19937' );
*
* var str = JSON.stringify( mt19937 );
* var rand = parseJSON( str, reviveBasePRNG );
* // returns <Function>
*/
declare function reviveBasePRNG( key: string, value: any ): any;


// EXPORTS //

export = reviveBasePRNG;
