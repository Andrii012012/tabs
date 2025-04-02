
import { useState } from 'react';
import './styles.css';
import { ITabs } from './types';
import { tabsArray } from './constants';
import { ReactComponent as IconBox } from '../../assets/svg/pinned.svg';
import iconArrow from '../../assets/images/arrow.svg';

export function Tabs() {

    const [tabs, setTabs] = useState<ITabs[]>(tabsArray);

    return (
        <div className="tabs__wrapper">
            <div className='tabs__body'>
                <div className='tabs__box'>
                    <IconBox/>
                </div>
                <ul className='tabs__list'>
                    {tabs.map((item, _) => (
                        <li key={item.id} className='tabs__item'>
                            {item.icon}
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div className='tabs__tabs'>
                    <img src={iconArrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
}