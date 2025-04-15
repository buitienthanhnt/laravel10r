import Baselayout from "../BaseLayout";
import FootContent from "./Components/FootContent";
import TopContent from "./Components/TopContent";

const SingleLayout = ({ children }) => {
	return (
		<Baselayout>
			<TopContent />
			{children}
			<FootContent />
		</Baselayout>
	);
}

export default SingleLayout;