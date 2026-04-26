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

const resumeVariants = [
  { label: 'General Resume', file: 'JamesDeRaja_Resume.pdf' },
  { label: 'Unity Rendering Focus', file: 'JamesDeRaja_Resume_Unity-Rendering-Performance.pdf' },
  { label: 'XR Performance Focus', file: 'JamesDeRaja_Resume_XR-Performance-Engineer.pdf' },
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
          <BentoCard variant="featured" padding="lg" className="h-full flex flex-col gap-6">
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

            {/* Positioning statement */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Targeting rendering, XR performance, and real-time systems engineering roles — teams
                that prioritize frame budget discipline and profiler evidence as core engineering
                requirements.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="chip-glow rounded-full px-2.5 py-0.5 font-mono text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Resume variants card */}
        <motion.div
          className="lg:col-span-4 md:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="metric" padding="md" className="h-full flex flex-col gap-5">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Resume Variants
              </p>
              <div className="space-y-2.5">
                {resumeVariants.map((r) => (
                  <a
                    key={r.file}
                    href={`/resume/${r.file}`}
                    download
                    className="group flex items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-3 hover:border-neon/25 hover:bg-neon/[0.04] transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText size={13} className="text-slate-500 group-hover:text-neon transition-colors" />
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                        {r.label}
                      </span>
                    </div>
                    <Download size={12} className="text-slate-600 group-hover:text-neon transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Online resume */}
            <div className="border-t border-white/[0.05] pt-4">
              <SmartLink
                href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf"
                className="btn-primary flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium w-full"
              >
                <FileText size={14} />
                View Online
              </SmartLink>
            </div>

            {/* Availability status */}
            <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.05] px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-semibold text-emerald-400">Available</p>
              </div>
              <p className="text-[11px] text-slate-400">
                Senior roles · Remote worldwide · Open to relocation
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
