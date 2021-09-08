import { CommandContext } from "../../deps.ts";

export const commands = [
	{
		name: "format",
		onExecute(ctx: CommandContext) {
			ctx.channel.send(
				"You can format code on discord like so: \n> \\`\\`\\`typescript \n> function deno(node: any) { \n>   return node.split().sort().join(); \n> } \n> \\`\\`\\`"
			);
		},
	},
	{
		name: "deno",
		onExecute(ctx: CommandContext) {
			ctx.message.reply(
				"Deno is a secure javascript/typescript runtime built on rust!"
			);
		},
	},
];
