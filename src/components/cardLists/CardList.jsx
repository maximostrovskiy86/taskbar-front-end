import { CardListContainer } from "./CarsList.styled";
import Card from "../card";
import CreateEditCard from "../createdEditCard";
import PropTypes from "prop-types";

const CardList = ({
  isCreateFormShow = false,
  tasks,
  onCloseModal,
  isVisible = false,
}) => {
  return (
    <CardListContainer>
      {isCreateFormShow && isVisible && (
        <li className="card-list-item">
          <CreateEditCard isDeleteCreatingTask={onCloseModal} />
        </li>
      )}

      {tasks.length > 0 &&
        tasks.map((task) => {
          console.log("TASK", task);
          return (
            <li className="card-list-item" key={task._id}>
              <Card task={task} />
            </li>
          );
        })}
    </CardListContainer>
  );
};

export default CardList;

CardList.propTypes = {
  isCreateFormShow: PropTypes.bool,
  onCloseModal: PropTypes.func,
  tasks: PropTypes.array.isRequired,
  isVisible: PropTypes.bool,
};
