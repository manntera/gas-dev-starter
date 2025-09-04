declare const global: any;

export const main = (): void => {
    Logger.log('Hello, World!');
};

// 念のため手動でGASのグローバルへ公開
global.main = main;
