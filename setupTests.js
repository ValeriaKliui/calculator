global.alert = jest.fn();

beforeEach(() => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	global.alert = jest.fn();
});

afterEach(() => {
	jest.restoreAllMocks();
});
