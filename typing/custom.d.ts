declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.scss" {
  const content: any;
  export default content;
}
declare module "*.gif" {
  const content: any;
  export default content;
}
declare module "*.mp4" {
  const content: any;
  export default content;
}

declare module "*.webm" {
  const content: any;
  export default content;
}

declare function createRef<T>(): RefObject<T>;

declare interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
