import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faCalendarDay,
	faChevronLeft,
	faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
	ProfileHeaderBodyContent,
	ProfileHeaderContainer,
	ProfileHeaderContent,
	ProfileHeaderHeaderContent,
	ProfileHeaderHeaderLink,
	ProfileHeaderInfoContent,
	ProfileHeaderInfoItem,
	TitleArticle,
} from "../ProfileHeader/style";

interface PostInfoHeaderProps {
	issue?: Issue;
	userLogin?: string;
}

export function PostInfoHeader({ issue, userLogin }: PostInfoHeaderProps) {
	const hasIssue = !!issue;

	if (!hasIssue) {
		return null;
	}

	return (
		<ProfileHeaderContainer>
			<ProfileHeaderContent>
				<ProfileHeaderBodyContent>
					<ProfileHeaderHeaderContent>
						<ProfileHeaderHeaderLink href="/">
							<FontAwesomeIcon icon={faChevronLeft} size="sm" />
							<span>Voltar</span>
						</ProfileHeaderHeaderLink>
						<ProfileHeaderHeaderLink href={issue.html_url} target="_blank">
							<span>Ver no Github</span>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
						</ProfileHeaderHeaderLink>
					</ProfileHeaderHeaderContent>

					<TitleArticle>{issue.title}</TitleArticle>

					<ProfileHeaderInfoContent>
						<ProfileHeaderInfoItem>
							<FontAwesomeIcon icon={faGithub} size="sm" />
							<span>{userLogin}</span>
						</ProfileHeaderInfoItem>
						<ProfileHeaderInfoItem>
							<FontAwesomeIcon icon={faCalendarDay} size="sm" />
							<time>
								{formatDistanceToNow(issue.created_at, {
									addSuffix: true,
									locale: ptBR,
								})}
							</time>
						</ProfileHeaderInfoItem>
						<ProfileHeaderInfoItem>
							<FontAwesomeIcon icon={faComment} size="sm" />
							<span>{`${issue.comments} comentários`}</span>
						</ProfileHeaderInfoItem>
					</ProfileHeaderInfoContent>
				</ProfileHeaderBodyContent>
			</ProfileHeaderContent>
		</ProfileHeaderContainer>
	);
}
