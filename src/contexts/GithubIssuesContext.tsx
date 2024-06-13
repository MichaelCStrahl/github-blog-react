import { type ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubIssuesContextType {
	githubIssues: GithubIssues | undefined;
	fetchGithubIssues: (query?: string) => Promise<void>;
}

interface GithubIssuesProviderProps {
	children: ReactNode;
}

export const GithubIssuesContext = createContext({} as GithubIssuesContextType);

export function GithubIssuesProvider({ children }: GithubIssuesProviderProps) {
	const [githubIssues, setGithubIssues] = useState<GithubIssues | undefined>(
		undefined,
	);

	async function fetchGithubIssues(query?: string) {
		const defaultParam = "repo:MichaelCStrahl/github-blog-react";
		const queryParam = query ? `${query} ${defaultParam}` : defaultParam;

		const response = await api.get("/search/issues", {
			params: {
				q: queryParam,
			},
		});

		setGithubIssues(response.data);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchGithubIssues();
	}, []);

	return (
		<GithubIssuesContext.Provider value={{ githubIssues, fetchGithubIssues }}>
			{children}
		</GithubIssuesContext.Provider>
	);
}
