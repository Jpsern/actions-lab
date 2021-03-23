// 外から渡す
const fuga = process.env.hoge;
console.log(fuga);

const splited = process.env.GITHUB_REPOSITORY.split("/");
const [ owner, repo ] = process.env.GITHUB_REPOSITORY.split("/");

console.log(splited);
console.log(owner);
console.log(repo);
