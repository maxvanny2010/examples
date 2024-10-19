import styles from './EffectMockBackEnd.module.css';


export const EffectLoaderLayout = () => {

	return (
		<div className={styles.container}>
			{
				<div className={styles.loader}></div>
			}
		</div>
	);
};

