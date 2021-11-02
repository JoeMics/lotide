# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joe-mics/lotide`

**Require it:**

`const _ = require('@joe-mics/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: tests two arrays and logs pass or fail
* `assertEqual(actual, expected)`: tests two primitive values and logs whether actual === expected
* `assertObjectsEqual(actual, expected)`: tests two objects and logs whether actual === expected
* `countLetters(string)`: returns an object representing the amount of instances of a character in the string
* `countOnly(allItems: an array of strings that we need to look through, itemsToCount: an object specifying what to count)`: returns an object representing the amount of instances of an element in allItems. It will only count elements passed into itemsToCount. 
  * itemsToCount example: ```{element: true, element2: false }```
* `eqArrays(arr1, arr2)`: returns true if two arrays are equal, and false if otherwise
* `eqObjects(object1, object2)`: returns true if two objects are equal, and false if otherwise
* `findKey(obj, callback)`: iterates through the object and calls a function on every element. If the callback returns true, it will return the first instance of an element that returns true
  * ex:
    ```
    const data1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
    };

    findKey(data1, x => x.stars === 1) 
    //"Blue Hill"
    ```
* `findKeyByValue(obj, value)`: returns the key of an object that matches the value parameter
* `flatten(arr)`: returns a single array, when given an array of arrays
* `head(arr)`: returns the first element of an array
* `letterPositions(sentence)`: returns an object representing the index of characters in the original characters
* `map(arr, callback)`: returns a new array, with every element being called by the callback function
* `middle(arr)`: returns an array contain the middle element if it is an odd numbered array, or an array containing two middle elements if the array is even numbered
* `tail(arr)`: returns a new array without the first element of the original array
* `takeUntil(array, callback)`: returns a new array with all of the elements until it reaches an element that returns false when called by the callback function
* `without(source, itemsToRemove)`: returns of a copy of an array without the elements passed into ```itemsToRemove```