export declare type SetState<T> = (newVal: T | ((prevVal: T) => T)) => void;
export declare type State<T> = [T, SetState<T>];
