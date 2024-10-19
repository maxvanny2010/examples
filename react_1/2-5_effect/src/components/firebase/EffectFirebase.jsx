import { useState } from 'react';
import {
	useRequestAddVacuumCleaner,
	useRequestDeleteVacuum,
	useRequestGetProducts,
	useRequestUpdatePriceOfPhone,
} from './hook.jsx';
import styles from '../mock_json-server_custom-hook/EffectMockJsonServerCustomHook.module.css';
import { EffectFirebaseLoaderLayout } from './EffectLoaderFirebaseLayout.jsx';
import { EffectTableFirebaseLayout } from './EffectTableFirebaseLayout.jsx';

export const EffectFirebase = () => {
	const [isLoading, setIsLoading] = useState(true);

	const products = useRequestGetProducts(setIsLoading);
	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(setIsLoading);
	const { requestUpdatePriceOfPhone, isUpdating } = useRequestUpdatePriceOfPhone(setIsLoading);
	const { requestDeleteVacuum, isDeleting } = useRequestDeleteVacuum(setIsLoading);

	return (
		<>
			<div className={styles.container}>
				{isLoading ? (
					<EffectFirebaseLoaderLayout />
				) : (
					<EffectTableFirebaseLayout products={products} />
				)}
			</div>
			<div className={styles.buttons}>
				<button
					disabled={isCreating}
					onClick={
						requestAddVacuumCleaner
					}
				> Add Vacuum
				</button>
				<button
					disabled={isDeleting}
					onClick={() => requestDeleteVacuum('Vacuum Cleaner')}
				>Delete Vacuum
				</button>

			</div>
			<div className={styles.buttonUpdate}>
				<button
					disabled={isUpdating}
					onClick={requestUpdatePriceOfPhone}
				>Update Phone
				</button>
			</div>
		</>
	);
};
