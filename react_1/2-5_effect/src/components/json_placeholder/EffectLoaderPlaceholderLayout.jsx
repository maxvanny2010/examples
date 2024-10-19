import styles from './EffectJsonPlaceholder.module.css';


export const EffectLoaderPlaceholderLayout = () => {

	return (
		<div className={styles.container}>
			{
				<div className={styles.loader}></div>
			}
		</div>
	);
};

