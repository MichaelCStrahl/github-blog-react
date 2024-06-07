import { type ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubIssuesContextType {
	githubIssues: GithubIssues | undefined;
}

interface GithubIssuesProviderProps {
	children: ReactNode;
}

export const GithubIssuesContext = createContext({} as GithubIssuesContextType);

export function GithubIssuesProvider({ children }: GithubIssuesProviderProps) {
	const [githubIssues, setGithubIssues] = useState<GithubIssues | undefined>(
		undefined,
	);

	async function loadGithubIssues() {
		const response = await api.get("/search/issues", {
			params: {
				q: "repo:MichaelCStrahl/github-blog-react",
			},
		});

		setGithubIssues(response.data);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadGithubIssues();
	}, []);

	return (
		<GithubIssuesContext.Provider value={{ githubIssues }}>
			{children}
		</GithubIssuesContext.Provider>
	);
}
