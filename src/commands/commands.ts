import { CommandContext } from "../../deps.ts";

export const commands = [
	{
		name: "ping",
		onExecute(ctx: CommandContext) {
			ctx.message.reply("Pong!");
		},
	},
	{
		name: "deno",
		onExecute(ctx: CommandContext) {
			ctx.message.reply("Deno is better than Node!");
		},
	},
];
