import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GithubIssuesProvider } from "./contexts/GithubIssuesContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GithubIssuesProvider>
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</GithubIssuesProvider>
		</ThemeProvider>
	);
}
