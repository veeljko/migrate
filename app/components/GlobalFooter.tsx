// @ts-ignore
import Footer from "./footer";
import { ThemeProvider } from '@rescui/ui-contexts';

export function GlobalFooter(props : any) {

    return (
        <ThemeProvider theme="dark">
            <Footer {...props} />
        </ThemeProvider>
    );
}