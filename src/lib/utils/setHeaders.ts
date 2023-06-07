import { RequestMethods } from "../../@types";
import { RootState, store } from "../../app/store/store";
import { hashUtils } from "./hashUtils";

export function setHeaders(method: RequestMethods, url: string, body?: object) {
  const state = store.getState() as RootState;
  const key: string = state.auth.user ? state.auth.user.key : "";
  const secret = state.auth.user ? state.auth.user.secret : "";
  const hashString = body
    ? `${method}/${url}${JSON.stringify(body)}${secret}`
    : `${method}/${url}${secret}`;
  const hash = hashUtils.generateShortHash(hashString);

  return {
    key,
    sign: hash,
  };
}
