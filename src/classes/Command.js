export class Command {
	execute() {
		throw 'Method execute() should be implemented by subclasses';
	}
	undo() {
		throw 'Method undo() should be implemented by subclasses';
	}
}
