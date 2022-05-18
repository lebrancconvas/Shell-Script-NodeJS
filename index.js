// const { token } = require("./token.js");
const shell = require('shelljs')
const argv = require('yargs')
    .usage('Usage: git-create-repo')
    .options({
        'u': {
            alias: 'user',
            describe: '--user [username]',
            demandOption: true
        },
        'repo': {
            alias: 'repo',
            describe: '--private [repository name]',
            demandOption: true
        },
        'private': {
            alias: 'private',
            describe: '--private [optional create private repo]'
        }
    })
    .argv

const curl = `curl -i -u lebrancconvas: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 https://api.github.com/users/lebrancconvas && curl -u '${argv.u}' https://api.github.com/user/repos -d "{\\\"name\\\":\\\"${argv.repo}\\\",\\\"private\\\":${argv.private === undefined ? false : true}}"`
shell.exec(curl)