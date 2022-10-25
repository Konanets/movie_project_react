import React, {FC} from 'react';

import scss from './NotFoundPage.module.scss'

const NotFoundPage:FC = () => {
    return (
        <div className={scss.page}>
            <h1 className={scss.page__info}>Page Not Found<br/>404</h1>
        </div>
    );
};

export default NotFoundPage;