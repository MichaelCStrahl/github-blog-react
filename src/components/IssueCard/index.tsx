import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IssueCardContent, IssueCardHeader } from "./style";

interface IssueCardProps {
	item: Issue;
}

export function IssueCard({ item }: IssueCardProps) {
	return (
		<>
			<IssueCardContent href={`/post/${item.id}`}>
				<IssueCardHeader>
					<h1>{item.title}</h1>
					<time>
						{formatDistanceToNow(item.created_at, {
							addSuffix: true,
							locale: ptBR,
						})}
					</time>
				</IssueCardHeader>

				<p>{`${item.body.slice(0, 181)}...`}</p>
			</IssueCardContent>
		</>
	);
}
