import crypto from 'crypto';

const algorithm = 'aes-256-cbc';

const secretKey = crypto
  .createHash('sha256')
  .update('MySecretKey')
  .digest();

const iv = Buffer.alloc(16, 0);

export class encryptionUtil{

  static encrypt(text: string): string {
    const cipher = crypto.createCipheriv(
      algorithm,
      secretKey,
      iv
    );

    let encrypted = cipher.update(
      text,
      'utf8',
      'hex'
    );

    encrypted += cipher.final('hex');

    return encrypted;
  }

  static decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      iv
    );

    let decrypted = decipher.update(
      encryptedText,
      'hex',
      'utf8'
    );

    decrypted += decipher.final('utf8');

    return decrypted;
  }
}