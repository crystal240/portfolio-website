import React from 'react';
import { Mail, Download, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://img.crystaljupiter.com/about/documents/jingjing-wan-resume-2026.pdf';
    link.download = 'Designer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = 'https://img.crystaljupiter.com/about/documents/jingjing-wan-portfolio-2026.pdf';
    link.download = 'Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Linktree', href: 'https://linktr.ee' },
    { label: '小红书', href: 'https://www.xiaohongshu.com' },
  ];

  const skills = ['书籍装帧设计', '平面设计', '3D设计'];
  const tools = ['InDesign', 'Illustrator', 'Photoshop', 'Blender', 'AIGC', 'Figma'];

  return (
    <div className="page-transition min-h-screen pt-10 md:pt-20 pb-12 flex items-center">
      <div className="page-container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-8 md:gap-10 items-start">
          {/* 左侧头像 - 缩小 */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[240px] h-[300px] md:w-[270px] md:h-[360px] shrink-0">
              <div className="retro-border border-2 border-border overflow-hidden w-full h-full">
                <img
                  src="https://img.crystaljupiter.com/about/me.jpg"
                  alt="Designer Portrait"
                  className="w-full h-full object-cover block"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 min-w-0">
            {/* Bio */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-border" aria-hidden />
                <h2 className="editorial-heading text-xl font-semibold vintage-text">Bio</h2>
              </div>
              <p className="text-foreground text-sm leading-relaxed pl-6 border-l border-border">
                Hi！I'm crystal！一位自由设计者。我擅长书籍装帧、版式设计以及3D设计。
              </p>
            </section>

            {/* 极简分隔 */}
            <div className="flex items-center gap-2" aria-hidden>
              <span className="w-8 h-px bg-border" />
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="flex-1 h-px bg-border/60" />
            </div>

            {/* Education */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-border" aria-hidden />
                <h2 className="editorial-heading text-xl font-semibold vintage-text">Education</h2>
              </div>
              <ul className="space-y-2 pl-6 border-l border-border">
                <li>
                  <span className="font-medium text-sm">视觉传达设计（VCD）</span>
                  <span className="text-muted-foreground text-sm"> — 华东师范大学（ECNU）, 2019-2023</span>
                </li>
              </ul>
            </section>

            {/* 极简分隔 */}
            <div className="flex items-center gap-2" aria-hidden>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="flex-1 h-px bg-border/60" />
            </div>

            {/* Skills & Tools 合并 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-border" aria-hidden />
                <h2 className="editorial-heading text-xl font-semibold vintage-text">Skills & Tools</h2>
              </div>
              <div className="flex flex-wrap gap-2 pl-6 border-l border-border">
                {skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 retro-border border border-border text-xs font-medium retro-badge">
                    {s}
                  </span>
                ))}
                {tools.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide retro-badge">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* 极简分隔 */}
            <div className="flex items-center gap-2" aria-hidden>
              <span className="w-8 h-px bg-border" />
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              <span className="flex-1 h-px bg-border/60" />
            </div>

            {/* Contact + 下载 + 社交 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-border" aria-hidden />
                <h2 className="editorial-heading text-xl font-semibold vintage-text">Contact</h2>
              </div>
              <div className="pl-6 border-l border-border space-y-4">
                <a
                  href="mailto:hello@designer.com"
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  slzj921118@gmail.com / 498533484@qq.com
                </a>

                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={handleDownloadResume}
                    size="sm"
                    variant="outline"
                    className="retro-border border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs font-medium uppercase tracking-wider"
                  >
                    <Download size={14} className="mr-1.5" />
                    下载简历
                  </Button>
                  <Button
                    onClick={handleDownloadPortfolio}
                    size="sm"
                    variant="outline"
                    className="retro-border border border-border hover:bg-accent text-xs font-medium uppercase tracking-wider"
                  >
                    <FileImage size={14} className="mr-1.5" />
                    作品集
                  </Button>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 底部极简装饰线 */}
        <div className="mt-10 flex items-center justify-end gap-2" aria-hidden>
          <span className="w-12 h-px bg-border" />
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
        </div>
      </div>
    </div>
  );
};

export default About;
