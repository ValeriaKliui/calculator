export const BUTTON_CLASS_DEFAULT = 'calculator__button';

export const ROUNDING_PRECISION = 10;

export const OPERATORS_SYMBOLS = {
	multiply: '×',
	sum: '+',
	divide: '÷',
	substract: '-',
	power: '^',
	root: '√',
};

export const BUTTONS_DATA = [
	{
		classExtra: 'button--undo',
		command: 'undo',
		text: 'undo',
	},
	{
		classExtra: '',
		command: 'memory_clear',
		text: 'mc',
	},
	{
		classExtra: '',
		command: 'clear',
		text: 'AC',
	},
	{
		classExtra: '',
		command: 'toggle',
		text: '+/-',
	},
	{
		classExtra: '',
		command: 'percent',
		text: '%',
	},
	{
		classExtra: '',
		command: 'divide',
		text: '÷',
	},
	{
		classExtra: '',
		command: 'memory_add',
		text: 'm+',
	},
	{
		classExtra: '',
		command: 'memory_substract',
		text: 'm-',
	},
	{
		classExtra: '',
		command: 'memory_recall',
		text: 'mr',
	},
	{
		classExtra: '',
		value: '7',
		text: '7',
	},
	{
		classExtra: '',
		value: '8',
		text: '8',
	},
	{
		classExtra: '',
		value: '9',
		text: '9',
	},
	{
		classExtra: '',
		command: 'substract',
		text: '—',
	},
	{
		classExtra: '',
		command: 'power',
		power: 2,
		text: '\\( x^2 \\)',
	},
	{
		classExtra: '',
		command: 'power',
		power: 3,
		text: '\\( x^3 \\)',
	},
	{
		classExtra: '',
		command: 'power',
		text: '\\( x^y \\)',
	},
	{
		classExtra: '',
		value: '4',
		text: '4',
	},
	{
		classExtra: '',
		value: '5',
		text: '5',
	},
	{
		classExtra: '',
		value: '6',
		text: '6',
	},
	{
		classExtra: '',
		command: 'multiply',
		text: '×',
	},
	{
		classExtra: '',
		command: 'power',
		base: 10,
		text: '\\( 10^x \\)',
	},
	{
		classExtra: '',
		command: 'divide',
		base: 1,
		text: '\\( 1/x \\)',
	},
	{
		classExtra: '',
		command: 'root',
		power: 2,
		text: '\\( \\sqrt[2]{x} \\)',
	},
	{
		classExtra: '',
		value: '1',
		text: '1',
	},
	{
		classExtra: '',
		value: '2',
		text: '2',
	},
	{
		classExtra: '',
		value: '3',
		text: '3',
	},
	{
		classExtra: '',
		command: 'sum',
		text: '+',
	},
	{
		classExtra: '',
		command: 'root',
		power: 3,
		text: '\\( \\sqrt[3]{x} \\)',
	},
	{
		classExtra: '',
		command: 'root',
		text: '\\( \\sqrt[y]{x} \\)',
	},
	{
		classExtra: '',
		command: 'factorial',
		text: '\\( x! \\)',
	},
	{
		classExtra: 'button--zero',
		value: '0',
		text: '0',
	},
	{
		classExtra: '',
		value: '.',
		text: '.',
	},
	{
		classExtra: 'button--equal',
		command: 'equal',
		text: '=',
	},
];
