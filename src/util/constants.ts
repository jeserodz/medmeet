import { object, string } from 'yup';

export const PHONE_REGEX =
  /^(1\s?)?(849\s?|809\s?|809|849)[\s\-]?\d{3}[\s\-]?\d{4}$/gm;

export const validationSchemas = {
  myProfileForm: object({
    first_name: string().required('Required field.'),
    last_name: string().required('Required field.'),
    email: string().email().required('Required field.'),
    phone: string()
      .transform((value) => (value ? value : null))
      .matches(PHONE_REGEX, 'Enter a valid phone number')
      .nullable(),
  }),
};
