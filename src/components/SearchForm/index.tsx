import {
	SearchFormContainer,
	SearchFormContent,
	SearchFormHeader,
} from "./style";

interface SearchFormProps {
	countIssues: number | boolean;
}

export function SearchForm({ countIssues }: SearchFormProps) {
	const hasCountIssues = !!countIssues;
	const lengthIssues = hasCountIssues ? countIssues : "0";

	return (
		<SearchFormContainer>
			<SearchFormHeader>
				<h2>Publicações</h2>
				<span>{`${lengthIssues} publicações`}</span>
			</SearchFormHeader>
			<SearchFormContent>
				<input type="text" placeholder="Buscar conteúdo" />
			</SearchFormContent>
		</SearchFormContainer>
	);
}
