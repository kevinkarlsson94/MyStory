export const removeDuplicatesFromArray = <T extends unknown[]>(array: T): unknown[] => (array ? Array.from(new Set(array)) : [])
