import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
}

const League: React.FC<Props> = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('page.league')}</h1>
        </div>
    )
}

export default League