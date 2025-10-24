
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}