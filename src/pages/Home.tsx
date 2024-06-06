import { PostCard } from "../components/PostCard";
import { PostCardGridContainer } from "../components/PostCard/style";
import { Profile } from "../components/Profile";
import { SearchForm } from "../components/SearchForm";

export function Home() {
	return (
		<>
			<Profile /> <SearchForm />
			<PostCardGridContainer>
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</PostCardGridContainer>
		</>
	);
}
