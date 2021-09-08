import { CommandBuilder, CommandClient } from "../../deps.ts";
import { commands } from "./commands.ts";

export const handleCommands = (client: CommandClient) => {
	commands.forEach((command: any) => {
		client.commands.add(
			new CommandBuilder()
				.setName(command.name)
				.onExecute(command.onExecute)
		);
	});
};
