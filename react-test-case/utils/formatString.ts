export const trimText = (value: string, length: number) => {
	return value && value.length >= length
		? `${value.substring(0, length)}...`
		: value;
};
