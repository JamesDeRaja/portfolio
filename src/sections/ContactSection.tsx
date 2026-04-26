import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SmartLink from '../components/SmartLink';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const targetRoles = [
  'Rendering Engineer',
  'XR Performance Engineer',
  'Unity Engine Optimization',
  'Technical Artist (Performance)',
  'Graphics Programmer',
];

const links = [
  { href: 'mailto:jamesderaja@gmail.com', label: 'Email', icon: Mail, primary: true },
  { href: 'https://www.linkedin.com/in/james-de-raja/', label: 'LinkedIn', icon: Linkedin, primary: false },
  { href: 'https://github.com/JamesDeRaja', label: 'GitHub', icon: Github, primary: false },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-screen-2xl px-4 py-20 pb-24 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-neon/3 blur-[120px]" />
      </div>

      <SectionHeading
        eyebrow="Contact"
        title="Looking for someone who debugs frame pipelines for breakfast?"
      />

      <AnimatedSection>
        <div className="glass-card gradient-border rounded-2xl p-8">
          {/* Positioning statement */}
          <p className="text-base text-slate-300 leading-relaxed">
            I&apos;m targeting rendering, XR performance, and engine optimization roles —
            teams where measurable performance evidence is a priority.
            Open to <span className="font-medium text-white">remote work worldwide</span> and{' '}
            <span className="font-medium text-white">international relocation</span>.
          </p>

          {/* Target roles */}
          <div className="mt-6 flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <span key={role} className="chip-glow rounded-full px-3 py-1 font-mono text-xs">
                {role}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <SmartLink
                  href={link.href}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    link.primary
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                  aria-label={`${link.label} - James De Raja`}
                >
                  <link.icon size={16} />
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-50" />
                </SmartLink>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} />
            <span>Chennai, India &bull; Ready to relocate</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
