import SmartLink from './SmartLink';

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-sm text-[#64748B] sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-xs">&copy; {new Date().getFullYear()} James De Raja</p>
        <div className="flex items-center gap-6">
          <SmartLink href="mailto:jamesderaja@gmail.com" className="transition hover:text-[#1D4ED8]">Email</SmartLink>
          <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="transition hover:text-[#1D4ED8]">LinkedIn</SmartLink>
          <SmartLink href="https://github.com/JamesDeRaja" className="transition hover:text-[#1D4ED8]">GitHub</SmartLink>
          <SmartLink href="/resume/viewer.html?file=JamesDeRaja_Resume_Unity-Rendering-Performance.pdf" className="transition hover:text-[#1D4ED8]">Resume</SmartLink>
        </div>
      </div>
    </footer>
  );
}
