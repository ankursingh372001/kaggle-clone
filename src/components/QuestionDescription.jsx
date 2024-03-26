import { FaFileDownload } from "react-icons/fa";

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

	return (
		<div className="w-[1200px] mx-auto">
			<div className="w-9/12">
				<div className="mt-10">
					<h1 className="text-2xl font-bold text-gray-950">Description</h1>
					<p className="pt-5 text-sm text-gray-500">Welcome to the 2024 Kaggle Playground Series! We plan to continue in the spirit of previous playgrounds, providing interesting an approachable datasets for our community to practice their machine learning skills, and anticipate a competition each month.</p>
				</div>
				<div className="mt-10">
					<h1 className="text-2xl font-bold text-gray-950">Dataset</h1>
					<p className=" mt-5 flex gap-2 text-gray-700">
						<span>Training Dataset</span>
						<button
							onClick={() => downloadFileAtURL(CSV_FILE_URL)}
							className="text-gray-900">
							<FaFileDownload />
						</button>
					</p>
					<p className="mt-5 flex gap-2 text-gray-700">
						<span>Test Dataset</span>
						<button
							onClick={() => downloadFileAtURL(CSV_FILE_URL)}
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
