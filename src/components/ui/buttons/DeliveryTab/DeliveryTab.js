import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import style from './deliveryTab.module.scss';

export function DeliveryTab({ active, icon, label, onClickItem }) {
  return (
    <button className={classNames(style.deliveryTab, { [style.deliveryTabActive]: active })} onClick={onClickItem}>
      {label === 'Delivery' ? (
        <ReactSVG className={style.deliveryTab___btnIcon} src={`${process.env.PUBLIC_URL}${icon}`} wrapper="span" />
      ) : (
        <ReactSVG className={style.deliveryTab___btnIcon} src={`${process.env.PUBLIC_URL}${icon}`} wrapper="span" />
      )}

      <span className={style.deliveryTab__btnName}>{label}</span>
    </button>
  );
}
