
export default function Baselayout({ children }) {
	return (
		<div className="container mx-auto flex-1 p-2 dark:bg-gray-300 bg-gray-100">
			{children}
		</div>
	)
}