import type { ReactNode, FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface CodeBlockProps {
	node?: any;
	inline?: boolean;
	className?: string;
	children?: ReactNode;
}
export const CodeBlockMarkdown: FC<CodeBlockProps> = ({
														  inline,
														  className,
														  children,
														  ...props
													  }) => {
	const match = /language-(\w+)/.exec(className || '');
	if (!inline && match) {
		return (
			<SyntaxHighlighter
				style={materialDark}
				language={match[1]}
				PreTag="div"
				{...props}
			>
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		);
	}
	return (
		<code className={className} {...props}>
			{children}
		</code>
	);
};
