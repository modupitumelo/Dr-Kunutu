/**
 * Central practice configuration.
 *
 * Update practice details here — they flow through every component on the site.
 * The professional email is left as a placeholder domain so the practice can
 * later switch to info@[domain].co.za or appointments@[domain].co.za without
 * touching component code.
 */

export const practice = {
  name: 'Dr Kunutu OBGYN – Inc.',
  doctorName: 'Dr T. Kunutu',
  // Professional domain-based email placeholder. Replace `[domain]` with the
  // registered practice domain when it becomes available.
  domainEmail: 'info@[domain].co.za',
  // Active contact email used across the site today.
  email: 'hello@drkunutu.co.za',
  phone: '068 695 5366',
  // E.164 for click-to-call / WhatsApp links
  phoneE164: '+27686955366',
  whatsapp: '27686955366',
  practiceNumber: '1360604',
  qualifications: ['MBChB(SMU)', 'MMed(O&G)(UP)', 'FCOG(SA)'],
  designation: 'Specialist Obstetrician & Gynaecologist',
  address: {
    hospital: 'Mogalakwena Private Hospital',
    street: 'CNR Dudu Madisha and Geyser',
    town: 'Mokopane',
    postalCode: '0601',
  },
  // Editable placeholder hours — replace with confirmed practice hours.
  hours: [
    { day: 'Monday – Friday', time: '08:00 – 17:00' },
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  social: {
    // Placeholder social links — populate once official accounts are created.
    facebook: '',
    instagram: '',
    linkedin: '',
  },
  mapsQuery: 'Mogalakwena Private Hospital, Mokopane, 0601',
};

export type PracticeInfo = typeof practice;
