import readline from 'readline';
import { encryptionUtil } from './utils/encryptionUtil';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter password to encrypt: ', (password) => {
  const encryptedPassword = encryptionUtil.encrypt(password);

  console.log('\nEncrypted Password:');
  console.log(encryptedPassword);
  console.log('\n**************** NOTE: Ensure that the generated encrypted password above is copied to the [Password] field of the appropriate test data associated with the intended test case. ****************\n');

  rl.close();
});