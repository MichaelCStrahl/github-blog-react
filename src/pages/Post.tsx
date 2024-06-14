import { useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { Issue } from "../components/Issue";
import { PostInfoHeader } from "../components/PostInfoHeader";
import { GithubContext } from "../contexts/GithubContext";

export function Post() {
	const { user, githubIssues } = useContextSelector(
		GithubContext,
		(context) => {
			return {
				user: context.user,
				githubIssues: context.githubIssues,
			};
		},
	);
	const { issueId } = useParams();

	const issue = githubIssues?.items.find(
		(issue) => issue.id.toString() === issueId,
	);

	return (
		<>
			<PostInfoHeader issue={issue} userLogin={user?.login} />
			<Issue issue={issue} />
		</>
	);
}
