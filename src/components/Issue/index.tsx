import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IssueContainer } from "./style";

interface IssueProps {
	issue: Issue | undefined;
}

export function Issue({ issue }: IssueProps) {
	const hasIssue = !!issue;

	if (!hasIssue) {
		return <p>Ops! Esse artigo não possui conteúdo ainda</p>;
	}

	return (
		<IssueContainer>
			<p>
				<Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
			</p>
		</IssueContainer>
	);
}
