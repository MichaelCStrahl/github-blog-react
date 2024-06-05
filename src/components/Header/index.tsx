import { Effect, HeaderContainer, Logo } from "./style";

import leftEffect from "../../assets/left-effect.svg";
import logo from "../../assets/logo.svg";
import rightEffect from "../../assets/right-effect.svg";

export function Header() {
	return (
		<HeaderContainer>
			<Effect src={leftEffect} alt="" />
			<Logo src={logo} alt="" />
			<Effect src={rightEffect} alt="" />
		</HeaderContainer>
	);
}
