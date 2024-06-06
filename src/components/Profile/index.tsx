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
import { useLocation } from "react-router-dom";
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

export function Profile() {
	const { pathname } = useLocation();

	const isArticlePage = pathname.split("/").find((item) => item === "post");

	if (isArticlePage) {
		return (
			<ProfileContainer>
				<ProfileContent>
					<ProfileBodyContent>
						<ProfileHeaderContent>
							<ProfileHeaderLink href="/">
								<FontAwesomeIcon icon={faChevronLeft} size="sm" />
								<span>Voltar</span>
							</ProfileHeaderLink>
							<ProfileHeaderLink href="/">
								<span>Ver no Github</span>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
							</ProfileHeaderLink>
						</ProfileHeaderContent>

						<TitleArticle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit
						</TitleArticle>

						<ProfileInfoContent>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faGithub} size="sm" />
								<span>teste</span>
							</ProfileInfoItem>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faCalendarDay} size="sm" />
								<span>teste</span>
							</ProfileInfoItem>
							<ProfileInfoItem>
								<FontAwesomeIcon icon={faComment} size="sm" />
								<span>teste</span>
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
