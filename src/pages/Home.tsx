import { useContext } from "react";
import { IssueCard } from "../components/IssueCard";
import { IssueCardGridContainer } from "../components/IssueCard/style";
import { Profile } from "../components/Profile";
import { SearchForm } from "../components/SearchForm";
import { GithubIssuesContext } from "../contexts/GithubIssuesContext";

export function Home() {
	const { githubIssues } = useContext(GithubIssuesContext);
	const hasGithubIssues = !!githubIssues;
	const githubIssuesLength = hasGithubIssues && githubIssues.items.length;

	return (
		<>
			<Profile /> <SearchForm countIssues={githubIssuesLength} />
			<IssueCardGridContainer>
				{hasGithubIssues &&
					githubIssues.items.map((item) => (
						<IssueCard key={item.id} item={item} />
					))}
			</IssueCardGridContainer>
		</>
	);
}
