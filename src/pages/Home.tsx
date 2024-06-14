import { useContextSelector } from "use-context-selector";
import { IssueCard } from "../components/IssueCard";
import { IssueCardGridContainer } from "../components/IssueCard/style";
import { ProfileHeader } from "../components/ProfileHeader";
import { SearchForm } from "../components/SearchForm";
import { GithubContext } from "../contexts/GithubContext";

export function Home() {
	const githubIssues = useContextSelector(GithubContext, (context) => {
		return context.githubIssues;
	});
	const hasGithubIssues = !!githubIssues;
	const githubIssuesLength = hasGithubIssues && githubIssues.items.length;

	return (
		<>
			<ProfileHeader /> <SearchForm countIssues={githubIssuesLength} />
			<IssueCardGridContainer>
				{hasGithubIssues &&
					githubIssues.items.map((item) => (
						<IssueCard key={item.id} item={item} />
					))}
			</IssueCardGridContainer>
		</>
	);
}
