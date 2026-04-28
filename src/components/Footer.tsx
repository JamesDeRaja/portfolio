import SmartLink from './SmartLink';
import { Linkedin, Github, Mail, Gamepad2, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/5 bg-void-950">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs">&copy; {new Date().getFullYear()} James De Raja</p>
        <div className="flex items-center gap-6">
          <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="transition hover:text-neon" aria-label="LinkedIn">
            <Linkedin size={16} />
          </SmartLink>
          <SmartLink href="https://github.com/JamesDeRaja" className="transition hover:text-neon" aria-label="GitHub">
            <Github size={16} />
          </SmartLink>
          <SmartLink href="https://jamesderaja.itch.io/" className="transition hover:text-neon" aria-label="itch.io">
            <Gamepad2 size={16} />
          </SmartLink>
          <SmartLink href="https://play.google.com/store/apps/dev?id=8149791665541446457" className="transition hover:text-neon" aria-label="Google Play developer profile">
            <Smartphone size={16} />
          </SmartLink>
          <SmartLink href="https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884" className="transition hover:text-neon" aria-label="App Store profile">
            <Smartphone size={16} />
          </SmartLink>
          <SmartLink href="mailto:jamesderaja@gmail.com" className="transition hover:text-neon" aria-label="Email">
            <Mail size={16} />
          </SmartLink>
          <SmartLink href="/resume/JamesDeRaja_Resume.pdf" className="transition hover:text-neon">Resume (PDF)</SmartLink>
        </div>
      </div>
    </footer>
  );
}
