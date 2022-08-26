import { css } from "@emotion/react";

const styles = {
  container: css`
    background: #fdfdfd;
    padding: 5px 5px 0;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #eeeeee;
    height: 44px;
  `,

  tabs: css`
    display: flex;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
  `,

  tab: (selected: boolean) => css`
    font-weight: 500;
    font-size: 14px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    padding: 10px 15px;
    position: relative;
    background: ${selected ? "#eee" : "white"};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-width: 0;
    position: relative;
    user-select: none;
  `,

  underline: css`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgb(186, 218, 253);
  `,
};

type Tab = { icon: string; label: string };
type Props = { tabs: Tab[]; currentTab: Tab; onChange: (tab: Tab) => void };

function TabBar({ tabs, currentTab, onChange }: Props) {
  return (
    <nav css={styles.container}>
      <ul css={styles.tabs}>
        {tabs.map((tab) => {
          const selected = currentTab === tab;
          return (
            <li css={styles.tab(selected)} onClick={() => onChange(tab)}>
              {`${tab.icon} ${tab.label}`}
              {selected && <div css={styles.underline} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TabBar;
