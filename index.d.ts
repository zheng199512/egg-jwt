import { SignOptions, SignCallback, VerifyOptions, VerifyCallback } from 'jsonwebtoken';
declare module 'egg' {
  interface Application {
    jwt: {
      /**
       *
       * @param payload datas. datas to be signed
       * @param secretOrPrivateKey secret key. string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      sign(
        payload: string | Buffer | object,
        secretOrPrivateKey: string,
        options?: SignOptions,
        callback?: SignCallback
      ): string;
      /**
       *
       * @param token jwt token. 
       * @param secretOrPrivateKey secret key。string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      verify(token: string, secretOrPrivateKey: string, options?: VerifyOptions, callback?: VerifyCallback): string;
    };
  }
  interface EggAppConfig {
    jwt: {
      secret: string;
      enable?: boolean;
      sign?: SignOptions;
      verify?: VerifyOptions;
    };
  }
}
