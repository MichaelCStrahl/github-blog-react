import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Issue } from "../components/Issue";
import { Profile } from "../components/Profile";
import { GithubIssuesContext } from "../contexts/GithubIssuesContext";

export function Post() {
	const { githubIssues } = useContext(GithubIssuesContext);
	const { issueId } = useParams();
	const navigate = useNavigate();

	const issue = githubIssues?.items.find(
		(issue) => issue.id.toString() === issueId,
	);

	const hasIssue = !!issue;

	if (!hasIssue) {
		navigate("/");
	}

	return (
		<>
			<Profile issue={issue} />
			<Issue issue={issue} />
		</>
	);
}
