import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faCalendarDay,
	faChevronLeft,
	faComment,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
	ProfileBodyContent,
	ProfileContainer,
	ProfileContent,
	ProfileHeaderContent,
	ProfileHeaderLink,
	ProfileImageContent,
	ProfileInfoContent,
	ProfileInfoItem,
	ProfileText,
	TitleArticle,
} from "./style";

interface ProfileProps {
	issue?: Issue;
}

export function Profile({ issue }: ProfileProps) {
	const [user, setUser] = useState<User | undefined>(undefined);
	const hasIssue = !!issue;

	async function fetchGithubUser() {
		const response = await api.get("/users/MichaelCStrahl");

		setUser(response.data);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchGithubUser();
	}, []);

	const hasUser = !!user;

	if (!hasUser) {
		return null;
	}

	if (hasIssue) {
		return (
			<ProfileContainer>
				<ProfileContent>
					<ProfileBodyContent>
						<ProfileHeaderContent>
							<ProfileHeaderLink href="/">
								<FontAwesomeIcon icon={faChevronLeft} size="sm" />
								<span>Voltar</span>
							</ProfileHeaderLink>
							<ProfileHeaderLink href={issue.html_url} target="_blank">
								<span>Ver no Github</span>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
							</ProfileHeaderLink>
						</ProfileHeaderContent>

						<TitleArticle>{issue.title}</TitleArticle>

						<ProfileInfoContent>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faGithub} size="sm" />
								<span>{user.login}</span>
							</ProfileInfoItem>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faCalendarDay} size="sm" />
								<time>
									{formatDistanceToNow(issue.created_at, {
										addSuffix: true,
										locale: ptBR,
									})}
								</time>
							</ProfileInfoItem>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faComment} size="sm" />
								<span>{`${issue.comments} comentários`}</span>
							</ProfileInfoItem>
						</ProfileInfoContent>
					</ProfileBodyContent>
				</ProfileContent>
			</ProfileContainer>
		);
	}

	return (
		<ProfileContainer>
			<ProfileContent>
				<ProfileImageContent>
					<img src={user.avatar_url} alt="" />
				</ProfileImageContent>
				<ProfileBodyContent>
					<ProfileHeaderContent>
						<h1>{user.name}</h1>
						<ProfileHeaderLink href={user.html_url} target="_blank">
							<span>Github</span>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
						</ProfileHeaderLink>
					</ProfileHeaderContent>
					<ProfileText>{user.bio}</ProfileText>

					<ProfileInfoContent>
						<ProfileInfoItem>
							<FontAwesomeIcon icon={faGithub} size="sm" />
							<span>{user.login}</span>
						</ProfileInfoItem>
						{user.company && (
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faBuilding} size="sm" />
								<span>{user.company}</span>
							</ProfileInfoItem>
						)}
						<ProfileInfoItem>
							<FontAwesomeIcon icon={faUserGroup} size="sm" />
							<span>{user.followers} seguidores</span>
						</ProfileInfoItem>
					</ProfileInfoContent>
				</ProfileBodyContent>
			</ProfileContent>
		</ProfileContainer>
	);
}
