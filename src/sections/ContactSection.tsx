import SectionHeading from '../components/SectionHeading';
import SmartLink from '../components/SmartLink';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk performance engineering"
        subtitle="Available for technical discussions around real-time optimization, profiling strategy, and XR performance architecture."
      />
      <div className="mb-6 flex flex-wrap gap-2">
        {['XR Rendering Optimization', 'Real-Time Performance Engineering', 'Graphics Systems & Profiling', 'Frame Pacing Research'].map((role) => (
          <span key={role} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800">
            {role}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <SmartLink href="mailto:jamesderaja@gmail.com" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700" aria-label="Send email to James De Raja">
          Email
        </SmartLink>
        <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700" aria-label="James De Raja on LinkedIn">
          LinkedIn
        </SmartLink>
        <SmartLink href="https://github.com/JamesDeRaja" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700" aria-label="James De Raja on GitHub">
          GitHub
        </SmartLink>
      </div>
      <p className="mt-4 text-sm text-slate-600">Chennai, India</p>
    </section>
  );
}
