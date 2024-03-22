import axios from "axios";
import { useState } from "react";

function CreateCompetition() {
  const css = {
    formFieldContainer:
      "relative mt-10 px-5 border-[1px] border-gray-400 rounded-lg hover:border-gray-900",
    label: "absolute top-[-8px] bg-white text-xs text-gray-600 uppercase",
    input: "w-full my-5 outline-none text-gray-800",
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    trainingDataset: "",
    testingDataset: "",
  });

  const onSubmitHandler = async () => {
    try {
      //   e.preventDefault();
      formData["admin"] = sessionStorage.getItem("email");
      formData["startDate"] = moment(formData["startDate"]).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      formData["endDate"] = moment(formData["endDate"]).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      console.log("submit", formData);
      const response = await axios.post(
        "http://localhost:9090/api/contests/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const json = await response.json();
      console.log({ json });
      alert("Contest Created Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeHandler = (e) => {
    if (e.target.type == "file") {
      setFormData(
        Object.assign({}, formData, { [e.target.id]: e.target.files[0] })
      );
    } else
      setFormData(
        Object.assign({}, formData, { [e.target.id]: e.target.value })
      );
  };

  return (
    <div className="w-[1200px] mx-auto mb-10">
      <div>
        <h1 className="mt-12 text-2xl font-bold">Create a Competition</h1>
        <p className="mt-3 text-gray-500">
          Our no-cost, self-service platform is great for educators, small
          businesses, or ML enthusiasts.
        </p>
      </div>
      <form>
        <div className={css.formFieldContainer}>
          <label className={css.label} htmlFor="title">
            TITLE *
          </label>
          <textarea
            id="title"
            placeholder="Enter a descriptive title"
            className={css.input}
            value={formData.title}
            onChange={onChangeHandler}
            required
          ></textarea>
        </div>
        <div className={css.formFieldContainer}>
          <label className={css.label} htmlFor="description">
            DESCRIPTION *
          </label>
          <textarea
            id="description"
            placeholder="Enter a description"
            className={css.input}
            value={formData.description}
            onChange={onChangeHandler}
            required
          ></textarea>
        </div>
        <div className={css.formFieldContainer}>
          <label className={css.label} htmlFor="startDate">
            START DATE *
          </label>
          <input
            id="startDate"
            className={css.input}
            type="datetime-local"
            value={formData.startDate}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className={css.formFieldContainer}>
          <label className={css.label} htmlFor="endDate">
            END DATE *
          </label>
          <input
            id="endDate"
            className={css.input}
            type="datetime-local"
            value={formData.endDate}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className={css.formFieldContainer}>
          <label className={css.label}>Training Dataset *</label>
          <input
            id="trainingData"
            type="file"
            accept=".csv"
            className={css.input}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className={css.formFieldContainer}>
          <label className={css.label}>Test Dataset *</label>
          <input
            id="testingData"
            type="file"
            accept=".csv"
            className={css.input}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            await onSubmitHandler();
          }}
          type="submit"
          className="mt-8 px-3 py-4 rounded-md bg-[#20BEFF] text-white text-base hover:opacity-90"
        >
          Create Competition
        </button>
      </form>
    </div>
  );
}

export default CreateCompetition;
