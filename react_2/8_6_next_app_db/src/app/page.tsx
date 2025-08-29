import HomeClient from '@/app/events/page';

export default function HomePage() {
	// В этом файле можно делать серверные вызовы через TRPC или fetch
	// Сейчас вся интерактивность на клиенте
	return <HomeClient />;
}
