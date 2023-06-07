import md5 from "md5";

export class HashUtils {
  generateShortHash(text: string) {
    return md5(text);
  }
}

export const hashUtils = new HashUtils();
