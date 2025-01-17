# Anytool, a staticly collection of useful methods and classes!

> npm install anytool

## Basic Usage
```javascript
import * as Anytool from "anytool"; // es6 syntax
// const Anytool = require("anytool"); // common javascript syntax
```

### Or
```javascript
import { randomNumber, unique, } from "anytool"; // es6 syntax
// const { randomNumber, unique, } = require("anytool"); // common javascript syntax
```

## Methods
<details>
<summary>randomItem</summary>

**randomItem(array, limit, unique)**

| argument |      type       | optional |                                 description                                  | default |
| :------- | :-------------: | :------: | :--------------------------------------------------------------------------: | :-----: |
| array    | Array \| Object |          |                                  Any array                                   |
| limit    |     Number      |   yes    | Limit of randomly picked items, will return array of items, wheter specified |
| unique   |     Boolean     |   yes    |                Array of randomly picked items must be unique                 |         |

### Examples
```js
randomItem([1, 2, 3, 4]); // 3
randomItem([1, 2, 3, 4], 2); // [2, 3], might be [2, 2]
randomItem([1, 2, 3, 4], 2, true); // [2, 1]
randomItem({name1: "Dann", name2: "Not Dann", name3: "Always Dann"}); // ["name2", "Not Dann"], [key, value]
randomItem({name1: "Dann", name2: "Not Dann", name3: "Always Dann"}, 2); // [["name3", "Always Dann"], ["name2", "Not Dann"]]
```
</details>

<details>
<summary>unique</summary>

**unique(array)**

| argument | type  | optional | description | default |
| :------- | :---: | :------: | :---------: | :-----: |
| array    | Array |          |  Any Array  |

### Examples
```js
unique([1, 2, 3, 3, 4, 5, 5, 6]); // [1, 2, 3, 4, 5, 6]
```
</details>

</details>

<details>
<summary>equal</summary>

**equal(primary, secondary1, secondary2, ..., secondaryN)**

| argument  | type  | optional |            description             | default |
| :-------- | :---: | :------: | :--------------------------------: | :-----: |
| primary   |  any  |          |      Any Value to check with       |
| secondary |  any  |          | Values to check with primary value |

### Examples
```js
equal(1, 1); // true
equal(1, "1"); // 
equal(1, 1, 2, 1); // 
equal([1, 2], [1, 2], [1, 2]); // true
equal([1, 2], [2, 1]); // 
equal({name: "Vardan"}, {"name": "Vardan"}); // true
equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}); // true
equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}, {name: "Diana", age: 18}); // 
```
</details>

<details>
<summary>randomNumber</summary>

**randomNumber(min, max, dontRound)**

| argument  |  type   | optional |                description                | default |
| :-------- | :-----: | :------: | :---------------------------------------: | :-----: |
| min       | Number  |          |          Minumum value of range           |
| max       | Number  |          |          Maximum value of range           |
| dontRound | Boolean |   yes    | Wheter the respone must be a float number |         |

### Examples
```js
randomNumber(1, 20); // **13**
randomNumber(1, 10, true); // 3.2317609836...
```
</details>

<details>
<summary>shortenText</summary>

**shortenText(text)**

| argument |  type  | optional | description | default |
| :------- | :----: | :------: | :---------: | :-----: |
| text     | String |          |  Any Text   |


### Examples
```js
shortenText("Give me your love and I'll give you my sunshine", 10); // "Give me .."
```
</details>

<details>
<summary>currencyFormat</summary>

**currencyFormat(number)**

| argument |  type  | optional | description | default |
| :------- | :----: | :------: | :---------: | :-----: |
| number   | Number |          | Any number  |


### Examples
```js
currencyFormat(1437); // 1.4k
currencyFormat(3133917); // 3.1M
```
</details>

<details>
<summary>formatNumber</summary>

**formatNumber(number, locale)**

| argument |                                                                   type                                                                   | optional |    description    | default |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------: | :------: | :---------------: | :-----: |
| number   |                                                                  Number                                                                  |          |    Any number     |
| locale   | [Locale String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) |   yes    | Locale of country |  en-us  |


### Examples
```js
formatNumber(12345679); // 123,456,789
formatNumber(123456789, "ru-ru"); // 123 456,789
formatNumber(123456789, "ar-EG"); // ١٢٣٤٥٦٫٧٨٩
```
</details>

<details>
<summary>removeFromArray</summary>

**removeFromArray(array, filter)**

| argument |      type       | optional |                 description                  | default |
| :------- | :-------------: | :------: | :------------------------------------------: | :-----: |
| array    |      Array      |          |                  Any Array                   |
| filter   | any \| `#Index` |          | Element of array or index (formant `#Index`) |

### Examples
```js
removeFromArray([1, 2, 3, 4], "#2"); // [1, 2, 4];
removeFromArray(["Dann", "Gago", "Meri", "Gago"], "Gago"); // ["Dann", "Meri"]
```
</details>

<details>
<summary>removeFromArrayExtended</summary>

**removeFromArrayExtended(array, filter)**

| argument |                               type                                | optional |                 description                  | default |
| :------- | :---------------------------------------------------------------: | :------: | :------------------------------------------: | :-----: |
| array    |                               Array                               |          |                  Any Array                   |
| filter   | [RemoveFromArrayExtendedOptions](#RemoveFromArrayExtendedOptions) |          | Element of array or index (formant `#Index`) |

### Examples
```js
removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {indexes: [1, 3]}); // ["Dann", "Meri"]
removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann", "Meri"]}); // ["Gago", "Gago"]
removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann"], indexes: [3]}); // ["Gago", "Meri"]
```
</details>

<details>
<summary>uuid</summary>

**uuid(length, options)**

| argument |            type             | optional |     description     | default |
| :------- | :-------------------------: | :------: | :-----------------: | :-----: |
| length   |           Number            |          | Length of unique id |
| options  | [UuidOptions](#UuidOptions) |   yes    |   Type and Style    |

### Examples
```js
uuid(10); // "d12Lc01dsL"
uuid(10, {only: "<>?"}); // "<<>?><<>?>"
uuid(10, {letters: "only"}); // "skFqlcPOcH"
uuid(10, {letters: "only", letterType: "lowercase"}); // "skdxchqkpo", default "both"
uuid(10, {numbers: "only"}); // "3789123752"
uuid(10, {letters: "only", aditional: "@#$"}); // "FDj$dx@A#x"
```
</details>

<details>
<summary>resultOf</summary>

**resultOf(numbers, operation)**

| argument  |           type           | optional | description | default |
| :-------- | :----------------------: | :------: | :---------: | :-----: |
| numbers   |         Number[]         |          | Any Numbers |
| operation | "*" \| "/" \| "+" \| "-" |   yes    |  Operation  |   "+"   |

### Examples
```js
resultOf([1, 2, 3]); // 6, default "+"
resultOf([1, 2, 3], "+"); // 6
resultOf([1, 2, 3], "*"); // 6
resultOf([1, 2, 3], "-"); // -4
resultOf([1, 2, 3], "/"); // 0.1666666666666667
```
</details>

</details>

<details>
<summary>reverseString</summary>

**reverseString(text)**

| argument |  type  | optional | description | default |
| :------- | :----: | :------: | :---------: | :-----: |
| text     | String |          |  Any text   |

### Examples
```js
reverseString("Hello everyone!"); // "!enoyreve olleH"
```
</details>

<details>
<summary>memoize</summary>

**memoize(fn, doIf)**

| argument |            type            | optional |                    description                    | default |
| :------- | :------------------------: | :------: | :-----------------------------------------------: | :-----: |
| fn       |          Function          |          |                   Any Function                    |
| doIf     | Function (returns boolean) |   yes    | Do filtering function when cached value was found |

### Examples
```js
memoize((array1, array2) => array1.every(value => array2.includes(value)));
memoize((array1, array2) => array1.every(value => array2.includes(value)), (prevArgs, nextArgs) => {
   if (prevArgs[0][0] !== nextArgs[0][0])
      return false;

   return true;
});
```
</details>

<details>
<summary>numberArray</summary>

**numberArray(start, end)**

| argument |  type  | optional |  description   | default |
| :------- | :----: | :------: | :------------: | :-----: |
| start    | Number |          | Start of range |    0    |
| end      | Number |   yes    | End of a range |  start  |

### Examples
```js
numberArray(5); // [1, 2, 3, 4, 5]
numberArray(5, 10); // [6, 7, 8, 9, 10]
```
</details>

## Classes

<details>
<summary>Chest</summary>

**[See File](src/Chest.ts)**

Extended **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)** for holding values
**new Chest()**

### Usage examples

#### JavaScript

```js
const ages = new Chest();

ages.set("Dann", 18);
```

#### TypeScript

```ts
const ages = new Chest<string, number>();

ages.set("Dann", 18);

ages.set("Gago", "18"); // error
```

#### Some methods

```js
ages.first(); // first value
ages.random(); // random value
ages.delete("Dann"); // delete item
ages.setMany(age => age < 18, 18); // Setting new values after filtering
ages.has("Dann"); // Wheter there is item with spec. key
ages.hasAll("Dann", "Gago"); // Wheter there are all spec. keys
ages.hasAny("Dann", "Gago"); // Wheter there is at least one key of spec keys
```
</details>

<details>
<summary>Cooldown</summary>

**[See File](src/Cooldown.ts)**

Simple Cooldown system
**new Cooldown(time)**

| argument |  type  | optional |          description          | default |
| :------- | :----: | :------: | :---------------------------: | :-----: |
| time     | Number |          | Cooldown time in milliseconds |


### Examples
```js
const commandLimiter = new Cooldown(5000);

console.log(commandLimiter.isLimited(anyUser.id))
```
</details>

## Types

<details>

<summary id="RemoveFromArrayExtendedOptions">RemoveFromArrayExtendedOptions</summary>


|   key    | valueType |                 description                  |
| :------: | :-------: | :------------------------------------------: |
| indexes  | Number[]  |    Array of element indexes to be removed    |
| elements |   any[]   | Elements that, when matched, will be removed |

</details>

<details>

<summary id="UuidOptions">UuidOptions</summary>


|    key     |              valueType               |                        description                         |  example   |
| :--------: | :----------------------------------: | :--------------------------------------------------------: | :--------: |
|    only    |                String                |                 Use only these characteres                 | dj*24_cx@" |
|  numbers   |           "only" \| false            |    Use only numbers 0-9 or false for disabling numbers     |   "only    |
|  letters   |           "only" \| false            | Use only letters a-z or A-Z or false for disabling letters |   "only    |
| aditional  |                String                |                   Use aditional symbols                    |  "_^&?>"   |
| letterType | "uppercase" \| "lowercase" \| "both" |              Letter type (default is "both")               | "lowercase |

</details>