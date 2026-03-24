import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const INTERNAL_HOSTNAMES = new Set(['jamesderaja.com', 'www.jamesderaja.com']);

function isHttpUrl(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function getInternalPathIfSameSite(href: string) {
  if (!isHttpUrl(href)) return null;

  try {
    const url = new URL(href);
    if (INTERNAL_HOSTNAMES.has(url.hostname)) {
      return `${url.pathname}${url.search}${url.hash}`;
    }

    if (typeof window !== 'undefined' && url.origin === window.location.origin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch {
    return null;
  }

  return null;
}

export default function SmartLink({ href, children, rel, ...rest }: SmartLinkProps) {
  const isPdf = /\.pdf($|[?#])/i.test(href);

  if (isPdf) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (href.startsWith('#') || href.startsWith('mailto:')) {
    return (
      <a href={href} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  const internalPath = getInternalPathIfSameSite(href);
  if (internalPath) {
    return (
      <Link to={internalPath} {...rest}>
        {children}
      </Link>
    );
  }

  if (isHttpUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} rel={rel} {...rest}>
      {children}
    </a>
  );
}
