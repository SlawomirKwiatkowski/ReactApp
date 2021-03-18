import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import s from './BaseCollapse.module.scss';
import classNames from 'classnames';

export const BaseCollapse = ({ isOpened, tableItems }) => {
  const [height, setHeight] = useState(0);
  const initRender = useRef(true);
  const innerWrapper = useRef();

  useEffect(() => {
    const handleOpen = () => {
      console.log('działam');
      if (initRender.current) {
        initRender.current = false;
        return 0;
      }
      if (isOpened) {
        const newHeight = innerWrapper.current.getBoundingClientRect().height;
        setHeight(newHeight + 'px');
        window.addEventListener('resize', handleOpen);
      } else {
        setHeight('0px');
        return () => {
          window.removeEventListener('resize', handleOpen);
        };
      }
    };
    handleOpen();
  }, [isOpened]);

  return (
    <ul
      className={classNames(s.buttonMenu, { [s.buttonMenuActive]: isOpened })}
      style={{ height: `${height}` }}>
      <div className={s.innerWrapper} ref={innerWrapper}>
        {tableItems.map((item, index) => {
          return (
            <li key={index} className={s.buttonLinksActive}>
              {item.title}
            </li>
          );
        })}
      </div>
    </ul>
  );
};

BaseCollapse.propTypes = {
  isOpened: PropTypes.bool,
  tableItems: PropTypes.arrayOf(PropTypes.string),
};
