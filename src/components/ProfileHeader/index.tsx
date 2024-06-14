import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "../../contexts/GithubContext";
import {
	ProfileHeaderBodyContent,
	ProfileHeaderContainer,
	ProfileHeaderContent,
	ProfileHeaderHeaderContent,
	ProfileHeaderHeaderLink,
	ProfileHeaderImageContent,
	ProfileHeaderInfoContent,
	ProfileHeaderInfoItem,
	ProfileHeaderText,
} from "./style";

export function ProfileHeader() {
	const user = useContextSelector(GithubContext, (context) => {
		return context.user;
	});

	const hasUser = !!user;

	if (!hasUser) {
		return null;
	}

	return (
		<ProfileHeaderContainer>
			<ProfileHeaderContent>
				<ProfileHeaderImageContent>
					<img src={user.avatar_url} alt="" />
				</ProfileHeaderImageContent>
				<ProfileHeaderBodyContent>
					<ProfileHeaderHeaderContent>
						<h1>{user.name}</h1>
						<ProfileHeaderHeaderLink href={user.html_url} target="_blank">
							<span>Github</span>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
						</ProfileHeaderHeaderLink>
					</ProfileHeaderHeaderContent>
					<ProfileHeaderText>{user.bio}</ProfileHeaderText>

					<ProfileHeaderInfoContent>
						<ProfileHeaderInfoItem>
							<FontAwesomeIcon icon={faGithub} size="sm" />
							<span>{user.login}</span>
						</ProfileHeaderInfoItem>
						{user.company && (
							<ProfileHeaderInfoItem>
								<FontAwesomeIcon icon={faBuilding} size="sm" />
								<span>{user.company}</span>
							</ProfileHeaderInfoItem>
						)}
						<ProfileHeaderInfoItem>
							<FontAwesomeIcon icon={faUserGroup} size="sm" />
							<span>{user.followers} seguidores</span>
						</ProfileHeaderInfoItem>
					</ProfileHeaderInfoContent>
				</ProfileHeaderBodyContent>
			</ProfileHeaderContent>
		</ProfileHeaderContainer>
	);
}
