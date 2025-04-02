
import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { ITabs } from './types';
import { tabsArray } from './constants';
import { ReactComponent as IconBox } from '../../assets/svg/pinned.svg';
import { Popup } from '../Popup/Popup';
import { ReactComponent as IconCancel } from '../../assets/svg/cancel.svg';
import { ReactComponent as IconArrow } from '../../assets/svg/arrow.svg';

export function Tabs() {

    const [tabs, setTabs] = useState<ITabs[]>(tabsArray);

    const [currentItem, setCurrentItem] = useState<ITabs>();

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

    const refBody = useRef<HTMLDivElement | null>(null);

    const [tabsPopup, setTabsPopup] = useState<ITabs[]>([]);

    const refList = useRef<React.MouseEvent<HTMLUListElement, MouseEvent> | null>(null);

    function handleDragStart(event: React.MouseEvent, item: ITabs) {
        setCurrentItem(item);
    }

    function handleDragDrop(event: React.MouseEvent, element: ITabs) {
        event.preventDefault();

        setTabs((prevState) => {
            let newState = [...prevState];

            if (currentItem) {
                newState = newState.map((item, index) => {
                    if (item.id === element.id) {
                        console.log(item);
                        return { ...item, order: currentItem?.order }
                    }

                    if (item.id === currentItem.id) {
                        return { ...item, order: element.order }
                    }

                    return item;
                });

                newState = newState.sort((a, b) => a.order - b.order);
            }

            return newState;
        });
    }

    function handleDragOver(event: React.MouseEvent) {
        event.preventDefault();
    }

    useEffect(() => {
        function handleResize(event: UIEvent) {

            if (refBody.current instanceof HTMLElement) {
                const width = refBody.current.offsetWidth;
                const children = refBody.current.children[0].children;
                let widthAllElements = 0;

                for (let index = 0; index < children.length; index++) {
                    widthAllElements += children[index].getBoundingClientRect().width;
                };

                if (width < widthAllElements) {
                    setTabs(prevState => {
                        const newState = [...prevState];
                        const popElement = newState.pop();
                        if (popElement) {
                            setTabsPopup((prevState) => {
                                const newState = [...prevState];

                                if (!newState.find((item) => item.id === popElement.id)) {
                                    newState.push(popElement);
                                }

                                return newState;
                            });
                        }
                        return newState;
                    });
                }

            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    function handleRemoveTabPopup(id: number): void {
        setTabsPopup(prevState => {
            let newState = [...prevState];
            newState = newState.filter((item, _) => item.id !== id);
            return newState;
        });
    }

    function handleRemoveTab(id: number): void {
        setTabs(prevState => {
            let newState = [...prevState];
            newState = newState.filter((item, _) => item.id !== id);
            return newState;
        });
    }

    return (
        <div className="tabs__wrapper">
            <div className='tabs__body'>
                <div className='tabs__box'>
                    <IconBox />
                </div>
                <div style={{ width: '100%' }} ref={refBody}>
                    <ul className='tabs__list' onMouseMove={(event) => refList.current = event}>
                        {tabs.map((item, _) => (
                            <li
                                onDragStart={(event) => handleDragStart(event, item)}
                                onDragOver={(event) => handleDragOver(event)}
                                onDrop={(event) => handleDragDrop(event, item)}
                                draggable={true}
                                key={item.id} className='tabs__item'>
                                {item.icon}
                                {item.name}
                                <div onClick={() => handleRemoveTab(item.id)}>
                                    <IconCancel />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='tabs__tabs'>
                    <div className={`tabs__icon ${isOpenPopup && 'tabs__active'}`} onClick={(event) => {
                        setIsOpenPopup(!isOpenPopup);
                    }}>
                        <IconArrow />
                    </div>

                    {isOpenPopup &&
                        <Popup className='tabs__popup'>
                            <ul>
                                {tabsPopup.length > 0 && tabsPopup.map((item, _) => (
                                    <li
                                        key={item.id}
                                        className='tabs__item-popup'>
                                        {item.icon}
                                        <p>{item.name}</p>
                                        <div onClick={() => handleRemoveTabPopup(item.id)}>
                                            <IconCancel />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Popup>}
                </div>
            </div>
        </div>
    );
}