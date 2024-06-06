import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "./style";

export function Profile() {
	return (
		<ProfileContainer>
			<ProfileContent>
				<ProfileImageContent>
					<img src="https://picsum.photos/148" alt="" />
				</ProfileImageContent>
				<ProfileBodyContent>
					<ProfileHeaderContent>
						<h1>Camera Willison</h1>
						<ProfileHeaderLink href="/">
							<span>Github</span>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
						</ProfileHeaderLink>
					</ProfileHeaderContent>
					<ProfileText>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
						excepturi quisquam fugiat qui alias nam, illo blanditiis. Debitis
						dolores incidunt corporis blanditiis molestiae adipisci et itaque,
						ea nam dolorem. Eum.
					</ProfileText>

					<ProfileInfoContent>
						<ProfileInfoItem>
							<FontAwesomeIcon icon={faGithub} size="sm" />
							<span>teste</span>
						</ProfileInfoItem>
						<ProfileInfoItem>
							<FontAwesomeIcon icon={faBuilding} size="sm" />
							<span>teste</span>
						</ProfileInfoItem>
						<ProfileInfoItem>
							<FontAwesomeIcon icon={faUserGroup} size="sm" />
							<span>teste</span>
						</ProfileInfoItem>
					</ProfileInfoContent>
				</ProfileBodyContent>
			</ProfileContent>
		</ProfileContainer>
	);
}
