const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

(async function () {
    const scriptId = await askQuestion('GASプロジェクトの Script ID を入力してください: ');
    const spreadsheetId = await askQuestion('スプレッドシートの ID を入力してください: ');

    // `.clasp.json` の作成
    const claspConfig = {
        scriptId,
        rootDir: './dist',
    };
    fs.writeFileSync('.clasp.json', JSON.stringify(claspConfig, null, 2));

    // `.env` の作成
    fs.writeFileSync('.env', `SPREADSHEET_ID="${spreadsheetId}"\n`);

    console.log('初期設定が完了しました。');
    rl.close();
})();
