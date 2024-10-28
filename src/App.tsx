import './App.scss'
import AdminPanel from './components/screens/admin/AdminPanel'

function App() {
	// const API_KEY = '451f295a-dec2-4cc4-8b5d-99f9bf679e8d'

	// useEffect(() => {
	// 	async function test() {
	// 		const res = await fetch(
	// 			`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=$москва`
	// 		);
	// 		const data = await res.json();
	// 		console.log(data);
	// 	}

	// 	test()
	// }, [])

	return <AdminPanel />
}

export default App
