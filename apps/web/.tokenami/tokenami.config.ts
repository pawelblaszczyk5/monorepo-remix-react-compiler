import { createConfig } from "@tokenami/css";

import { config } from "@monorepo-remix-react-compiler/css/config";

export default createConfig({
	...config,
	include: ["./app/**/*.{ts,tsx}", "./node_modules/@monorepo-remix-react-compiler/design-system/build/styles.css"],
});
