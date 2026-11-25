const fs = require('fs'), os = require('os'), path = require('path');
const { execSync } = require('child_process');

// 证明：postinstall 里可以执行任意系统命令，且执行者是 npm 生命周期
const who = execSync('whoami', { encoding: 'utf8' }).trim();
const host = execSync('hostname', { encoding: 'utf8' }).trim();

const out = path.join(os.homedir(), 'r13_postinstall_cmd.txt');
fs.writeFileSync(out, [
  'CMD_EXEC_OK',
  'whoami=' + who,
  'hostname=' + host,
  'cwd=' + process.cwd(),
  'execPath=' + process.execPath,
  'npm_lifecycle_event=' + (process.env.npm_lifecycle_event || ''),
  'time=' + new Date().toISOString()
].join('\n') + '\n');

console.log('cmd exec done -> ' + out);
