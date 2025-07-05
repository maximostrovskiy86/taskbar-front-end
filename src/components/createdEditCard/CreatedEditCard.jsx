import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CreateEditContainer,
  CardInput,
  FooterEditCardContainer,
  CreateEditHeaderCardContainer,
  ConfirmedCreateDeleteTask,
} from "./CreatedEditCard.styled";
import OptionsPicker from "../optionsPicker";
import DateCalendar from "../dateCalendar";
import { ReactComponent as Star } from "../../images/star_blue.svg";
import { ReactComponent as DeleteTask } from "../../images/cancele-cross.svg";
import { ReactComponent as DoneTask } from "../../images/done.svg";
import { ReactComponent as UpdateTask } from "../../images/save.svg";
import { ReactComponent as Cup } from "../../images/trophy.svg";
import tasksOperations from "../../redux/tasks/tasksOperations";
import Button from "../button";
import PopUpConfirmCreateTask from "../popUpConfirmCreateTask";
import Animate from "../animate/Animate";
import { toast } from "react-toastify";
import moment from "moment";
import PropTypes from "prop-types";

const ADDITIONAL_TIME = 60000;

const CreateEditCard = ({
  isChallengeProp = false,
  difficultyProp = "normal",
  categoryProp = "stuff",
  textPropName = "",
  id = null,
  isCompleted = false,
  handleHideCard,
  deadlineProp = new Date(),
  isUpdateCard,
  isDeleteCreatingTask,
}) => {
  const [isChallenge, setChallenge] = useState(isChallengeProp);
  const [category, setCategory] = useState(categoryProp);
  const [difficulty, setDifficulty] = useState(difficultyProp);
  const [taskName, setTaskName] = useState(textPropName);

  const [date, setDate] = useState(deadlineProp);
  const [isShowModal, setIsShowModal] = useState(false);
  const nodeRef = useRef(null);
  const dispatch = useDispatch();

  const handleChangeCardForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "title":
        setTaskName(value);
        break;
      default:
        return;
    }
  };

  const handleError = () => toast.error("Enter a task title, please");

  const onHandleCreateTask = () => {
    const dataTask = {
      isChallenge,
      difficulty,
      category,
      taskName: taskName,
      taskDate: moment(date).format("YYYY-MM-DD HH:mm"),
    };

    if (taskName.trim() === "") {
      handleError();
      return;
    }

    dispatch(tasksOperations.createTask(dataTask));

    setTaskName("");
    isDeleteCreatingTask(false);
  };
  const onHandleUpdateTask = (event) => {
    // event.stopPropagation();
    let updateDate = date;

    if (new Date() >= new Date(date)) {
      updateDate = new Date(new Date().getTime() + ADDITIONAL_TIME);
    }

    const updateDataTask = {
      isChallenge,
      difficulty,
      category,
      taskName: taskName,
      taskDate: moment(updateDate).format("YYYY-MM-DD HH:mm"),
      id: id,
    };

    if (taskName.trim() === "") {
      handleError();
      return;
    }

    dispatch(tasksOperations.updateTask(updateDataTask));
    handleHideCard(false);
  };

  const onHandleDeleteTask = (id) => {
    if (!isUpdateCard) {
      setIsShowModal(false);
      isDeleteCreatingTask(false);
      return;
    }

    dispatch(tasksOperations.deleteTask(id));
    setIsShowModal(false);
  };

  const onHandleUpdateStatusTask = (id) => {
    dispatch(
      tasksOperations.updateStatusTask({
        completed: !isCompleted,
        id,
      }),
    );
  };

  const onHandleChangeTaskOnChallenge = () => {
    setChallenge(!isChallenge);
  };

  return (
    <>
      <CreateEditContainer
        className="create-edit-card"
        $isChallenge={isChallenge}
      >
        <CreateEditHeaderCardContainer>
          <OptionsPicker
            getOptionValue={setDifficulty}
            initialValue={difficulty}
            type="level"
          />
          <div onClick={onHandleChangeTaskOnChallenge}>
            {isChallenge ? <Cup /> : <Star />}
          </div>
        </CreateEditHeaderCardContainer>
        <div className="create-edit-input-box">
          <CardInput>
            <label htmlFor="enter-title">
              {isChallenge ? "Create a new challenge" : "Create a new quest"}
            </label>
            <input
              type="text"
              id="enter-title"
              name="title"
              required
              minLength="3"
              maxLength="30"
              autoFocus
              value={taskName}
              onChange={handleChangeCardForm}
            />
          </CardInput>
          <DateCalendar
            selectDate={setDate}
            elemDate={date}
            className="task-calendar"
          />
        </div>
        <FooterEditCardContainer>
          <OptionsPicker
            getOptionValue={setCategory}
            initialValue={category}
            type="category"
          />
          <ConfirmedCreateDeleteTask>
            {!isUpdateCard ? (
              <>
                <Button
                  type="button"
                  className="cancel-task"
                  onClick={() => setIsShowModal(true)}
                >
                  <DeleteTask />
                </Button>
                <Button
                  type="submit"
                  onClick={onHandleCreateTask}
                  className="create-task"
                >
                  Create
                </Button>
              </>
            ) : (
              <>
                <Button type="submit" onClick={onHandleUpdateTask}>
                  <UpdateTask />
                </Button>
                <Button type="button" onClick={() => setIsShowModal(true)}>
                  <DeleteTask />
                </Button>
                <Button
                  type="submit"
                  onClick={() => onHandleUpdateStatusTask(id)}
                >
                  <DoneTask />
                </Button>
              </>
            )}

            <Animate
              show={isShowModal}
              nodeRef={nodeRef}
              className="modal-delete"
            >
              <PopUpConfirmCreateTask
                onClose={() => setIsShowModal(false)}
                ref={nodeRef}
              >
                <h4 className="popUp-title">Delete this quest?</h4>
                <div className="popUp-button-container">
                  <Button onClick={() => setIsShowModal(false)}>Cancel</Button>
                  <Button onClick={() => onHandleDeleteTask(id)}>Delete</Button>
                </div>
              </PopUpConfirmCreateTask>
            </Animate>
          </ConfirmedCreateDeleteTask>
        </FooterEditCardContainer>
      </CreateEditContainer>
    </>
  );
};

export default CreateEditCard;

CreateEditCard.propTypes = {
  isChallengeProp: PropTypes.bool,
  difficultyProp: PropTypes.string,
  categoryProp: PropTypes.string,
  textPropName: PropTypes.string,
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleHideCard: PropTypes.func,
  deadlineProp: PropTypes.string,
  isUpdateCard: PropTypes.bool,
  isDeleteCreatingTask: PropTypes.bool.isRequired,
};
