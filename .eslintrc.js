/* eslint-disable prettier/prettier */
module.exports = {
    //不繼續往 parent level 檢查
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    //官方提供的 rule
    extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/prettier"],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        "no-console": "off",
        "vue/max-attributes-per-line": "off"
    }
};