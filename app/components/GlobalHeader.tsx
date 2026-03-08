// @ts-ignore
import Header from "./header";
import { ThemeProvider } from '@rescui/ui-contexts';

export function GlobalHeader(props : any) {

    return (
        <ThemeProvider theme="dark">
            <Header {...props} />
        </ThemeProvider>
    );
}