import { useState } from 'react';
import { EffectLoaderLayout } from './EffectLoaderLayout.jsx';
import { EffectTableLayout } from './EffectTableLayout.jsx';
import {
	useRequestAddVacuumCleaner,
	useRequestDeleteVacuumCleaner,
	useRequestGetProducts,
	useRequestUpdatePhone,
} from './hooks.jsx';

import styles from './EffectMockJsonServer.module.css';

export const EffectMockJsonServer = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);

	const { products, isLoading } = useRequestGetProducts(refreshProducts);
	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(refreshProducts, setRefreshProducts);
	const { requestUpdateSmartphone, isUpdating } = useRequestUpdatePhone(refreshProducts, setRefreshProducts);
	const {
		requestDeleteVacuumCleaner,
		isDeleting,
	} = useRequestDeleteVacuumCleaner(refreshProducts, setRefreshProducts);

	return (
		<>
			<div className={styles.container}>
				{isLoading ? (
					<EffectLoaderLayout />
				) : (
					<EffectTableLayout products={products} />
				)}
			</div>
			<div className={styles.buttons}>
				<button
					disabled={isCreating}
					onClick={
						requestAddVacuumCleaner
					}
				> Add vacuum
				</button>
				<button
					disabled={isDeleting}
					onClick={() => requestDeleteVacuumCleaner('Vacuum Cleaner')}
				>Delete Vacuum
				</button>
			</div>
			<div className={styles.buttonUpdate}>
				<button
					disabled={isUpdating}
					onClick={requestUpdateSmartphone}
				>Update Phone
				</button>
			</div>
		</>
	);
};
