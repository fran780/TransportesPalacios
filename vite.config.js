import { defineConfig } from "vite";
import * as glob from "glob";
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import path, { resolve } from "node:path";
import handlebars from 'vite-plugin-handlebars';
import getPageContext from './Data';

export default defineConfig(
    {
        appType: "mpa",
        base: "/TransportesPalacios/",
        build: {
            rollupOptions: {
                input: Object.fromEntries(
                    [
                        ...glob.sync('./!(dist)/**/*.html').map(
                            file => [
                                path.basename(file, path.extname(file)),
                                resolve(__dirname, file)
                            ]
                        )
                    ]
                )
            }
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(__dirname, 'Parciales'),
                context: (pagePath) => {
                    console.log(pagePath);
                    const contextVariable = getPageContext(pagePath);
                    console.log(contextVariable);
                    return contextVariable;
                }
            }),
            htmlPurge({}),
            ViteMinifyPlugin()
        ]
    }
);
