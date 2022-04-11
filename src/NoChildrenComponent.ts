import { ComponentClass, ComponentState, VFC } from "react"

export type NoChildrenComponent<P = unknown, S = ComponentState> =
  | ComponentClass<P, S>
  | VFC<P>
