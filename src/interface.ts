export interface XqEventChange<T> extends CustomEvent {
  detail: T,
}