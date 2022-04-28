import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
}

const NoMatch: React.FC<Props> = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('page.page_not_found')}</h1>
        </div>
    )
}

export default NoMatch