import { messagesReducer } from "./chatsReducer";
import expect from 'expect';
import { CHANGE_MESSAGES } from "../actionTypes";

describe('messages reducer', () => {
    it('should return the initial state', () => {
      expect(messagesReducer({}, CHANGE_MESSAGES)).toEqual({});
    });
});