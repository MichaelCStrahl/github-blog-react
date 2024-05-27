import "styled-components";
import type { defaultTheme } from "../styles/themes/default";

type ThemType = typeof defaultTheme;

declare module "styled-components" {
	export interface DefaultTheme extends ThemType {}
}
