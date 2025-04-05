import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { CATEGORIES } from '../../constants';
import { AllCategoryType } from '../../type';

export function Detail() {
	const navigate = useNavigate();
	const { category, id } = useParams<{ category: string, id: string }>();
	const detail = useMemo<AllCategoryType | null | undefined>(() => {
		if (category && id) {
			const detailArr = (CATEGORIES[category as keyof typeof CATEGORIES] as Array<AllCategoryType>);
			return detailArr.find((item: any) => item.id === Number(id));
		}

		return null;
	}, [category, id]);

	if (detail === null) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div>
				<button onClick={() => navigate(-1)}>
					{'<'} Back
				</button>
			</div>
			<h1>{detail?.name}</h1>
		</>
	);
}
