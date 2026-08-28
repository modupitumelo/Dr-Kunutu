import type { LucideIcon } from 'lucide-react';
import {
  HeartPulse,
  Activity,
  ShieldCheck,
  Baby,
  Stethoscope,
  CalendarHeart,
  ClipboardList,
  Flower2,
  Syringe,
  Microscope,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Obstetrics' | 'Gynaecology';
};

export const services: Service[] = [
  {
    id: 'antenatal-care',
    title: 'Antenatal Care',
    description:
      'Comprehensive prenatal monitoring throughout your pregnancy, supporting the health of both mother and baby at every milestone.',
    icon: Baby,
    category: 'Obstetrics',
  },
  {
    id: 'pregnancy-monitoring',
    title: 'Pregnancy Monitoring',
    description:
      'Regular assessments and ultrasound-guided checks to track your baby’s growth and wellbeing, with attentive, personalised follow-up.',
    icon: Activity,
    category: 'Obstetrics',
  },
  {
    id: 'high-risk-pregnancy',
    title: 'High-Risk Pregnancy Care',
    description:
      'Specialist management for pregnancies that require closer observation, providing expert guidance and reassurance through complex care needs.',
    icon: ShieldCheck,
    category: 'Obstetrics',
  },
  {
    id: 'prenatal-consultations',
    title: 'Prenatal Consultations',
    description:
      'Dedicated time to discuss your pregnancy, answer your questions, and plan your care pathway in a calm, unhurried setting.',
    icon: CalendarHeart,
    category: 'Obstetrics',
  },
  {
    id: 'postnatal-care',
    title: 'Postnatal Care',
    description:
      'Continued support after delivery — monitoring recovery, addressing concerns, and supporting the wellbeing of mother and newborn.',
    icon: HeartPulse,
    category: 'Obstetrics',
  },
  {
    id: 'general-gynae',
    title: 'General Gynaecological Consultations',
    description:
      'Confidential consultations for a wide range of women’s health concerns, delivered with sensitivity and clinical expertise.',
    icon: Stethoscope,
    category: 'Gynaecology',
  },
  {
    id: 'womens-health-assessments',
    title: "Women's Health Assessments",
    description:
      'Preventative evaluations and health screening tailored to your stage of life, helping you stay informed and proactive about your health.',
    icon: ClipboardList,
    category: 'Gynaecology',
  },
  {
    id: 'menstrual-health',
    title: 'Menstrual Health Concerns',
    description:
      'Assessment and management of menstrual irregularities and related concerns, with a thoughtful, individualised approach.',
    icon: Flower2,
    category: 'Gynaecology',
  },
  {
    id: 'gynae-conditions',
    title: 'Gynaecological Conditions',
    description:
      'Diagnosis and management of gynaecological conditions, supported by clear explanation and a shared decision-making process.',
    icon: Microscope,
    category: 'Gynaecology',
  },
  {
    id: 'preventative-healthcare',
    title: 'Preventative Women’s Healthcare',
    description:
      'Screening and preventative guidance designed to support long-term wellbeing and early detection across every life stage.',
    icon: Syringe,
    category: 'Gynaecology',
  },
];

export const serviceCategories: ('Obstetrics' | 'Gynaecology')[] = ['Obstetrics', 'Gynaecology'];
