import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Download, ArrowUpRight, FileText } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';

const contactLinks = [
  {
    href: 'mailto:jamesderaja@gmail.com',
    label: 'jamesderaja@gmail.com',
    icon: Mail,
    primary: true,
  },
  {
    href: 'https://www.linkedin.com/in/james-de-raja/',
    label: 'LinkedIn',
    icon: Linkedin,
    primary: false,
  },
  {
    href: 'https://github.com/JamesDeRaja',
    label: 'GitHub',
    icon: Github,
    primary: false,
  },
];

const targetRoles = [
  'Senior Unity Engineer',
  'Unity Performance Engineer',
  'XR Performance Engineer',
  'Rendering Engineer',
  'Real-Time Systems Engineer',
  'Technical Lead, Unity',
];

const quickFitRows = [
  '13+ years Unity / real-time systems',
  'XR, rendering, ECS, multiplayer',
  'Open to remote worldwide + relocation',
];

const proofLinks = [
  { label: 'View Case Studies', href: '#case-studies' },
  { label: 'View GitHub', href: 'https://github.com/JamesDeRaja' },
  { label: 'View LinkedIn', href: 'https://www.linkedin.com/in/james-de-raja/' },
];

export default function ContactBentoSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-screen-2xl px-4 py-20 pb-24 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-neon/3 blur-[120px]" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Let's talk performance engineering
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Open to remote roles worldwide and international relocation. Senior Unity, XR, and rendering
          engineering positions where measurable performance evidence is a priority.
        </p>
      </motion.div>

      <BentoGrid>
        {/* Main contact card */}
        <motion.div
          className="lg:col-span-8 md:col-span-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="featured" padding="lg" className="h-full flex flex-col gap-5">
            {/* Contact links */}
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Get in Touch
              </p>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <SmartLink
                    key={link.label}
                    href={link.href}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      link.primary ? 'btn-primary' : 'btn-secondary'
                    }`}
                    aria-label={link.label}
                  >
                    <link.icon size={15} />
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-50" />
                  </SmartLink>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={14} />
              <span>Chennai, India · Open to remote worldwide and international relocation</span>
            </div>

            {/* Target roles */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Target Roles
              </p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {targetRoles.join(' · ')}
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* Recruiter packet card */}
        <motion.div
          className="lg:col-span-4 md:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="metric" padding="md" className="h-full flex flex-col gap-4 lg:gap-5 lg:px-6 lg:py-6">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Application Packet
              </p>
              <div className="space-y-3">
                <a
                  href="/resume/James%20DeRaja%20Resume.pdf"
                  download
                  className="btn-primary group flex h-14 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium"
                >
                  <Download size={15} />
                  Download Resume
                </a>
                <SmartLink
                  href="/resume/viewer.html?file=James%20DeRaja%20Resume.pdf"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-indigo-300 transition-all hover:border-indigo-300/40 hover:text-indigo-200"
                >
                  <FileText size={14} />
                  View Online
                </SmartLink>
              </div>
            </div>

            {/* Quick fit summary */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Quick Fit
              </p>
              <div className="mt-2 space-y-1.5">
                {quickFitRows.map((row) => (
                  <p key={row} className="text-xs text-slate-300 leading-relaxed">
                    {row}
                  </p>
                ))}
              </div>
            </div>

            {/* Best fit */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Best Fit
              </p>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Rendering · XR Performance · Unity Systems · Technical Lead
              </p>
            </div>

            {/* Proof links */}
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2.5">
                Proof Links
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-1">
                {proofLinks.map((link) => (
                  <SmartLink
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-indigo-300 transition-all hover:border-indigo-300/40 hover:text-indigo-200"
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </SmartLink>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.05] px-4 py-2.5">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-semibold text-emerald-400">Available</p>
              </div>
              <p className="text-[11px] text-slate-400">
                Senior roles · Remote worldwide · Relocation open
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
