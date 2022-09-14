export const removeDuplicatesFromArray = <T extends unknown[]>(array: T): unknown[] => Array.from(new Set(array))
