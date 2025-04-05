import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CATEGORIES, CATEGORY_NAME } from '../../constants';

import styles from './Category.module.css';

export function Category() {
	const { category } = useParams<{ category: string }>();
	const [searchParams, setSearchParams] = useSearchParams();
	const sorted = searchParams.get('created');
	const navigate = useNavigate();

	useEffect(() => {
		if (!['characters', 'location', 'episode'].includes(category ?? '')) {
			navigate('/category', { replace: true });
		}
	}, [category, navigate]);

	const list = useMemo(() => {
		const items = CATEGORIES[category as keyof typeof CATEGORIES] || [];
		const sortOrder = sorted === 'ASC' ? 1 : -1;

		return sorted ? [...items].sort((a, b) => {
			if (a.created < b.created) return sortOrder;
			if (a.created > b.created) return -sortOrder;
			return 0;
		}) : items;
	}, [category, sorted]);

	const toggleSort = () => setSearchParams({ created: sorted === 'ASC' ? 'DESC' : 'ASC' });
	const resetSort = () => setSearchParams({});

	return (
		<>
			<h1>Category</h1>
			<div className={styles.subheader}>
				<h2>{CATEGORY_NAME[category as keyof typeof CATEGORY_NAME]}</h2>

				<div className={styles.sortWrap}>
					<button onClick={toggleSort}>{sorted || 'Sort not chosen'}</button>
					{sorted && <button onClick={resetSort}>Cancel Sort</button>}
				</div>
			</div>

			{list.map((item) => (
				<div key={item.id}
					 className={styles.listItem}>
					{'image' in item && <img src={item.image}
											 alt="" />}
					<h3>
						<Link to={`/category/${category}/${item.id}`}>{item.name}</Link>
					</h3>
				</div>
			))}
		</>
	);
}
