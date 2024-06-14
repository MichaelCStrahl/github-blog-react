import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ProfileHeaderHeaderLink } from "../ProfileHeader/style";
import { IssueContainer, IssueHeader, IssueLinkContent } from "./style";

interface IssueProps {
	issue: Issue | undefined;
}

export function Issue({ issue }: IssueProps) {
	const hasIssue = !!issue;

	return (
		<IssueContainer>
			{!hasIssue && (
				<IssueHeader>
					<IssueLinkContent>
						<ProfileHeaderHeaderLink href="/">
							<FontAwesomeIcon icon={faChevronLeft} size="sm" />
							<span>Voltar ao inicio</span>
						</ProfileHeaderHeaderLink>
					</IssueLinkContent>
					<p>Ops! algo deu errado</p>
				</IssueHeader>
			)}

			{hasIssue && (
				<p>
					<Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
				</p>
			)}
		</IssueContainer>
	);
}
