import React, { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

interface ImagePreviewProps {
  src?: string;
  alt?: string;
  className?: string;
  /**
   * 首屏优先：为 true 时使用 loading="eager" 与 fetchPriority="high"
   */
  priority?: boolean;
  /**
   * 透传给缩略图 <img> 的 onLoad，用于读取 naturalWidth/Height 做自适应布局
   */
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
  alt = 'Preview image',
  className = '',
  priority = false,
  onLoad,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setOpen(true)}
        onLoad={onLoad}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="!left-0 !top-0 !right-0 !bottom-0 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !max-h-none !p-0 bg-white border-0 shadow-none overflow-auto rounded-none"
        >
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 hover:opacity-100 text-foreground hover:bg-black/5 p-2 transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="fixed inset-0 flex items-center justify-center p-6 box-border">
            {/* 仅打开弹窗时才渲染并加载大图，且异步解码 */}
            {open && (
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                decoding="async"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImagePreview;