import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleContainer } from "./style";

interface ArticleProps {
	issue: Issue | undefined;
}

export function Article({ issue }: ArticleProps) {
	const hasIssue = !!issue;

	if (!hasIssue) {
		return <p>Ops! Esse artigo não possui conteúdo ainda</p>;
	}

	return (
		<ArticleContainer>
			<p>
				<Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
			</p>
		</ArticleContainer>
	);
}
