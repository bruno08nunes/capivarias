import { useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
    const error = useRouteError() ?? { status: 404 };

    if (error.status === 404) {
        return (
            <div className={style.main}>
                <div>
                    <img src="/404.png" />
                </div>
                <h2>404</h2>
                <p>Não foi possível encontrar a página</p>
            </div>
        );
    }

    return (
        <main>
            <div>404</div>
        </main>
    );
};

export default ErrorPage;
