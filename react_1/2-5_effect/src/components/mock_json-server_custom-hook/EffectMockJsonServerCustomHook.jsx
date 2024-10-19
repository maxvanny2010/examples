import { EffectLoaderLayout } from './EffectLoaderLayout.jsx';
import { EffectTableLayout } from './EffectTableLayout.jsx';
import {
	useRequestAddVacuumCleaner,
	useRequestDeleteVacuumCleaner,
	useRequestGetProducts,
	useRequestUpdatePhone,
} from './hooks.jsx';

import styles from './EffectMockJsonServerCustomHook.module.css';
/* json-server --watch src/assets/db.json5 --port 5000 */
export const EffectMockJsonServerCustomHook = () => {

	const { products, setProducts, isLoading } = useRequestGetProducts();
	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(setProducts);
	const { requestUpdateSmartphone, isUpdating } = useRequestUpdatePhone(setProducts);
	const {
		requestDeleteVacuumCleaner,
		isDeleting,
	} = useRequestDeleteVacuumCleaner(setProducts);

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
