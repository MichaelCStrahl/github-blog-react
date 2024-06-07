import { useContext } from "react";
import { PostCard } from "../components/PostCard";
import { PostCardGridContainer } from "../components/PostCard/style";
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
			<PostCardGridContainer>
				{hasGithubIssues &&
					githubIssues.items.map((item) => (
						<PostCard key={item.id} item={item} />
					))}
			</PostCardGridContainer>
		</>
	);
}
