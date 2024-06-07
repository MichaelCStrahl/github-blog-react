import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostCardContent, PostCardHeader } from "./style";

interface PostCardProps {
	item: Issue;
}

export function PostCard({ item }: PostCardProps) {
	return (
		<>
			<PostCardContent href={`/post/${item.id}`}>
				<PostCardHeader>
					<h1>{item.title}</h1>
					<time>
						{formatDistanceToNow(item.created_at, {
							addSuffix: true,
							locale: ptBR,
						})}
					</time>
				</PostCardHeader>

				<p>{`${item.body.slice(0, 181)}...`}</p>
			</PostCardContent>
		</>
	);
}
