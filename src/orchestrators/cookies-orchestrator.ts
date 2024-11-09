import cookieConfig from "./cookies.config.json";

interface CookieConfig {
    trigger: {
        path: string
    },
    entries: Array<{
        type: string,
        policies: Array<{
            name: string,
            default: boolean | undefined,
            description: string | undefined
        }>
    }>
}

// @ts-ignore
const config: Array<CookieConfig> = cookieConfig;

for (const conf of config) {
    const cookies = document.createElement("pl-cookies");
    cookies.policies = conf.entries.map(entry => ({
        title: entry.type,
        policies: entry.policies.map(policy => ({
            title: policy.name,
            checked: policy.default ?? false
        }))
    }));

    cookies.addEventListener("accept-all", () => {
        alert("Cookies accepted");
    });

    cookies.addEventListener("accept-current-selection", (e: Event) => {
        alert(`Some cookies accepted: ${JSON.stringify((e as CustomEvent).detail)}`);
    });

    cookies.addEventListener("reject", () => {
        alert("Cookies rejected");
    });


    document.querySelector("#host")!.appendChild(cookies);

    setTimeout(async () => {
        await cookies.open();
    }, 0)
}