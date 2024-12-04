import { createConfig } from "@tokenami/css";

import { config } from "@monorepo-remix-react-compiler/css/config";

export default createConfig({
	...config,
	include: ["./src/**/*.{ts,tsx}"],
});
