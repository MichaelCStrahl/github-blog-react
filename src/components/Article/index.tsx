import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleContainer } from "./style";

export function Article() {
	return (
		<ArticleContainer>
			<p>
				<Markdown remarkPlugins={[remarkGfm]}>{`# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done`}</Markdown>
			</p>
		</ArticleContainer>
	);
}
