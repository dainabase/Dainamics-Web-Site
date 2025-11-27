import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Link2,
  Check,
  Printer,
  QrCode,
  X,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  excerpt?: string;
  variant?: 'inline' | 'floating' | 'modal';
  showLabels?: boolean;
  className?: string;
}

interface ShareOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverColor: string;
  action: () => void;
  isEmail?: boolean;
}

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// Reddit icon component
const RedditIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

// Pinterest icon component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);

// QR Code generator (simple SVG based)
const generateQRCode = (url: string): string => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
};

// Generate mailto URL
const generateMailtoUrl = (title: string, url: string, excerpt?: string): string => {
  const subject = encodeURIComponent(`Article interessant : ${title}`);
  const shortExcerpt = excerpt ? excerpt.substring(0, 200) + (excerpt.length > 200 ? '...' : '') : '';
  const body = encodeURIComponent(
    `Bonjour,\n\nJe souhaitais partager cet article avec vous :\n\n"${title}"\n\n${shortExcerpt}\n\nLire l'article : ${url}\n\n---\nDAINAMICS - Intelligence Artificielle et Automatisation pour PME\nhttps://dainamics.ch`
  );
  return `mailto:?subject=${subject}&body=${body}`;
};

export const ShareButtons = ({
  title,
  url: propUrl,
  excerpt = '',
  variant = 'inline',
  showLabels = false,
  className = ''
}: ShareButtonsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [isFloatingExpanded, setIsFloatingExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const url = propUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const mailtoUrl = generateMailtoUrl(title, url, excerpt);

  const showShareNotif = useCallback((platform: string) => {
    setShowNotification(`Partage via ${platform}`);
    setTimeout(() => setShowNotification(null), 2000);
  }, []);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      showShareNotif('Lien copie');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      showShareNotif('Lien copie');
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url, showShareNotif]);

  const printArticle = useCallback(() => {
    showShareNotif('Impression');
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title} - DAINAMICS</title>
          <style>
            @page { margin: 2cm; }
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px 20px;
              line-height: 1.6;
              color: #1a1a1a;
            }
            h1 { font-size: 28px; margin-bottom: 20px; color: #0f172a; }
            .excerpt { font-size: 16px; color: #64748b; margin-bottom: 30px; font-style: italic; }
            .url { font-size: 12px; color: #94a3b8; margin-bottom: 20px; word-break: break-all; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
            .logo { font-weight: 700; color: #6366f1; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          ${excerpt ? `<p class="excerpt">${excerpt}</p>` : ''}
          <p class="url">${url}</p>
          <div class="footer">
            <p class="logo">DAINAMICS</p>
            <p>Intelligence Artificielle et Automatisation pour PME</p>
            <p>https://dainamics.ch</p>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }, [title, excerpt, url, showShareNotif]);

  // Share options - email has isEmail: true flag
  const shareOptions: ShareOption[] = [
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank', 'width=550,height=420');
        showShareNotif('Twitter');
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#004182]',
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=550,height=420');
        showShareNotif('LinkedIn');
      }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#0d65d9]',
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=550,height=420');
        showShareNotif('Facebook');
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]',
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n\n${url}`)}`, '_blank');
        showShareNotif('WhatsApp');
      }
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: TelegramIcon,
      color: 'bg-[#0088cc]',
      hoverColor: 'hover:bg-[#006699]',
      action: () => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        showShareNotif('Telegram');
      }
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: RedditIcon,
      color: 'bg-[#FF4500]',
      hoverColor: 'hover:bg-[#cc3700]',
      action: () => {
        window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank', 'width=550,height=420');
        showShareNotif('Reddit');
      }
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-[#E60023]',
      hoverColor: 'hover:bg-[#ad081b]',
      action: () => {
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`, '_blank', 'width=550,height=420');
        showShareNotif('Pinterest');
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      action: () => {},
      isEmail: true
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (floatingRef.current && !floatingRef.current.contains(event.target as Node)) {
        setIsFloatingExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // KEY FIX: Email uses <a href="mailto:..."> tag, others use <button>
  const renderShareButton = (option: ShareOption, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12' };
    const iconSizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };

    const buttonClasses = `
      ${sizeClasses[size]} ${option.color} ${option.hoverColor}
      rounded-full flex items-center justify-center
      transition-all duration-200 transform hover:scale-110
      shadow-lg hover:shadow-xl
    `;

    // EMAIL: Real <a> tag with href="mailto:..." - THIS IS THE FIX!
    if (option.isEmail) {
      return (
        <a
          key={option.id}
          href={mailtoUrl}
          className={buttonClasses}
          title={`Partager par ${option.name}`}
          onClick={() => showShareNotif('Email')}
        >
          <option.icon className={`${iconSizes[size]} text-white`} />
        </a>
      );
    }

    return (
      <motion.button
        key={option.id}
        onClick={option.action}
        className={buttonClasses}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={`Partager sur ${option.name}`}
      >
        <option.icon className={`${iconSizes[size]} text-white`} />
      </motion.button>
    );
  };

  // INLINE VARIANT
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50"
            >
              {showNotification}
            </motion.div>
          )}
        </AnimatePresence>

        <span className="text-white/60 text-sm font-medium flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Partager
        </span>

        <div className="flex items-center gap-2">
          {shareOptions.map((option) => renderShareButton(option, 'sm'))}
        </div>

        <motion.button
          onClick={copyToClipboard}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${copied ? 'bg-green-500' : 'bg-white/10 hover:bg-white/20'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Copier le lien"
        >
          {copied ? <Check className="w-4 h-4 text-white" /> : <Link2 className="w-4 h-4 text-white" />}
        </motion.button>

        <motion.button
          onClick={() => setShowQR(!showQR)}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Code QR"
        >
          <QrCode className="w-4 h-4 text-white" />
        </motion.button>

        <motion.button
          onClick={printArticle}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Imprimer"
        >
          <Printer className="w-4 h-4 text-white" />
        </motion.button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-full mt-4 left-0 bg-white rounded-2xl p-4 shadow-2xl z-50"
            >
              <p className="text-gray-800 text-sm font-medium mb-2 text-center">Scannez pour partager</p>
              <img src={generateQRCode(url)} alt="QR Code" className="w-40 h-40 rounded-lg" />
              <button onClick={() => setShowQR(false)} className="mt-2 w-full text-center text-gray-500 hover:text-gray-700 text-sm">Fermer</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // FLOATING VARIANT
  if (variant === 'floating') {
    return (
      <>
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50"
            >
              {showNotification}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={floatingRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 ${className}`}
        >
          <motion.button
            onClick={() => setIsFloatingExpanded(!isFloatingExpanded)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: isFloatingExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isFloatingExpanded ? <X className="w-5 h-5 text-white" /> : <Share2 className="w-5 h-5 text-white" />}
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isFloatingExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col gap-2 bg-dark-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl"
              >
                {shareOptions.map((option) => renderShareButton(option, 'md'))}
                <div className="w-full h-px bg-white/10 my-1" />
                <motion.button
                  onClick={copyToClipboard}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${copied ? 'bg-green-500' : 'bg-white/10 hover:bg-white/20'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Copier le lien"
                >
                  {copied ? <Check className="w-5 h-5 text-white" /> : <Link2 className="w-5 h-5 text-white" />}
                </motion.button>
                <motion.button
                  onClick={() => setShowQR(!showQR)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Code QR"
                >
                  <QrCode className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={printArticle}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Imprimer"
                >
                  <Printer className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                className="absolute left-full ml-4 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <p className="text-gray-800 text-sm font-medium mb-2 text-center">Scannez pour partager</p>
                <img src={generateQRCode(url)} alt="QR Code" className="w-40 h-40 rounded-lg" />
                <button onClick={() => setShowQR(false)} className="mt-2 w-full text-center text-gray-500 hover:text-gray-700 text-sm">Fermer</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </>
    );
  }

  // MODAL VARIANT
  return (
    <>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-[60]"
          >
            {showNotification}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowModal(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-200 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Share2 className="w-4 h-4" />
        {showLabels && <span>Partager</span>}
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <ShareModal
            title={title}
            url={url}
            mailtoUrl={mailtoUrl}
            shareOptions={shareOptions}
            onClose={() => setShowModal(false)}
            onCopyLink={copyToClipboard}
            onPrint={printArticle}
            copied={copied}
            showShareNotif={showShareNotif}
            renderShareButton={renderShareButton}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface ShareModalProps {
  title: string;
  url: string;
  mailtoUrl: string;
  shareOptions: ShareOption[];
  onClose: () => void;
  onCopyLink: () => void;
  onPrint: () => void;
  copied: boolean;
  showShareNotif: (platform: string) => void;
  renderShareButton: (option: ShareOption, size: 'sm' | 'md' | 'lg') => JSX.Element;
}

const ShareModal = ({ title, url, shareOptions, onClose, onCopyLink, onPrint, copied, renderShareButton }: ShareModalProps) => {
  const [showQR, setShowQR] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-md bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-6 shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Share2 className="w-5 h-5 text-primary" />
            Partager cet article
          </h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="bg-white/5 rounded-xl p-4 mb-6">
          <p className="text-white font-medium text-sm line-clamp-2 mb-2">{title}</p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            {url.replace(/^https?:\/\//, '').substring(0, 40)}...
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {shareOptions.map((option) => (
            <div key={option.id} className="flex flex-col items-center gap-2">
              {renderShareButton(option, 'lg')}
              <span className="text-white/60 text-xs">{option.name}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mb-4">
          <motion.button
            onClick={onCopyLink}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? <><Check className="w-4 h-4" />Copie !</> : <><Link2 className="w-4 h-4" />Copier le lien</>}
          </motion.button>
          <motion.button
            onClick={() => setShowQR(!showQR)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${showQR ? 'bg-primary text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <QrCode className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={onPrint}
            className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Printer className="w-5 h-5" />
          </motion.button>
        </div>

        <AnimatePresence>
          {showQR && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                <img src={generateQRCode(url)} alt="QR Code" className="w-48 h-48 rounded-lg" />
                <p className="text-gray-600 text-sm mt-2">Scannez pour ouvrir</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-white/40 text-xs mt-4">Partagez cet article avec votre reseau</p>
      </motion.div>
    </motion.div>
  );
};

export default ShareButtons;
