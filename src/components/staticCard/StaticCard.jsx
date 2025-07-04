import { useDispatch } from "react-redux";
import { CategoryContainer, CardHeaderStyle } from "./StaticCard.styled";
import { CardContainer } from "../card/Card.styled";
import { ReactComponent as Fire } from "../../images/fire.svg";
import { ReactComponent as Star } from "../../images/star_blue.svg";
import { ReactComponent as Arrow } from "../../images/arrow-right.svg";
import { ReactComponent as Cup } from "../../images/trophy.svg";
import tasksOperations from "../../redux/tasks/tasksOperations";
import Button from "../button";
import PropTypes from "prop-types";

const StaticCard = ({
  textPropName,
  difficultyProp,
  taskDate,
  categoryProp,
  onClick,
  id,
  isCompleted,
  isChallenge,
  ref,
}) => {
  const dispatch = useDispatch();

  const optionsTime = { hour12: false, hour: "numeric", minute: "numeric" };
  const date = new Date(taskDate).toLocaleTimeString("en-US", optionsTime);
  let time;

  if (
    new Date().toLocaleDateString() === new Date(taskDate).toLocaleDateString()
  ) {
    time = `Today, ${date}`;
  } else if (new Date().getDate() + 1 === new Date(taskDate).getDate()) {
    time = `Tomorrow, ${date}`;
  } else {
    time = new Date(taskDate).toLocaleTimeString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
  }

  const isFireShow =
    Date.parse(taskDate) - Date.now() <= 3600000 &&
    Date.parse(taskDate) - Date.now() > 0;

  const onHandleUpdateStatusTask = () => {
    if (isCompleted) return;

    dispatch(
      tasksOperations.updateStatusTask({
        completed: true,
        id,
      }),
    );
  };

  const onRecoverTask = () => {
    dispatch(tasksOperations.updateStatusTask({ id: id, completed: false }));
  };

  return (
    <CardContainer
      onClick={onClick}
      className="static-card"
      ref={ref}
      $isCompleted={isCompleted}
      $isChallenge={isChallenge}
    >
      <CardHeaderStyle>
        <div>
          <span className={difficultyProp}></span>
          <span>{difficultyProp}</span>
        </div>
        <div className="star-static-card" onClick={onHandleUpdateStatusTask}>
          {isChallenge ? <Cup /> : <Star />}
        </div>
      </CardHeaderStyle>
      <div className="main-card">
        <h5>{isChallenge && "CHALLENGE"}</h5>
        <h3 className="title-task">
          {/* eslint-disable-next-line react/prop-types */}
          {textPropName?.length >= 18
            ? // eslint-disable-next-line react/prop-types
              `${textPropName?.slice(0, 18)}...`
            : textPropName}
        </h3>
        <div>
          <span className="date">
            {isChallenge && "by "}
            {time}
          </span>
          {isFireShow && <Fire />}
        </div>
      </div>
      <CategoryContainer className={categoryProp}>
        {categoryProp}
      </CategoryContainer>
      {isCompleted && (
        <Button onClick={onRecoverTask} className="recover-task-btn">
          Recover {isChallenge ? "challenge" : "task"}
          <Arrow />
        </Button>
      )}
    </CardContainer>
  );
};

export default StaticCard;

StaticCard.propTypes = {
  textPropName: PropTypes.string.isRequired,
  difficultyProp: PropTypes.string.isRequired,
  taskDate: PropTypes.string.isRequired,
  categoryProp: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isChallenge: PropTypes.bool.isRequired,
  ref: PropTypes.node.isRequired,
};
