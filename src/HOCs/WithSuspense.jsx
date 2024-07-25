import React, { Suspense } from 'react';
import Preloader from '../components/commonComponents/Preloader/Preloader';

const WithSuspense = (props) => {
    return (
        <Suspense fallback={<Preloader isFetching={true} />}>
            {props.component}
        </Suspense>
    )
};

export default WithSuspense;