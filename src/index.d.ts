declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
declare module "*.gif"

declare interface Window {
  Intercom?: (...args: any) => void
}
