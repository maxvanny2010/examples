import type { ReactNode, FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box } from '@mui/material';

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
			<Box
				component="div"
				sx={{
					width: '100%',
					overflowX: 'auto',
					my: 2,
					borderRadius: 1,
					fontSize: { xs: '0.8rem', sm: '0.9rem' },
					backgroundColor: '#2d2d2d',
					padding: '1rem',
				}}
			>
				<SyntaxHighlighter
					style={materialDark}
					language={match[1]}
					PreTag="div"
					customStyle={{ margin: 0, padding: 0, background: 'transparent' }}
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			</Box>
		);
	}

	return (
		<code
			className={className}
			{...props}
			style={{
				backgroundColor: '#2d2d2d',
				color: '#fff',
				padding: '0.2em 0.4em',
				borderRadius: '4px',
				fontSize: '0.85em',
			}}
		>
			{children}
		</code>
	);
};
