import { useState } from "react";
import { usePopup } from "@iamsungjinkim/hooks";
import FoodModal from "./components/FoodModal";
import { Food } from "./model/foods";
import { css } from "@emotion/react";
import Button from "./components/Button";

const styles = {
  container: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  displayBoard: css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 128px;
    user-select: none;
  `,
};

function App() {
  const [food, setFood] = useState<Food>();
  const { openPopup, onSubmit, onClose } = usePopup<Food>();

  const handleClick = async () => {
    const response = await openPopup({
      content: <FoodModal onSubmit={onSubmit} onClose={onClose} />,
    });

    if (response) {
      setFood(response);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.displayBoard}>{food?.icon ?? "🤔"}</div>
      <Button type="button" onClick={handleClick}>
        메뉴 고르기
      </Button>
    </div>
  );
}

export default App;
