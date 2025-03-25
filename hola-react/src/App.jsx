import { RunnableDevEnvironment } from "vite";

export function App() {
    return (
        <article style={{ display: 'flex', flexDirection: 'column' }}>
            <header>
                <img src="https://unavatar.io/x/kikobeats" alt="unavatar" />
                <div>
                    <strong>Nombre de avatar</strong>
                    <span>@unavatar</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}