export type SetState<T> = (newVal: T | ((prevVal: T) => T)) => void
export type State<T> = [T, SetState<T>]
