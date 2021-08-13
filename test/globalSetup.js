import { exec } from 'child_process'

module.exports = async() => {
  console.log('Running db migration before testing');

  exec('npx run dotenv -e .env.test -- npx prisma migrate dev --name test-mig', (error, stdout, stderr) => {
    console.log(stdout);

    if (error)
      console.log(error);
      
    if (stderr)
      console.log(stderr);
  });
}
