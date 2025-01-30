export class MemoryHandler {
	constructor(client, command) {
		this.client = client;
		this.command = command;
	}

	processMemoryOperation() {
		const operations = {
			memory_recall: () => this.memoryRecall(),
		};

		const definedOperation = operations[this.command];
		definedOperation();
	}

	memoryRecall() {
		const { invoker, commands, currentOperand, operationType } =
			this.client;

		invoker.setCommand(commands.memory_recall);
		const rememberedValue = invoker.pressButton(currentOperand);

		if (operationType) {
			this.client.appendOperand(rememberedValue);
		} else {
			this.client.currentOperand = rememberedValue;
		}
	}
}
