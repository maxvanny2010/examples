import styles from './EffectFirebase.module.css';


export const EffectFirebaseLoaderLayout = () => {

	return (
		<div className={styles.container}>
			{
				<div className={styles.loader}></div>
			}
		</div>
	);
};

