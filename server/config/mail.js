/* eslint-disable import/prefer-default-export */
const sendgrid = require('@sendgrid/mail');

export const sendMailSendGrid = (data) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  return sendgrid.send(data);
};
