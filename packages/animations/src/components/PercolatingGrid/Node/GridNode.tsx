import { SiteState } from 'algorithms';
import classNames from "classnames";
import styles from "./GridNode.module.css";

interface Props {
  id: number;
  parentId: number;
  siteState: SiteState;
  onClick: () => void
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const GridNode = ({id, parentId, siteState, onClick, onMouseEnter, onMouseLeave}: Props): JSX.Element => {

  return (
    <>
      <div 
        onClick={onClick}
        className={classNames(styles.gridnode, styles[siteState])}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* {id} */}
      </div>
    </>
  )
}