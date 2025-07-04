import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiaryAddProductFormContainer } from "./AddTaskFormStyled";
import Button from "../button";
import tasksOperations from "../../redux/tasks/tasksOperations";
// import {useMediaPredicate} from "react-media-hook";

const AddTaskForm = ({ date }) => {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");
  const [complexity, setComplexity] = useState("");
  const dispatch = useDispatch();
  // const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "taskTitle":
        setTaskName(value);
        break;
      case "categoryTitle":
        setCategory(value);
        break;
      case "complexityTitle":
        setComplexity(value);
        break;
      default:
        return;
    }
  };

  // const onHandleSearch = async (e) => {
  //     const target = e.target.value;
  //
  //     if (!userData.dailyRate) {
  //         toast.error("Please, count your daily rate first");
  //     }
  //
  //     if (target.length > 2) {
  //         const {payload} = await dispatch(searchUserProductByDay(target));
  //
  //         if (payload.status === 400) {
  //             toast.error(payload.response.data.message);
  //             return
  //         }
  //
  //         setProducts(payload);
  //     }
  // }
  //
  const onSubmit = (e) => {
    e.preventDefault();
    // const customDate = moment(date).format("YYYY-MM-DD");

    dispatch(
      tasksOperations.addTask({
        title: taskName,
        category: category,
        level: complexity,
      }),
    );

    setTaskName("");
    setCategory("");
    setComplexity("");
  };
  //
  // const findSelectedProduct = (valueProduct) => {
  //     const result = products?.find(product => product.title.en === valueProduct);
  //
  //     if (result) {
  //         return result._id;
  //     }
  // }

  return (
    <DiaryAddProductFormContainer onSubmit={onSubmit}>
      <div className="task-input">
        <label htmlFor="tasktName">Enter task title</label>
        <input
          id="taskTitle"
          type="text"
          name="taskTitle"
          required
          value={taskName}
          title="Email must contain the @ symbol and be in the format example@mail.com"
          onChange={onHandleChange}
        />
      </div>
      <div className="task-input">
        <label htmlFor="categoryTitle">Category</label>
        <input
          id="categoryTitle"
          type="text"
          name="categoryTitle"
          required
          value={category}
          title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
          onChange={onHandleChange}
        />
      </div>
      <div className="task-input">
        <label htmlFor="categoryTitle">Complexity</label>
        <input
          id="complexityTitle"
          type="text"
          name="complexityTitle"
          required
          value={complexity}
          title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
          onChange={onHandleChange}
        />
      </div>
      <div className="add-task-button-box">
        <Button onClick={onSubmit}>Add task</Button>
      </div>
    </DiaryAddProductFormContainer>
  );
};

export default AddTaskForm;
