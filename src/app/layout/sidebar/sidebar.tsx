import React, {Dispatch, FC, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, NavItem, SystemPart} from "../../store/types";
import {Icon} from "../../components";
import {actions} from "../../store";
import './sidebar.scss'


const Sidebar: FC = () => {
    const sidebar = useSelector(({app}: RootState) => app.sidebar);

    return (
        <aside className={`Menu ${sidebar}`}>
            <div className='wrapper'>
                <NavBar/>
                <Footer/>
            </div>
        </aside>
    )
};


type Props<T = SystemPart | string> = {
    item: NavItem<T>;
    activeId: T;
    fc: Dispatch<any>;
}

const Label: FC<Props> = React.memo(({item, activeId, fc}) => {
    const {icon, title, id} = item;
    return (
        <div key={title}
             className={activeId === id ? 'item active' : 'item'}
             onClick={() => fc(actions.nav.setActiveLabel(id))}>
            <span className='icon-btn md'>
                <Icon name={icon}/>
            </span>

            <span className='text trim-text'>
                {title}
            </span>
        </div>
    );
});

const NavBar: FC = () => {
    const dispatch = useDispatch();

    const {
        totalId: ids,
        activeLabel: activeId,
        labelsById: {system, custom}
    } = useSelector(({nav}: RootState) => nav);

    const labItems = useMemo(() => Object.keys(custom)
        .map(key => (
            <Label
                key={custom[key].id}
                item={custom[key]}
                activeId={activeId}
                fc={dispatch}
            />
        )), [custom, activeId]);

    return (
        <nav>
            <Label
                item={system.main}
                activeId={activeId}
                fc={dispatch}
            />

            {labItems}

            <Label
                item={system.editLabels}
                activeId={activeId}
                fc={dispatch}
            />

            <Label
                item={system.archive}
                activeId={activeId}
                fc={dispatch}
            />

            <Label
                item={system.dump}
                activeId={activeId}
                fc={dispatch}
            />
        </nav>
    );
};

const Footer: FC = () => {
    return (
        <footer>
            <div className='item'
                 title='Author github account'
                 onClick={() => window.open('https://github.com/Skevary', '_blank')}>
                <span className='icon-btn sm'>
                    <Icon name='Github'/>
                </span>
                <span className='text trim-text'>
                  {'Github'}
                </span>
            </div>

            <div className='item'
                 title='Author gmail account'
                 onClick={() => window.open('mailto:araievskyi@gmail.com')}>
                <span className='icon-btn sm'>
                    <Icon name='Gmail' style={{width: '1.75em', height: '1.75em'}}/>
                </span>
                <span className='text trim-text'>
                    {'Gmail'}
                </span>
            </div>

        </footer>
    )
};

export default Sidebar;
