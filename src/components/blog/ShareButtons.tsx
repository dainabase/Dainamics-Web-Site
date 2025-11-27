import { useState, useCallback, useEffect } from 'react';
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
  icon: React.ComponentType&lt;{ className?: string }&gt;;
  color: string;
  hoverColor: string;
  action: (title: string, url: string, excerpt?: string) =&gt; void;
}

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) =&gt; (
  &lt;svg className={className} viewBox="0 0 24 24" fill="currentColor"&gt;
    &lt;path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/&gt;
  &lt;/svg&gt;
);

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) =&gt; (
  &lt;svg className={className} viewBox="0 0 24 24" fill="currentColor"&gt;
    &lt;path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/&gt;
  &lt;/svg&gt;
);

// Reddit icon component
const RedditIcon = ({ className }: { className?: string }) =&gt; (
  &lt;svg className={className} viewBox="0 0 24 24" fill="currentColor"&gt;
    &lt;path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/&gt;
  &lt;/svg&gt;
);

// Pinterest icon component  
const PinterestIcon = ({ className }: { className?: string }) =&gt; (
  &lt;svg className={className} viewBox="0 0 24 24" fill="currentColor"&gt;
    &lt;path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/&gt;
  &lt;/svg&gt;
);

const ShareButtons = ({
  title,
  url,
  excerpt = '',
  variant = 'inline',
  showLabels = false,
  className = ''
}: ShareButtonsProps) =&gt; {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [shareNotification, setShareNotification] = useState&lt;string | null&gt;(null);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  // Show notification after share
  const showShareNotif = useCallback((platform: string) =&gt; {
    setShareNotification(`Partagé sur ${platform}`);
    setTimeout(() =&gt; setShareNotification(null), 2000);
  }, []);

  // Track scroll for floating variant
  useEffect(() =&gt; {
    if (variant !== 'floating') return;

    const handleScroll = () =&gt; {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowFloating(scrollY &gt; 400);
      setIsAtBottom(scrollY + windowHeight &gt; documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () =&gt; window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  // Email handler - Robust method for Safari/Mac
  const handleEmailShare = useCallback(() =&gt; {
    const cleanTitle = title
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâäã]/g, 'a')
      .replace(/[ùûü]/g, 'u')
      .replace(/[îïì]/g, 'i')
      .replace(/[ôöò]/g, 'o')
      .replace(/[ç]/g, 'c');
    
    const subject = `Article interessant : ${cleanTitle}`;
    const body = `Bonjour,

Je souhaitais partager cet article avec vous :

${title}

${excerpt ? excerpt.substring(0, 200) + (excerpt.length &gt; 200 ? '...' : '') : ''}

Lire l'article : ${shareUrl}

---
DAINAMICS - Intelligence Artificielle et Automatisation pour PME
https://dainamics.ch`;

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&amp;body=${encodeURIComponent(body)}`;
    
    // Create a real anchor element and click it - works on Safari/Mac
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showShareNotif('Email');
  }, [title, excerpt, shareUrl, showShareNotif]);

  const shareOptions: ShareOption[] = [
    {
      id: 'twitter',
      name: 'Twitter / X',
      icon: Twitter,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-900',
      action: () =&gt; {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&amp;url=${encodedUrl}`,
          '_blank',
          'width=600,height=400,noopener,noreferrer'
        );
        showShareNotif('Twitter');
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#004182]',
      action: () =&gt; {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          '_blank',
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('LinkedIn');
      }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#0d65d9]',
      action: () =&gt; {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          '_blank',
          'width=600,height=400,noopener,noreferrer'
        );
        showShareNotif('Facebook');
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#1da851]',
      action: () =&gt; {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
          ? `whatsapp://send?text=${encodedTitle}%20${encodedUrl}`
          : `https://web.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        showShareNotif('WhatsApp');
      }
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: TelegramIcon,
      color: 'bg-[#0088cc]',
      hoverColor: 'hover:bg-[#006699]',
      action: () =&gt; {
        window.open(
          `https://t.me/share/url?url=${encodedUrl}&amp;text=${encodedTitle}`,
          '_blank',
          'noopener,noreferrer'
        );
        showShareNotif('Telegram');
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      action: handleEmailShare
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: RedditIcon,
      color: 'bg-[#FF4500]',
      hoverColor: 'hover:bg-[#cc3700]',
      action: () =&gt; {
        window.open(
          `https://reddit.com/submit?url=${encodedUrl}&amp;title=${encodedTitle}`,
          '_blank',
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('Reddit');
      }
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-[#E60023]',
      hoverColor: 'hover:bg-[#ad001a]',
      action: () =&gt; {
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodedUrl}&amp;description=${encodedTitle}`,
          '_blank',
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('Pinterest');
      }
    }
  ];

  const copyToClipboard = useCallback(async () =&gt; {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() =&gt; setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() =&gt; setCopied(false), 2000);
    }
  }, [shareUrl]);

  const handleNativeShare = useCallback(async () =&gt; {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url: shareUrl
        });
        showShareNotif('appareil');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setShowModal(true);
        }
      }
    } else {
      setShowModal(true);
    }
  }, [title, excerpt, shareUrl, showShareNotif]);

  const handlePrint = useCallback(() =&gt; {
    // Close modal
    setShowModal(false);
    
    // Create hidden iframe for printing
    setTimeout(() =&gt; {
      const printFrame = document.createElement('iframe');
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = 'none';
      document.body.appendChild(printFrame);

      const articleContent = document.querySelector('.article-content');
      const articleHeader = document.querySelector('header h1')?.textContent || title;
      const authorElement = document.querySelector('.text-gray-400.mb-8');
      const authorText = authorElement?.textContent || '';
      
      // Extract date from author text (format: "Par Author • Date • X min")
      const dateMatch = authorText.match(/•\s*([^•]+)\s*•/);
      const articleDate = dateMatch ? dateMatch[1].trim() : new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      if (printFrame.contentWindow &amp;&amp; articleContent) {
        const doc = printFrame.contentWindow.document;

        doc.open();
        doc.write(`
          &lt;!DOCTYPE html&gt;
          &lt;html lang="fr"&gt;
          &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;title&gt;${articleHeader} - DAINAMICS&lt;/title&gt;
            &lt;style&gt;
              /* Reset */
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              @page {
                size: A4;
                margin: 20mm 25mm 25mm 25mm;
              }
              
              body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 10.5pt;
                line-height: 1.65;
                color: #222;
                background: white;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              /* Header bar */
              .print-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 15px 0;
                margin-bottom: 25px;
                border-bottom: 3px solid #6366f1;
              }
              
              .print-logo {
                display: flex;
                align-items: center;
                gap: 8px;
              }
              
              .print-logo-icon {
                width: 28px;
                height: 28px;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              
              .print-logo-icon svg {
                width: 16px;
                height: 16px;
                fill: white;
              }
              
              .print-logo-text {
                font-size: 16pt;
                font-weight: 700;
                letter-spacing: -0.5px;
              }
              
              .print-logo-text .dai {
                color: #6366f1;
              }
              
              .print-logo-text .namics {
                color: #222;
              }
              
              .print-meta {
                text-align: right;
                font-size: 8.5pt;
                color: #666;
                line-height: 1.4;
              }
              
              .print-meta-label {
                font-weight: 600;
                color: #6366f1;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-size: 7pt;
                display: block;
                margin-bottom: 2px;
              }
              
              /* Title section */
              .print-title-section {
                margin-bottom: 30px;
                padding-bottom: 25px;
                border-bottom: 1px solid #e5e5e5;
              }
              
              .print-title {
                font-size: 26pt;
                font-weight: 700;
                color: #111;
                line-height: 1.15;
                margin-bottom: 12px;
                letter-spacing: -0.5px;
              }
              
              .print-subtitle {
                font-size: 12pt;
                color: #555;
                line-height: 1.5;
                font-weight: 400;
              }
              
              /* Article content */
              .print-content {
                column-count: 1;
              }
              
              .print-content h1 {
                font-size: 16pt;
                font-weight: 700;
                color: #111;
                margin: 28px 0 14px 0;
                page-break-after: avoid;
                letter-spacing: -0.3px;
              }
              
              .print-content h2 {
                font-size: 13pt;
                font-weight: 700;
                color: #222;
                margin: 24px 0 12px 0;
                padding-bottom: 6px;
                border-bottom: 2px solid #6366f1;
                page-break-after: avoid;
              }
              
              .print-content h3 {
                font-size: 11pt;
                font-weight: 700;
                color: #333;
                margin: 20px 0 10px 0;
                page-break-after: avoid;
              }
              
              .print-content p {
                margin-bottom: 12px;
                text-align: justify;
                hyphens: auto;
                orphans: 3;
                widows: 3;
              }
              
              .print-content a {
                color: #6366f1;
                text-decoration: none;
                font-weight: 500;
              }
              
              .print-content strong, .print-content b {
                font-weight: 700;
                color: #111;
              }
              
              .print-content em, .print-content i {
                font-style: italic;
              }
              
              .print-content ul,
              .print-content ol {
                margin: 14px 0;
                padding-left: 24px;
              }
              
              .print-content li {
                margin-bottom: 6px;
              }
              
              .print-content li::marker {
                color: #6366f1;
              }
              
              .print-content code {
                font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
                font-size: 9pt;
                background: #f4f4f5;
                padding: 2px 5px;
                border-radius: 3px;
                color: #6366f1;
              }
              
              .print-content pre {
                background: #fafafa;
                border: 1px solid #e5e5e5;
                border-left: 3px solid #6366f1;
                padding: 14px;
                margin: 18px 0;
                overflow-x: auto;
                font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
                font-size: 8.5pt;
                line-height: 1.5;
                page-break-inside: avoid;
                border-radius: 0 6px 6px 0;
              }
              
              .print-content pre code {
                background: none;
                border: none;
                padding: 0;
                color: #333;
              }
              
              .print-content blockquote {
                border-left: 3px solid #6366f1;
                background: linear-gradient(90deg, #f8f7ff 0%, #ffffff 100%);
                margin: 20px 0;
                padding: 16px 20px;
                font-style: italic;
                color: #444;
                page-break-inside: avoid;
                border-radius: 0 8px 8px 0;
              }
              
              .print-content blockquote p {
                margin-bottom: 0;
                text-align: left;
              }
              
              .print-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 18px 0;
                font-size: 9pt;
                page-break-inside: avoid;
              }
              
              .print-content th {
                background: #6366f1;
                color: white;
                font-weight: 600;
                text-align: left;
                padding: 10px 12px;
              }
              
              .print-content td {
                padding: 10px 12px;
                border-bottom: 1px solid #e5e5e5;
              }
              
              .print-content tr:nth-child(even) td {
                background: #fafafa;
              }
              
              .print-content hr {
                border: none;
                height: 1px;
                background: linear-gradient(90deg, transparent, #e5e5e5, transparent);
                margin: 28px 0;
              }
              
              .print-content img {
                max-width: 100%;
                height: auto;
                margin: 16px 0;
                border-radius: 6px;
                page-break-inside: avoid;
              }
              
              /* Footer */
              .print-footer {
                margin-top: 35px;
                padding-top: 20px;
                border-top: 3px solid #6366f1;
              }
              
              .print-footer-grid {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
              }
              
              .print-footer-left {
                flex: 1;
              }
              
              .print-footer-tagline {
                font-size: 9pt;
                font-weight: 600;
                color: #6366f1;
                margin-bottom: 6px;
              }
              
              .print-footer-url {
                font-family: 'SF Mono', 'Monaco', monospace;
                font-size: 8pt;
                color: #666;
                word-break: break-all;
              }
              
              .print-footer-copyright {
                font-size: 7.5pt;
                color: #999;
                margin-top: 8px;
              }
              
              .print-footer-right {
                text-align: right;
              }
              
              .print-footer-site {
                font-size: 10pt;
                font-weight: 700;
                color: #6366f1;
              }
            &lt;/style&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;div class="print-header"&gt;
              &lt;div class="print-logo"&gt;
                &lt;div class="print-logo-icon"&gt;
                  &lt;svg viewBox="0 0 24 24"&gt;
                    &lt;path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/&gt;
                  &lt;/svg&gt;
                &lt;/div&gt;
                &lt;span class="print-logo-text"&gt;&lt;span class="dai"&gt;DAI&lt;/span&gt;&lt;span class="namics"&gt;NAMICS&lt;/span&gt;&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="print-meta"&gt;
                &lt;span class="print-meta-label"&gt;Blog&lt;/span&gt;
                ${articleDate}
              &lt;/div&gt;
            &lt;/div&gt;
            
            &lt;div class="print-title-section"&gt;
              &lt;h1 class="print-title"&gt;${articleHeader}&lt;/h1&gt;
              ${excerpt ? `&lt;p class="print-subtitle"&gt;${excerpt}&lt;/p&gt;` : ''}
            &lt;/div&gt;
            
            &lt;div class="print-content"&gt;
              ${articleContent.innerHTML}
            &lt;/div&gt;
            
            &lt;div class="print-footer"&gt;
              &lt;div class="print-footer-grid"&gt;
                &lt;div class="print-footer-left"&gt;
                  &lt;p class="print-footer-tagline"&gt;Intelligence Artificielle &amp; Automatisation pour PME&lt;/p&gt;
                  &lt;p class="print-footer-url"&gt;${shareUrl}&lt;/p&gt;
                  &lt;p class="print-footer-copyright"&gt;© ${new Date().getFullYear()} DAINAMICS - Tous droits reserves&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="print-footer-right"&gt;
                  &lt;p class="print-footer-site"&gt;dainamics.ch&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/body&gt;
          &lt;/html&gt;
        `);
        doc.close();

        // Wait for load then print
        printFrame.onload = () =&gt; {
          setTimeout(() =&gt; {
            printFrame.contentWindow?.print();
            // Cleanup after print
            setTimeout(() =&gt; {
              document.body.removeChild(printFrame);
            }, 1000);
          }, 250);
        };
      }
    }, 300);
  }, [title, excerpt, shareUrl]);

  // Generate QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=${encodedUrl}&amp;bgcolor=0A0A0F&amp;color=FFFFFF&amp;format=svg`;

  // Notification Toast
  const NotificationToast = () =&gt; (
    &lt;AnimatePresence&gt;
      {shareNotification &amp;&amp; (
        &lt;motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-green-500 text-white rounded-full shadow-lg flex items-center gap-2"
        &gt;
          &lt;Check className="w-4 h-4" /&gt;
          &lt;span className="font-medium"&gt;{shareNotification}&lt;/span&gt;
        &lt;/motion.div&gt;
      )}
    &lt;/AnimatePresence&gt;
  );

  // Inline variant
  if (variant === 'inline') {
    return (
      &lt;&gt;
        &lt;div className={`flex items-center gap-2 ${className}`}&gt;
          &lt;button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dainamics-primary/20 hover:bg-dainamics-primary/30 border border-dainamics-primary/30 text-white transition-all hover:scale-105"
          &gt;
            &lt;Share2 className="w-4 h-4" /&gt;
            {showLabels &amp;&amp; &lt;span className="text-sm font-medium"&gt;Partager&lt;/span&gt;}
          &lt;/button&gt;

          &lt;div className="hidden sm:flex items-center gap-1.5"&gt;
            {shareOptions.slice(0, 4).map((option) =&gt; (
              &lt;button
                key={option.id}
                onClick={() =&gt; option.action(title, shareUrl, excerpt)}
                className={`p-2.5 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                title={option.name}
              &gt;
                &lt;option.icon className="w-4 h-4" /&gt;
              &lt;/button&gt;
            ))}
          &lt;/div&gt;

          &lt;button
            onClick={copyToClipboard}
            className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white'
            }`}
            title={copied ? 'Lien copié !' : 'Copier le lien'}
          &gt;
            {copied ? &lt;Check className="w-4 h-4" /&gt; : &lt;Link2 className="w-4 h-4" /&gt;}
          &lt;/button&gt;

          &lt;ShareModal
            isOpen={showModal}
            onClose={() =&gt; setShowModal(false)}
            title={title}
            url={shareUrl}
            excerpt={excerpt}
            shareOptions={shareOptions}
            copyToClipboard={copyToClipboard}
            copied={copied}
            handlePrint={handlePrint}
            qrCodeUrl={qrCodeUrl}
            showQR={showQR}
            setShowQR={setShowQR}
          /&gt;
        &lt;/div&gt;
        &lt;NotificationToast /&gt;
      &lt;/&gt;
    );
  }

  // Floating variant
  if (variant === 'floating') {
    return (
      &lt;&gt;
        &lt;AnimatePresence&gt;
          {showFloating &amp;&amp; (
            &lt;motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`fixed left-4 z-40 transition-all duration-300 ${
                isAtBottom ? 'bottom-24' : 'top-1/2 -translate-y-1/2'
              } ${className}`}
              data-hide-print="true"
            &gt;
              &lt;div className="flex flex-col gap-2 p-2 rounded-2xl bg-dainamics-background/90 backdrop-blur-xl border border-white/10 shadow-2xl"&gt;
                &lt;button
                  onClick={handleNativeShare}
                  className="p-3 rounded-xl bg-dainamics-primary hover:bg-dainamics-primary/80 text-white transition-all hover:scale-110"
                  title="Partager"
                &gt;
                  &lt;Share2 className="w-5 h-5" /&gt;
                &lt;/button&gt;

                &lt;div className="w-full h-px bg-white/10" /&gt;

                {shareOptions.slice(0, 5).map((option) =&gt; (
                  &lt;button
                    key={option.id}
                    onClick={() =&gt; option.action(title, shareUrl, excerpt)}
                    className={`p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                    title={option.name}
                  &gt;
                    &lt;option.icon className="w-5 h-5" /&gt;
                  &lt;/button&gt;
                ))}

                &lt;div className="w-full h-px bg-white/10" /&gt;

                &lt;button
                  onClick={copyToClipboard}
                  className={`p-3 rounded-xl transition-all hover:scale-110 ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-gray-400'
                  }`}
                  title={copied ? 'Copié !' : 'Copier le lien'}
                &gt;
                  {copied ? &lt;Check className="w-5 h-5" /&gt; : &lt;Link2 className="w-5 h-5" /&gt;}
                &lt;/button&gt;

                &lt;button
                  onClick={() =&gt; setShowModal(true)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  title="Plus d'options"
                &gt;
                  &lt;ChevronUp className="w-5 h-5" /&gt;
                &lt;/button&gt;
              &lt;/div&gt;
            &lt;/motion.div&gt;
          )}
        &lt;/AnimatePresence&gt;

        &lt;ShareModal
          isOpen={showModal}
          onClose={() =&gt; setShowModal(false)}
          title={title}
          url={shareUrl}
          excerpt={excerpt}
          shareOptions={shareOptions}
          copyToClipboard={copyToClipboard}
          copied={copied}
          handlePrint={handlePrint}
          qrCodeUrl={qrCodeUrl}
          showQR={showQR}
          setShowQR={setShowQR}
        /&gt;
        
        &lt;NotificationToast /&gt;
      &lt;/&gt;
    );
  }

  // Modal variant
  return (
    &lt;&gt;
      &lt;div className={className}&gt;
        &lt;button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
        &gt;
          &lt;Share2 className="w-4 h-4" /&gt;
          {showLabels &amp;&amp; &lt;span className="text-sm"&gt;Partager&lt;/span&gt;}
        &lt;/button&gt;

        &lt;ShareModal
          isOpen={showModal}
          onClose={() =&gt; setShowModal(false)}
          title={title}
          url={shareUrl}
          excerpt={excerpt}
          shareOptions={shareOptions}
          copyToClipboard={copyToClipboard}
          copied={copied}
          handlePrint={handlePrint}
          qrCodeUrl={qrCodeUrl}
          showQR={showQR}
          setShowQR={setShowQR}
        /&gt;
      &lt;/div&gt;
      &lt;NotificationToast /&gt;
    &lt;/&gt;
  );
};

// Modal component
interface ShareModalProps {
  isOpen: boolean;
  onClose: () =&gt; void;
  title: string;
  url: string;
  excerpt?: string;
  shareOptions: ShareOption[];
  copyToClipboard: () =&gt; void;
  copied: boolean;
  handlePrint: () =&gt; void;
  qrCodeUrl: string;
  showQR: boolean;
  setShowQR: (show: boolean) =&gt; void;
}

const ShareModal = ({
  isOpen,
  onClose,
  title,
  url,
  excerpt,
  shareOptions,
  copyToClipboard,
  copied,
  handlePrint,
  qrCodeUrl,
  showQR,
  setShowQR
}: ShareModalProps) =&gt; {
  const [emailPreview, setEmailPreview] = useState(false);

  useEffect(() =&gt; {
    const handleEscape = (e: KeyboardEvent) =&gt; {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () =&gt; {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() =&gt; {
    if (!isOpen) {
      setEmailPreview(false);
      setShowQR(false);
    }
  }, [isOpen, setShowQR]);

  return (
    &lt;AnimatePresence&gt;
      {isOpen &amp;&amp; (
        &lt;motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          data-hide-print="true"
        &gt;
          &lt;div className="absolute inset-0 bg-black/80 backdrop-blur-sm" /&gt;

          &lt;motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) =&gt; e.stopPropagation()}
            className="relative w-full max-w-md bg-dainamics-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            data-hide-print="true"
          &gt;
            {/* Header */}
            &lt;div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-dainamics-background/95 backdrop-blur-sm"&gt;
              &lt;div&gt;
                &lt;h3 className="text-xl font-bold text-white"&gt;Partager l'article&lt;/h3&gt;
                &lt;p className="text-sm text-gray-400 mt-1 line-clamp-1"&gt;{title}&lt;/p&gt;
              &lt;/div&gt;
              &lt;button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
              &gt;
                &lt;X className="w-5 h-5" /&gt;
              &lt;/button&gt;
            &lt;/div&gt;

            {/* Content */}
            &lt;div className="p-6 space-y-6"&gt;
              {/* Social share grid */}
              &lt;div&gt;
                &lt;p className="text-sm font-medium text-gray-400 mb-3"&gt;Réseaux sociaux&lt;/p&gt;
                &lt;div className="grid grid-cols-4 gap-3"&gt;
                  {shareOptions.map((option) =&gt; (
                    &lt;button
                      key={option.id}
                      onClick={() =&gt; option.action(title, url, excerpt)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-105`}
                    &gt;
                      &lt;option.icon className="w-5 h-5" /&gt;
                      &lt;span className="text-[10px] font-medium truncate w-full text-center"&gt;
                        {option.name.split(' ')[0]}
                      &lt;/span&gt;
                    &lt;/button&gt;
                  ))}
                &lt;/div&gt;
              &lt;/div&gt;

              {/* Email Preview Toggle */}
              &lt;div&gt;
                &lt;button
                  onClick={() =&gt; setEmailPreview(!emailPreview)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-all"
                &gt;
                  &lt;div className="flex items-center gap-3"&gt;
                    &lt;Mail className="w-5 h-5" /&gt;
                    &lt;span className="text-sm font-medium"&gt;Aperçu de l'email&lt;/span&gt;
                  &lt;/div&gt;
                  &lt;ExternalLink className={`w-4 h-4 transition-transform ${emailPreview ? 'rotate-180' : ''}`} /&gt;
                &lt;/button&gt;
                
                &lt;AnimatePresence&gt;
                  {emailPreview &amp;&amp; (
                    &lt;motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    &gt;
                      &lt;div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10 text-sm"&gt;
                        &lt;div className="mb-3 pb-3 border-b border-white/10"&gt;
                          &lt;p className="text-gray-500 text-xs mb-1"&gt;Objet :&lt;/p&gt;
                          &lt;p className="text-white"&gt;Article interessant : {title}&lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div className="space-y-2 text-gray-400"&gt;
                          &lt;p&gt;Bonjour,&lt;/p&gt;
                          &lt;p&gt;Je souhaitais partager cet article avec vous :&lt;/p&gt;
                          &lt;p className="text-dainamics-primary font-medium"&gt;"{title}"&lt;/p&gt;
                          {excerpt &amp;&amp; (
                            &lt;p className="text-gray-500 italic text-xs"&gt;
                              "{excerpt.slice(0, 100)}..."
                            &lt;/p&gt;
                          )}
                          &lt;p className="text-dainamics-secondary underline"&gt;{url}&lt;/p&gt;
                          &lt;p className="text-gray-500 text-xs mt-4 pt-3 border-t border-white/10"&gt;
                            Partage depuis le blog DAINAMICS
                          &lt;/p&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/motion.div&gt;
                  )}
                &lt;/AnimatePresence&gt;
              &lt;/div&gt;

              {/* Copy link */}
              &lt;div&gt;
                &lt;p className="text-sm font-medium text-gray-400 mb-3"&gt;Copier le lien&lt;/p&gt;
                &lt;div className="flex gap-2"&gt;
                  &lt;div className="flex-1 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 text-sm truncate font-mono"&gt;
                    {url}
                  &lt;/div&gt;
                  &lt;button
                    onClick={copyToClipboard}
                    className={`px-4 py-3 rounded-xl font-medium transition-all min-w-[100px] ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-dainamics-primary hover:bg-dainamics-primary/80 text-white'
                    }`}
                  &gt;
                    {copied ? (
                      &lt;span className="flex items-center justify-center gap-2"&gt;
                        &lt;Check className="w-4 h-4" /&gt;
                        Copié
                      &lt;/span&gt;
                    ) : (
                      'Copier'
                    )}
                  &lt;/button&gt;
                &lt;/div&gt;
              &lt;/div&gt;

              {/* Additional options */}
              &lt;div className="flex gap-3"&gt;
                &lt;button
                  onClick={() =&gt; setShowQR(!showQR)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                    showQR
                      ? 'bg-dainamics-secondary/20 border-dainamics-secondary/40 text-dainamics-secondary'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                &gt;
                  &lt;QrCode className="w-5 h-5" /&gt;
                  &lt;span className="text-sm font-medium"&gt;QR Code&lt;/span&gt;
                &lt;/button&gt;

                &lt;button
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                &gt;
                  &lt;Printer className="w-5 h-5" /&gt;
                  &lt;span className="text-sm font-medium"&gt;Imprimer&lt;/span&gt;
                &lt;/button&gt;
              &lt;/div&gt;

              {/* QR Code display */}
              &lt;AnimatePresence&gt;
                {showQR &amp;&amp; (
                  &lt;motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  &gt;
                    &lt;div className="flex flex-col items-center p-6 bg-white rounded-2xl"&gt;
                      &lt;img
                        src={qrCodeUrl}
                        alt="QR Code pour partager l'article"
                        className="w-48 h-48"
                        style={{ filter: 'invert(1)' }}
                      /&gt;
                      &lt;p className="text-sm text-gray-600 mt-3 text-center"&gt;
                        Scannez pour accéder à l'article
                      &lt;/p&gt;
                      &lt;a 
                        href={qrCodeUrl.replace('svg', 'png')} 
                        download={`qr-${title.slice(0, 30).replace(/\s/g, '-')}.png`}
                        className="mt-3 text-xs text-dainamics-primary hover:underline"
                      &gt;
                        Télécharger le QR Code
                      &lt;/a&gt;
                    &lt;/div&gt;
                  &lt;/motion.div&gt;
                )}
              &lt;/AnimatePresence&gt;
            &lt;/div&gt;

            {/* Footer */}
            &lt;div className="sticky bottom-0 px-6 py-4 bg-white/[0.02] border-t border-white/10 backdrop-blur-sm"&gt;
              &lt;p className="text-xs text-gray-500 text-center"&gt;
                Partage depuis le blog DAINAMICS - IA et Automatisation pour PME
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/motion.div&gt;
        &lt;/motion.div&gt;
      )}
    &lt;/AnimatePresence&gt;
  );
};

export default ShareButtons;
