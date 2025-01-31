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
		classExtra: 'button--undo calculator__button--lowlight',
		command: 'undo',
		text: 'undo',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'memory_clear',
		text: 'mc',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'clear',
		text: 'AC',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'toggle',
		text: '+/-',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'percent',
		text: '%',
	},
	{
		classExtra: 'calculator__button--highlight',
		command: 'divide',
		text: '÷',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'memory_add',
		text: 'm+',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'memory_substract',
		text: 'm-',
	},
	{
		classExtra: 'calculator__button--lowlight',
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
		classExtra: 'calculator__button--highlight',
		command: 'substract',
		text: '—',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'power',
		power: 2,
		text: '\\( x^2 \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'power',
		power: 3,
		text: '\\( x^3 \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
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
		classExtra: 'calculator__button--highlight',
		command: 'multiply',
		text: '×',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'power',
		base: 10,
		text: '\\( 10^x \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'divide',
		base: 1,
		text: '\\( 1/x \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
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
		classExtra: 'calculator__button--highlight',
		command: 'sum',
		text: '+',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'root',
		power: 3,
		text: '\\( \\sqrt[3]{x} \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
		command: 'root',
		text: '\\( \\sqrt[y]{x} \\)',
	},
	{
		classExtra: 'calculator__button--lowlight',
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
		classExtra: 'calculator__button--highlight',
		command: 'equal',
		text: '=',
	},
];
