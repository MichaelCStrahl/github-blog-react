import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GithubProvider } from "./contexts/GithubContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GithubProvider>
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</GithubProvider>
		</ThemeProvider>
	);
}
