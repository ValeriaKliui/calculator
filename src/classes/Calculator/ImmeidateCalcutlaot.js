export class ImmeidateCalcutlaot {
    constructor(calculatorState, invoker, calculateExpression, commands) {
        this.calculatorState = calculatorState
        this.invoker = invoker
        this.calculateExpression = calculateExpression
        this.commands = commands
    }

    handleToggle() {
        if (this.calculatorState.isStartOfOperand) {
            this.calculatorState.leftOperand = this.invoker.pressButton(this.calculatorState.leftOperand);
        } else {
            this.calculatorState.currentOperand = this.invoker.pressButton(this.calculatorState.currentOperand);
        }
    }

    handleMemoryRecall() {
        const rememberedValue = this.invoker.pressButton(this.calculatorState.currentOperand);
        if (this.calculatorState.operationType) {
            this.calculatorState.setOperand(rememberedValue);
        } else {
            this.calculatorState.currentOperand = rememberedValue;
        }
    }

    handleMemoryAddOrSubtract() {
        if (!this.calculatorState.operationType) {
            this.invoker.pressButton(this.calculatorState.currentOperand ?? 0);
        }
    }

    handleSpecialCommands(command) {
        switch (command) {
            case 'memory_add':
            case 'memory_substract':
                this.handleMemoryAddOrSubtract();
                break;
            case 'memory_recall':
                this.handleMemoryRecall();
                break;
            case 'memory_clear':
                this.invoker.pressButton();
                break;
            case 'toggle':
                this.handleToggle();
                break;
            case 'clear':
                this.calculatorState.resetState();
                break;
        }
    }

    getOperandsForCommand(command, base, power) {
        const commandsMap = {
            power: [base || this.calculatorState.currentOperand, power || this.calculatorState.currentOperand],
            root: [this.calculatorState.currentOperand, power],
            divide: [base, this.calculatorState.currentOperand],
            factorial: [this.calculatorState.currentOperand],
            percent: [this.calculatorState.currentOperand,
            ['sum', 'substract'].includes(this.calculatorState.operationType)
                ? this.calculatorState.leftOperand
                : null,
            ]
        };
        return commandsMap[command];
    }

    handleMemoryAndSpecialCommands(command, base, power) {
        const isResultOfCalculation = !this.calculatorState.operationType;

        if (!isResultOfCalculation && command.includes('memory_add') || command.includes('substract')) return;

        this.invoker.setCommand(this.commands[command]);
        this.executeCommand(command, base, power);
    }

    executeCommand(command, base, power) {
        const operands = this.getOperandsForCommand(command, base, power);

        if (operands) {
            const result = this.invoker.pressButton(...operands);
            this.calculatorState.currentOperand = result;
        } else {
            this.handleSpecialCommands(command);
        }
    }
    handleEqual() {
        this.calculateExpression();
        this.calculatorState.leftOperand = null;
    }

    calculateImmediately(command, base, power) {
        if (command === 'undo') {
            this.handleUndo();
        } else if (command === 'equal') {
            this.handleEqual();
        } else {
            this.handleMemoryAndSpecialCommands(command, base, power);
        }
    }

    handleUndo() {
        const result = this.invoker.pressUndo();
        this.calculatorState.currentOperand = result;
        this.calculatorState.leftOperand = result;
    }

}