import { useForm } from "react-hook-form";
import {
	SearchFormContainer,
	SearchFormContent,
	SearchFormHeader,
} from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { z } from "zod";
import { GithubContext } from "../../contexts/GithubContext";

interface SearchFormProps {
	countIssues: number | boolean;
}

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm({ countIssues }: SearchFormProps) {
	const { register, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	const fetchGithubIssues = useContextSelector(GithubContext, (context) => {
		return context.fetchGithubIssues;
	});

	const hasCountIssues = !!countIssues;
	const lengthIssues = hasCountIssues ? countIssues : "0";

	const handleSearchIssue = async (data: SearchFormInputs) => {
		await fetchGithubIssues(data.query.trim());
	};

	return (
		<SearchFormContainer>
			<SearchFormHeader>
				<h2>Publicações</h2>
				<span>{`${lengthIssues} publicações`}</span>
			</SearchFormHeader>
			<SearchFormContent onChange={handleSubmit(handleSearchIssue)}>
				<input
					type="text"
					placeholder="Buscar conteúdo"
					{...register("query")}
				/>
			</SearchFormContent>
		</SearchFormContainer>
	);
}
