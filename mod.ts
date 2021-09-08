import { configs } from "./configs.ts";
import { CommandClient, Intents } from "./deps.ts";
import { handleCommands } from "./src/commands/handleCommands.ts";

const client = new CommandClient({
	prefix: configs.prefix,
});

client.on("ready", () => {
	console.log(`Ready, Logged in as ${client.user?.tag}`);
});

handleCommands(client);

client.connect(configs.token, Intents.None);
