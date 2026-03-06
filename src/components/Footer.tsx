import SmartLink from './SmartLink';

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} James De Raja</p>
        <div className="flex items-center gap-4">
          <SmartLink href="mailto:jamesderaja@gmail.com" className="hover:text-cyan-700">Email</SmartLink>
          <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="hover:text-cyan-700">LinkedIn</SmartLink>
          <SmartLink href="https://github.com/JamesDeRaja" className="hover:text-cyan-700">GitHub</SmartLink>
          <SmartLink href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf" className="hover:text-cyan-700">Resume</SmartLink>
        </div>
      </div>
    </footer>
  );
}
