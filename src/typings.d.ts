import { PrdurenTheme } from "./components/styles/Theme";
interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "rehype-react" {
  interface RehypeOptions {
    createElement: any;
    components: any;
  }
  class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}

declare module "styled-components" {
  export interface ThemeProps<T> {
    theme: T;
  }

  export interface DefaultTheme extends PrdurenTheme {}
}
declare module "react" {
  interface Attributes {
    css?: any;
  }
}
