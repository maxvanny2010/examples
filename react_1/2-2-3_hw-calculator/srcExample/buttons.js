import { handleMinus, handleNum, handlePlus, handleReset, handleResult } from './handlers';
import { BUTTON_GROUP, COMMAND, NUM, OPERATOR } from './constants';

export const buttons = [
	{
		id: NUM.ONE,
		name: NUM.ONE,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.TWO,
		name: NUM.TWO,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.THREE,
		name: NUM.THREE,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.FOUR,
		name: NUM.FOUR,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.FIVE,
		name: NUM.FIVE,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.SIX,
		name: NUM.SIX,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.SEVEN,
		name: NUM.SEVEN,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.EIGHT,
		name: NUM.EIGHT,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.NINE,
		name: NUM.NINE,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: NUM.ZERO,
		name: NUM.ZERO,
		group: BUTTON_GROUP.LEFT,
		handler: handleNum,
	},
	{
		id: COMMAND.RESET,
		name: COMMAND.RESET,
		group: BUTTON_GROUP.LEFT,
		handler: handleReset,
	},
	{
		id: OPERATOR.PLUS,
		name: OPERATOR.PLUS,
		group: BUTTON_GROUP.RIGHT,
		handler: handlePlus,
	},
	{
		id: OPERATOR.MINUS,
		name: OPERATOR.MINUS,
		group: BUTTON_GROUP.RIGHT,
		handler: handleMinus,
	},
	{
		id: COMMAND.RESULT,
		name: COMMAND.RESULT,
		group: BUTTON_GROUP.RIGHT,
		handler: handleResult,
	},
];
