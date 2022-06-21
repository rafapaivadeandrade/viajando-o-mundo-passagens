import { useContext } from 'react';

import {Helmet} from "react-helmet";

const Seo = ( ) => {

    return(
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title></title>

                <meta
                    name="description"
                />

                {/* favicon */}
                <link  rel="shortcut icon"  href="" type="image/x-icon"
                />
            </Helmet>
        </div>
    );
}

export default Seo;
