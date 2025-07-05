import PropTypes from "prop-types";
import StaticCard from "../staticCard";
import CreateEditCard from "../createdEditCard";
import { useState } from "react";

const Card = ({ task }) => {
  const [isUpdateCard, setIsUpdateCard] = useState(false);
  const {
    difficulty,
    category,
    taskName,
    taskDate,
    _id,
    completed,
    isChallenge,
  } = task;

  return (
    <>
      {isUpdateCard && !completed ? (
        <CreateEditCard
          isChallengeProp={isChallenge}
          difficultyProp={difficulty}
          categoryProp={category}
          textPropName={taskName}
          deadlineProp={taskDate}
          id={_id}
          isCompleted={completed}
          isUpdateCard={isUpdateCard}
          handleHideCard={() => setIsUpdateCard(false)}
        />
      ) : (
        <StaticCard
          isChallenge={isChallenge}
          difficultyProp={difficulty}
          categoryProp={category}
          textPropName={taskName}
          taskDate={taskDate}
          isCompleted={completed}
          id={_id}
          onClick={() => {
            setIsUpdateCard(true);
          }}
        />
      )}
    </>
  );
};

export default Card;

Card.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    isChallenge: PropTypes.bool,
    difficulty: PropTypes.string,
    category: PropTypes.string,
    taskName: PropTypes.string,
    taskDate: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
