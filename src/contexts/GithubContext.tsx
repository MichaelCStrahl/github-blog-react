import { type ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface GithubContextType {
	user: User | undefined;
	githubIssues: GithubIssues | undefined;
	fetchGithubUser: () => Promise<void>;
	fetchGithubIssues: (query?: string) => Promise<void>;
}

interface GithubProviderProps {
	children: ReactNode;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [githubIssues, setGithubIssues] = useState<GithubIssues | undefined>(
		undefined,
	);

	const fetchGithubUser = useCallback(async () => {
		const response = await api.get("/users/MichaelCStrahl");

		setUser(response.data);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchGithubUser();
	}, []);

	const fetchGithubIssues = useCallback(async (query?: string) => {
		const defaultParam = "repo:MichaelCStrahl/github-blog-react";
		const queryParam = query ? `${query} ${defaultParam}` : defaultParam;

		const response = await api.get("/search/issues", {
			params: {
				q: queryParam,
			},
		});

		setGithubIssues(response.data);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchGithubIssues();
	}, []);

	return (
		<GithubContext.Provider
			value={{ user, githubIssues, fetchGithubUser, fetchGithubIssues }}
		>
			{children}
		</GithubContext.Provider>
	);
}
