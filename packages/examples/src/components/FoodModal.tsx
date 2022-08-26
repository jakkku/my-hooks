import { FormEvent, useState } from "react";
import { css } from "@emotion/react";
import foods, { Food } from "../model/foods";
import TabBar from "./TabBar";
import Button from "./Button";

const styles = {
  background: css`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(186, 218, 253, 0.6);
  `,

  form: css`
    display: flex;
    flex-direction: column;
    width: 480px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
  `,

  displayBoard: css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 128px;
    flex-grow: 1;
    user-select: none;
  `,
};

type Props = {
  onSubmit: (result: Food) => void;
  onClose: () => void;
};

const FoodModal = ({ onSubmit, onClose }: Props) => {
  const [selectedFood, setSelectedItem] = useState<Food>(foods[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(selectedFood);
  };

  const handleFoodChange = (nextFood: Food) => {
    setSelectedItem(nextFood);
  };

  return (
    <div
      css={styles.background}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <form css={styles.form} onSubmit={handleSubmit}>
        <TabBar
          tabs={foods}
          currentTab={selectedFood}
          onChange={handleFoodChange}
        />
        <div css={styles.displayBoard}>{selectedFood.icon}</div>
        <Button type="submit">골랐어요</Button>
      </form>
    </div>
  );
};

export default FoodModal;
