import _Chest from "./Chest";
import { Cooldown as _Cooldown } from "./Cooldown";
import { AnyObject, UuidOptions } from "./typing";

export const MONEY = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
export const Cooldown = _Cooldown;
export const Chest = _Chest;

/**
 * Get random element from array;
 * 
 * @param {any[]} array any array
 * @returns {any}
 * 
 * @example
 * randomItem(["name1", "name2", 2]); // "name1"
 */
export function randomItem<T extends any>(array: T[]): T;
/**
 * Get random elements from array;
 * 
 * @param {any[]} array any array
 * @param {number} limit limit of elements, get 2 or more elements
 * @returns {any[]}
 * 
 * @example
 * randomItem(["name1", "name2", 2, 3, "name3"], 3); // ["name2", 2, "name2"]
 */
export function randomItem<T extends any>(array: T[], limit: number): T[];
/**
 * Get random elements from array;
 * 
 * @param {any[]} array any array
 * @param {number} limit limit of elements, get 2 or more elements
 * @param {true} _unique only unique elements
 * @returns {any[]}
 * 
 * @example
 * randomItem(["name1", "name2", 2, 3, "name3"], 3, true); // ["name2", 2, "name1"]
 */
export function randomItem<T extends any>(array: T[], limit: number, _unique: true): T[];
/**
 * Get random [key, value] from object
 * 
 * @param {AnyObject} object any object
 * @returns {[string, any]} random key with value
 * 
 * @example
 * randomItem({name1: "Dann", name2: "Gago", name3: "Amazon"}); // ["name3", "Amazon"]
 */
export function randomItem<K extends keyof any, V extends any, T extends AnyObject<K, V>>(object: T): [K, V];
/**
 * Get random [key, value] from object
 * 
 * @param {AnyObject} object any object
 * @param {number} limit limit of properties, get 2 or more properties
 * @returns {[string, any]} random key with value
 * 
 * @example
 * randomItem({name1: "Dann", name2: "Gago", name3: "Amazon"}, 2); // [["name3", "Amazon"], ["name1", "Dann"]]
 */
export function randomItem<K extends keyof any, V extends any, T extends AnyObject<K, V>>(object: T, limit: number): [K, V][];
export function randomItem<K extends keyof any, V extends any, T extends AnyObject<K, V> | any[]>(items: T, limit?: number, _unique?: true): [K, V][] | [K, V] | T | T[] {
    let array = Array.isArray(items) ? items : Object.entries(items);
    if (limit && limit > 1) {
        let toSend = [];
        if (_unique) array = unique(array);
        if (limit >= array.length) return array as any;
        while (limit > toSend.length) {
            let item = array[Math.floor(Math.random() * array.length)];
            while (_unique && toSend.includes(item)) item = array[Math.floor(Math.random() * array.length)];
            toSend.push(item);
        }
        return toSend;
    } else {
        return array[Math.floor(Math.random() * array.length)]
    }
}

/**
 * Remove duplicates from array
 * 
 * @param {any[]} items any array
 * @returns {any[]} new array
 * 
 * @example
 * unique([1, 2, 2, 3, 4]); // [1, 2, 3, 4]
 */
export function unique<T extends any[]>(items: T): T {
    return [...new Set(items)] as any;
}

/**
 * Wheter the values are equal to main value
 * 
 * @param {any} primary main value
 * @param {any} secondaries other values
 * @returns {boolean} true if equals
 * 
 * @example
 * equal(1, 1); // true
 * equal(1, "1"); // false
 * equal(1, 1, 2, 1); // false
 */
export function equal<T extends any>(primary: T, ...secondaries: T[]): boolean
/**
 * Wheter the arrays are the same 
 * 
 * @param {any[]} primary main array to check with
 * @param {any[]} secondaries other arrays
 * @returns {boolean} true if equals
 * 
 * @example
 * equal([1, 2], [1, 2], [1, 2]); // true
 * equal([1, 2], [2, 1]); // false
 */
export function equal<T extends any[]>(primary: T, ...secondaries: T[]): boolean
/**
 * Wheter the object are equal to main object
 * 
 * @param {AnyObject} primary main object
 * @param {AnyObject} secondaries other objects
 * 
 * @example
 * equal({name: "Vardan"}, {"name": "Vardan"}); // true
 * equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}); // true
 * equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}, {name: "Diana", age: 18}); // false
 */
export function equal<K extends keyof any, V extends any, T extends AnyObject<K, V>>(primary: T, ...secondaries: T[]): boolean
export function equal<K extends keyof any, V extends any, T extends AnyObject<K, V> | any[]>(primary: T, ...secondaries: T[]): boolean {
    if (Array.isArray(primary)) {
        return (secondaries as any[][]).every(array => array.every((item, index) => primary[index] === item));
    } else if (typeof primary === "object") {
        let boolean = true;
        for (let key in primary) {
            if (!secondaries.every(obj => obj[key] === primary[key])) {
                boolean = false;
                break;
            }
        }
        return boolean;
    } else {
        return secondaries.every(any => any === primary);
    }
}

/**
 * Get random number between min and max value
 * 
 * @param {number} min min number
 * @param {number} max max number
 * @returns {number}
 * 
 * @example
 * randomNumber(1, 20); // 13
 */
export function randomNumber(min: number, max: number): number;
/**
 * Get random number between min and max value
 * 
 * @param {number} min min number
 * @param {number} max max number
 * @param {true} dontRound wheter you need float number
 * @returns {number}
 * 
 * @example
 * randomNumber(1, 10, true); // 3.2317609836...
 */
export function randomNumber(min: number, max: number, dontRound: true): number;
export function randomNumber(min: number, max: number, dontRound?: true): number {
    return dontRound ? Math.random() * (max - min) + min : Math.round(Math.random() * (max - min) + min);
}

/**
 * Slices the text and adds "..." at the end of the text
 * @param {string} text Any string
 * @param {number} length maximum (total) length you need
 * @returns {string}
 * 
 * @example
 * shortenText("Give me your love and I'll give you my sunshine", 10); // "Give me .."
 */
export function shortenText(text: string, length: number): string {
    return length >= text.length ? text : text.slice(0, length - 2) + ".."
}

/**
 * Converts the number to currency format, like 1400 --> 1.4k
 * @param number Any number
 * @returns a new string-number
 * 
 * @example
 * currencyFormat(1437); // 1.4k
 * currencyFormat(3133917); // 3.1M
 */
export function currencyFormat(number: number): string {
    const ranking = Math.log10(number) / 3 | 0;
    if (!ranking) return number.toString();
    const last = MONEY[ranking];
    const scale = Math.pow(10, ranking * 3);
    const scaled = number / scale;
    return `${scaled.toFixed(2)}${last}`;
}

/**
 * Formats the number style, like 411611 --> 411,611 or 411 611 
 * @param {number} number Any number, may be "100"
 * @returns a new string-number
 * 
 * @example
 * formatNumber(12345679); // 123,456,789
 */
export function formatNumber(number: number | string): string
/**
 * Formats the number style, like 411611 --> 411,611 or 411 611 
 * @param {number} number Any number, may be "100"
 * @param {string} locale A locale string, en-us, ru-ru, etc
 * @returns a new string-number
 * 
 * @example
 * formatNumber(123456789, "en-us"); // 123,456,789
 * formatNumber(123456789, "ru-ru"); // 123 456,789
 * formatNumber(123456789, "ar-EG"); // ١٢٣٤٥٦٫٧٨٩
 */
export function formatNumber(number: number | string, locale: string): string
export function formatNumber(number: number | string, locale: string = "en-us"): string {
    return Number.parseFloat("" + number).toLocaleString(locale);
}

/**
 * Remove element with spec. index
 * 
 * @param {any[]} array Any array
 * @param {`#${number}`} index string-index of element ex. "#4"
 * @returns {any[]}
 * 
 * @example
 * removeFromArray([1, 2, 3, 4], "#2"); // [1, 2, 4];
 */
export function removeFromArray<T>(array: T[], index: `#${number}`): T[];
/**
 * Remove element with spec. value
 * 
 * @param {any[]} array Any array
 * @param {any} element all elements with this value will be removed 
 * @returns {any[]}
 * 
 * @example
 * removeFromArray(["Dann", "Gago", "Meri", "Gago"], "Gago"); // ["Dann", "Meri"]
 */
export function removeFromArray<T>(array: T[], element: T): T[];
export function removeFromArray<T>(array: T[], element: `#${number}` | T): T[] {
    if (typeof element === "string" && element.startsWith("#")) {
        return array.filter((a, i) => i !== +element.slice(1));
    } else {
        return array.filter((a, i) => !equal(element, a));
    }
};

/**
 * Remove multiple elements from array
 * 
 * @param {any[]} array 
 * @param {{indexes: number[]}} filter remove all elements with these indexes
 * 
 * @example
 * removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {indexes: [1, 3]}); // ["Dann", "Meri"]
 */
export function removeFromArrayExtended<T>(array: T[], filter: { indexes: number[] }): T[];
/**
 * Remove multiple elements from array
 * 
 * @param {any[]} array 
 * @param {{elements: any[]}} filter remove all elements with these values
 * 
 * @example
 * removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann", "Meri"]}); // ["Gago", "Gago"]
 */
export function removeFromArrayExtended<T>(array: T[], filter: { elements: T[] }): T[];
/**
 * Remove elements from array with multiple ways
 * 
 * @param {any[]} array 
 * @param {{elements: any[], indexes: number[]}} filter remove all elements with these values and spec. indexes
 * 
 * @example
 * removeFromArrayExtended(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann"], indexes: [3]}); // ["Gago", "Meri"]
 */
export function removeFromArrayExtended<T>(array: T[], filter: { elements: T[], indexes: number[] }): T[];
export function removeFromArrayExtended<T>(array: T[], filter: { elements?: T[], indexes?: number[] }): T[] {
    const { indexes, elements } = filter;
    let toSend = [];
    if (indexes && indexes.length > 0) {
        toSend = array.filter((a, i) => !indexes.includes(i));
    }

    if (elements && elements.length > 0) {
        toSend = (toSend.length === 0 ? array : toSend).filter(a => !elements.some(el => equal(el, a)));
    };
    return toSend;
}

/**
 * Create unique id
 * 
 * @param {number} length length of unique string
 * @returns {string}
 * 
 * @example
 * uuid(10); // "d12Lc01dsL"
 */
export function uuid(length: number): string;
/**
 * Create unique id
 * 
 * @param {number} length length of unique string
 * @param {UuidOptions} options options
 * @returns {string}
 * 
 * @example
 * uuid(10, {only: "<>?"}); // "<<>?><<>?>"
 * uuid(10, {letters: "only"}); // "skFqlcPOcH"
 * uuid(10, {letters: "only", letterType: "lowercase"}); // "skdxchqkpo", default "both"
 * uuid(10, {numbers: "only"}); // "3789123752"
 * uuid(10, {letters: "only", aditional: "@#$"}); // "FDj$dx@A#x"
 */
export function uuid(length: number, options: UuidOptions): string;
export function uuid(length: number, options: UuidOptions = {}): string {
    if (!length || length < 1) return "";
    if (!options) options = {};
    if (!options.letterType) options.letterType = "both";
    let symbols = "";
    if (!options.only) {
        if (options.numbers !== false && options.letters !== "only") symbols += "0123456789";
        if (options.letters !== false && options.numbers !== "only") symbols += "abcdefghijklmnopqrstuvwxyz";
        if (options.aditional) symbols += options.aditional;
    } else symbols = options.only;
    if (!symbols) return "";
    let id = "";
    for (let i = 0; i < length; i++) {
        const symb = randomItem(symbols.split(""));
        switch (options.letterType) {
            case "lowercase":
                id += symb.toLowerCase();
                break;

            case "uppercase":
                id += symb.toUpperCase();
                break;

            default:
                id += randomNumber(0, 100) <= 50 ? symb.toLowerCase() : symb.toUpperCase();
                break;
        }
    }
    return id;
}

/**
 * Calculate sum. of numbers in array with math operations
 * 
 * @param {number[]} numbers any array of numbers
 * @param {"*" | "/" | "+" | "-"} operation 
 * @returns {number} number
 * 
 * @example
 * resultOf([1, 2, 3]); // 6, default "+"
 * resultOf([1, 2, 3], "+"); // 6
 * resultOf([1, 2, 3], "*"); // 6
 * resultOf([1, 2, 3], "-"); // -4
 * resultOf([1, 2, 3], "/"); // 0.1666666666666667
 */
export function resultOf(numbers: number[], operation: "*" | "/" | "+" | "-" = "+"): number {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    let sum: number;
    switch (operation) {
        case "*":
            sum = 1;
            return numbers.reduce((s, number) => s * number, sum);

        case "-":
            sum = numbers[0];
            return numbers.reduce((s, number, i) => s - (i === 0 ? 0 : number), sum);

        case "/":
            sum = numbers[0];
            return numbers.reduce((s, number, i) => s / (i === 0 ? 1 : number), sum);

        default:
            sum = 0;
            return numbers.reduce((s, number) => s + number, sum);
    }

}

/**
 * Reverse string
 * 
 * @param {string} text any string
 * @returns {string} reversed text
 * 
 * @example
 * reverseString("Hello everyone!"); // "!enoyreve olleH"
 */
export function reverseString(text: string): string {
    return (text || "").split("").reverse().join("");
}


/**
 * Memoize a function
 * Make your function faster by caching parameters
 * 
 * @param {CallableFunction} fn any function (MUST RETURN SOMETHING)
 * @returns given function
 * 
 * @example
 * memoize((array1, array2) => array1.every(value => array2.includes(value)));
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T;
/**
 * Memoize a function
 * Make your function faster by caching parameters
 * 
 * @param {CallableFunction} fn any function (MUST RETURN SOMETHING)
 * @param {(prevArgs: any[], nextArgs: any[]) => boolean} doIf check values yourself and cache whenever you want, true - save cache
 * @returns given function
 * 
 * @example
 * memoize((array1, array2) => array1.every(value => array2.includes(value)), (prevArgs, nextArgs) => {
 *    if (prevArgs[0][0] !== nextArgs[0][0])
 *       return false;
 * 
 *    return true;
 * });
 */
export function memoize<T extends (...args: any[]) => any>(fn: T, doIf: (prevArgs: Parameters<T>, nextArgs: Parameters<T>) => boolean): T;
export function memoize<T extends (...args: any[]) => any>(fn: T, doIf?: (prevArgs: Parameters<T>, nextArgs: Parameters<T>) => boolean): T {
    const cache = {} as { [k: string]: { return: any, args: Parameters<T> } };
    return function (...args: Parameters<T>) {
        const key = args.toString()
        const cached = cache[key];
        if (cached) {
            if (doIf) {
                if (doIf(cached.args, args)) {
                    return cached.return
                }
            } else {
                return cached.return;
            }
        }
        cache[key] = {
            args: args,
            return: fn(...args)
        };
        return cache[key].return;
    } as T;
}

/**
 * Generate array of numbers between range (0, end]
 * 
 * @param {number} end  from 1 to end
 * @returns {number[]}
 * 
 * @example
 * numberArray(5); // [1, 2, 3, 4, 5]
 */
export function numberArray(end: number): number[];
/**
 * Generate array of numbers between range (start, end]
 * 
 * @param {number} start start of range
 * @param {number} end end of range
 * @returns {number[]}
 * 
 * @example
 * numberArray(5, 10); // [6, 7, 8, 9, 10]
 */
export function numberArray(start: number, end: number): number[];
export function numberArray(arg1: number, arg2?: number): number[] {
    let start: number = arg1,
        end: number = arg2;

    if (arg2 === undefined) {
        start = 0;
        end = arg1;
    }

    return Array.from({ length: end - start }, (_, i) => i + 1 + start);
}
