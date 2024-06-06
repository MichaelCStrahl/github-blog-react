import {
	SearchFormContainer,
	SearchFormContent,
	SearchFormHeader,
} from "./style";

export function SearchForm() {
	return (
		<SearchFormContainer>
			<SearchFormHeader>
				<h2>Publicações</h2>
				<span>6 publicações</span>
			</SearchFormHeader>
			<SearchFormContent>
				<input type="text" placeholder="Buscar conteúdo" />
			</SearchFormContent>
		</SearchFormContainer>
	);
}
