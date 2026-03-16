import React, { useState } from 'react';
import MasonryGrid from '@/components/MasonryGrid';
import ImagePreview from '@/components/ImagePreview';
import { AIGCProject } from '@/types/portfolio';

const AIGC: React.FC = () => {
  console.log('AIGC page rendered');

  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  const applicationProjects = [
    {
      id: 'app1',
      title: 'AI Brand Design System',
      designImage: 'https://img.crystaljupiter.com/aigc/practical/practical (1).png',
      posterImage: 'https://img.crystaljupiter.com/aigc/practical/practicaldone (1).jpg',
      description: 'Complete brand identity generated with AI'
    },
    {
      id: 'app2',
      title: 'Product Visualization AI',
      designImage: 'https://img.crystaljupiter.com/aigc/practical/practical (2).png',
      posterImage: 'https://img.crystaljupiter.com/aigc/practical/practicaldone (2).jpg',
      description: '3D product renders from AI prompts'
    }
  ];

  const staticProjects: AIGCProject[] = [
    {
      id: '1',
      title: 'Surreal Landscape',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (1).jpg',  // 
      description: 'AI-generated dreamscape'
    },
    {
      id: '2',
      title: 'Abstract Forms',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (2).jpg',  // 
      description: 'Geometric abstraction'
    },
    {
      id: '3',
      title: 'Digital Nature',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (3).jpg',  // 
      description: 'Natural forms reimagined'
    },
    {
      id: '4',
      title: 'Color Study',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (4).jpg',  // 
      description: 'Chromatic exploration'
    },
    {
      id: '5',
      title: 'Texture Synthesis',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (5).jpg',  // 
      description: 'Material studies'
    },
    {
      id: '6',
      title: 'Pattern Generation',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (6).jpg',  // 
      description: 'Algorithmic patterns'
    },
    {
      id: '7',
      title: 'AI-generated Image',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (7).jpg',  // 
      description: 'AI-generated image'
    },
    {
      id: '8',
      title: 'AI-generated Image',
      image: 'https://img.crystaljupiter.com/aigc/generated/aigc (8).jpg',  // 
      description: 'AI-generated image'
    },
  ];

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="page-container">
        <div className="mb-12">
          <h1 className="editorial-heading text-6xl mb-4 vintage-text">AIGC</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            AIGC探索与应用
            <br />
            AI-generated content and experimental digital art explorations.
          </p>
        </div>

        <section className="mb-20">
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">实践应用 · Practical Applications</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {applicationProjects.map((project, index) => {
              const isHovered = hoveredApp === project.id;
              const displayImage = isHovered ? project.posterImage : project.designImage;

              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden bg-muted retro-border border-2 border-border w-fit max-w-full"
                  onMouseEnter={() => setHoveredApp(project.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <img
                    src={displayImage}
                    alt={project.title}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className="w-full h-auto object-cover transition-all duration-500 block"
                  />
                  <div
                    className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-500 cursor-pointer"
                    onClick={() => {
                      const previewImg = document.createElement('img');
                      previewImg.src = project.posterImage;
                      previewImg.alt = project.title;
                      previewImg.className = 'max-w-full max-h-[90vh] object-contain';
                      
                      const overlay = document.createElement('div');
                      overlay.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
                      overlay.onclick = () => overlay.remove();
                      
                      const closeBtn = document.createElement('button');
                      closeBtn.innerHTML = '×';
                      closeBtn.className = 'absolute top-4 right-4 text-white text-4xl w-12 h-12 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors';
                      closeBtn.onclick = () => overlay.remove();
                      
                      overlay.appendChild(previewImg);
                      overlay.appendChild(closeBtn);
                      document.body.appendChild(overlay);
                    }}
                  >
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="editorial-heading text-3xl mx-6 vintage-text">LibLib & Midjourney</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <MasonryGrid columns={5}>
            {staticProjects.map((project, index) => (
              <div key={project.id} className="masonry-item group">
                <div className="relative overflow-hidden bg-muted retro-border border-2 border-border w-fit max-w-full">
                  <ImagePreview
                    src={project.image}
                    alt={project.title}
                    priority={index === 0}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              </div>
            ))}
          </MasonryGrid>
        </section>
      </div>
    </div>
  );
};

export default AIGC;