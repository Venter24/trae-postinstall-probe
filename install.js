const fs = require('fs'), os = require('os'), path = require('path');
const out = path.join(os.homedir(), 'r13_postinstall_proof.txt');
fs.writeFileSync(out, 'POSTINSTALL_RCE host=' + os.hostname() + ' user=' + os.userInfo().username + ' time=' + new Date().toISOString() + '\n');
console.log('postinstall done -> ' + out);
