import { FaFileDownload } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const CSV_FILE_URL = "http://localhost:5173/src/assets/addresses.csv";

function QuestionDescription() {
	const downloadFileAtURL = url => {
		const fileName = url.split("/").pop();
		const aTag = document.createElement("a");
		aTag.href = url;
		aTag.setAttribute("download", fileName);
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	};

	const [contestData] = useOutletContext();

	return (
		<div className="w-[1200px] mx-auto">
			<div className="w-9/12">
				<div className="mt-10">
					<h1 className="text-2xl font-bold text-gray-950">Description</h1>
					<p className="pt-5 text-sm text-gray-500">{contestData.description}</p>
				</div>
				<div className="mt-10">
					<h1 className="text-2xl font-bold text-gray-950">Dataset</h1>
					<p className=" mt-5 flex gap-2 text-gray-700">
						<span>Training Dataset</span>
						<button
							onClick={() => downloadFileAtURL(contestData.trainingDataPath)}
							className="text-gray-900">
							<FaFileDownload />
						</button>
					</p>
					<p className="mt-5 flex gap-2 text-gray-700">
						<span>Test Dataset</span>
						<button
							onClick={() => downloadFileAtURL(contestData.testingDataPath)}
							className="text-gray-900">
							<FaFileDownload />
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default QuestionDescription;
