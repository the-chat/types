import { ComponentClass, ComponentState, VFC } from "react"

export type NoChildrenComponent<P = {}, S = ComponentState> =
  | ComponentClass<P, S>
  | VFC<P>
