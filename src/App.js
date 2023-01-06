import { AppProvider } from "./components/contextapi/context"
import { Main } from "./components/main"

export const App = () =>
    <AppProvider value={{}}>
        <Main />
    </AppProvider>
