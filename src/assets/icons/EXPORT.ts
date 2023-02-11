import { SVGProps } from "react"

export interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string
  width: string
  height?: string
}

export { default as ArrowIcon } from "./ArrowIcon"
export { default as KebabMenuIcon } from "./KebabMenuIcon"
export { default as PaperClipIcon } from "./PaperClipIcon"
export { default as SearchIcon } from "./SearchIcon"
export { default as NextIcon } from "./NextIcon"
export { default as LoadingIcon } from "./LoadingIcon"
