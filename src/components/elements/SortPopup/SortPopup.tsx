import cn from 'classnames';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';

import style from './sortPopup.module.scss';

export type SortType = 'discount' | 'name' | 'popular' | 'price' | 'rating' | 'time' | 'title';

export type OrderType = 'asc' | 'desc';

export type SortItem = {
  name: string;
  order?: OrderType;
  type: SortType;
};

type SortPopupProps = {
  activeSortType: SortType;
  classNames?: string;
  handleClickSortType: (type: SortType, order?: OrderType) => void;
  items?: SortItem[];
  orderType?: OrderType;
};

export const SortPopup: FC<SortPopupProps> = ({
  activeSortType,
  classNames,
  handleClickSortType,
  items,
  orderType,
}) => {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const activeLabel = items?.find((obj) => obj.type === activeSortType)?.name;

  const handleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  // useEffect(() => {
  //   const handleOutsideClick = (e: MouseEvent) => {
  //     if (!sortRef.current?.contains(e.target as Node)) {
  //       setVisiblePopup(false);
  //     }
  //   };

  //   document.body.addEventListener('mousedown', handleOutsideClick);

  //   return () => document.body.removeEventListener('mousedown', handleOutsideClick);
  // }, []);

  return (
    <div className={cn(style.sort, classNames)}>
      <div className={style.sort__title} ref={sortRef}>
        sort by
        <span className={style.sort__link} onClick={handleVisiblePopup}>
          {activeLabel}
        </span>
      </div>

      {visiblePopup && (
        <div className={style.sort__popup}>
          <ul className={style.sort__list}>
            {items?.map(({ name, order, type }, i) => {
              return (
                <li
                  className={cn(style.sort__item, {
                    [style.sort__item_active]: type === activeSortType && order === orderType,
                  })}
                  key={`${type}_${i}`}
                  onClick={() => handleClickSortType(type, order)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
