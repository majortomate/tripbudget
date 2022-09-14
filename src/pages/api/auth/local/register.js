/* eslint-disable import/no-anonymous-default-export */
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { findUserByEmail, registerUser } from '../../user/user.service';
import { sendMailSendGrid } from '../../../utils/mail';

export default async (req, res) => {
  const userData = req.body;
  const { email, password } = req.body;
  const userFound = await findUserByEmail(email);

  if (userFound) {
    return res.status(404).json({ message: 'User already registered' });
  }

  const emailHash = crypto.createHash('sha256')
    .update(userData.email)
    .digest('hex');

  userData.passwordResetToken = emailHash;
  userData.passwordResetExpires = Date.now() + 3_600_000 * 24; // 24 hour

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  userData.password = hash;

  try {
    const user = await registerUser(userData);
    // Send email to user
    const message = {
      from: '"no-reply" <cajaberu20@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: 'Activate account ', // Subject line
      template_id: 'd-67cc7f78c54441a7a5e94c6986640003', // template id
      dynamic_template_data: {
        firstName: user.firstName,
        url: `http://localhost:3000/api/auth/local/verify/${emailHash}`,
      },
    };

    await sendMailSendGrid(message);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
