import SmartLink from './SmartLink';

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/5 bg-void-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs">&copy; {new Date().getFullYear()} James De Raja</p>
        <div className="flex items-center gap-6">
          <SmartLink href="mailto:jamesderaja@gmail.com" className="transition hover:text-neon">Email</SmartLink>
          <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="transition hover:text-neon">LinkedIn</SmartLink>
          <SmartLink href="https://github.com/JamesDeRaja" className="transition hover:text-neon">GitHub</SmartLink>
          <SmartLink href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf" className="transition hover:text-neon">Resume PDF</SmartLink>
          <SmartLink href="/#work" className="transition hover:text-neon">Case Studies</SmartLink>
        </div>
      </div>
    </footer>
  );
}
