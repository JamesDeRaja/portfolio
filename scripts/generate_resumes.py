from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'public' / 'resume' / 'src'
OUT = ROOT / 'public' / 'resume'

FILES = [
    ('JamesDeRaja_Resume_XR-Performance-Engineer.md', 'JamesDeRaja_Resume.pdf'),
    ('JamesDeRaja_Resume_XR-Performance-Engineer.md', 'JamesDeRaja_Resume_XR-Performance-Engineer.pdf'),
    ('JamesDeRaja_Resume_Unity-Rendering-Performance.md', 'JamesDeRaja_Resume_Unity-Rendering-Performance.pdf'),
    ('JamesDeRaja_Resume_Performance-Systems.md', 'JamesDeRaja_Resume_Performance-Systems.pdf'),
]

def markdown_to_lines(text: str):
    lines = []
    for raw in text.splitlines():
        line = raw.strip().replace('**', '')
        if not line:
            lines.append('')
            continue
        if line.startswith('# '):
            lines.append(line[2:].upper())
            continue
        if line.startswith('## '):
            lines.append('')
            lines.append(line[3:].upper())
            continue
        if line.startswith('- '):
            lines.append(f'- {line[2:]}')
            continue
        lines.append(line)
    return lines


def write_pdf(lines, path: Path):
    c = canvas.Canvas(str(path), pagesize=LETTER)
    width, height = LETTER
    left = 0.75 * inch
    top = height - 0.75 * inch
    y = top

    for line in lines:
        font = 'Helvetica'
        size = 10.5
        if line.isupper() and len(line.split()) <= 8:
            font = 'Helvetica-Bold'
            size = 11.5
        if line == '':
            y -= 8
            if y < 0.75 * inch:
                c.showPage()
                y = top
            continue

        # basic wrapping
        words = line.split(' ')
        current = ''
        for word in words:
            candidate = (current + ' ' + word).strip()
            if c.stringWidth(candidate, font, size) <= (width - 1.5 * inch):
                current = candidate
            else:
                c.setFont(font, size)
                c.drawString(left, y, current)
                y -= 14
                if y < 0.75 * inch:
                    c.showPage()
                    y = top
                current = word
        if current:
            c.setFont(font, size)
            c.drawString(left, y, current)
            y -= 14
            if y < 0.75 * inch:
                c.showPage()
                y = top

    c.save()


def main():
    try:
        import reportlab  # noqa
    except Exception as exc:
        raise SystemExit('reportlab is required') from exc

    for src_name, out_name in FILES:
        text = (SRC / src_name).read_text(encoding='utf-8')
        lines = markdown_to_lines(text)
        write_pdf(lines, OUT / out_name)


if __name__ == '__main__':
    main()
