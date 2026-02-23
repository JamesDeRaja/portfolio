import SectionHeading from '../components/SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk performance engineering"
        subtitle="Available for technical discussions around real-time optimization, profiling strategy, and XR performance architecture."
      />
      <div className="flex flex-wrap gap-3">
        <a href="mailto:jamesderaja@gmail.com" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
          Email
        </a>
        <a href="https://www.linkedin.com/in/james-de-raja/?trk=opento_sprofile_details" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          LinkedIn
        </a>
        <a href="https://github.com/JamesDeRaja" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          GitHub
        </a>
      </div>
      <p className="mt-4 text-sm text-slate-600">Chennai, India</p>
    </section>
  );
}
